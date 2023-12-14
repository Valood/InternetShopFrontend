import { Nav, Card, Button, Container, Row, Col } from "react-bootstrap";
import { CustomNavbar } from "../components/CustomNavbar";
import { useContext, useEffect, useState } from "react";
import { ToastContext } from "../context/ToastProvider";
import useAuthGuard from "../hooks/useAuthGuard";
import { useParams } from "react-router";
import {httpWithToken} from "../http/http"

export default function ProductPage() {
  useAuthGuard();

  const { handleSuccessAction } = useContext(ToastContext);
  const [product, setProduct] = useState({})
  const [comments, setComments] = useState([])
  const { id } = useParams();

  useEffect(()=>{
    const fetchData = async() => {
      const a = await httpWithToken.get(`/api/product/${id}`)
      setProduct(a.data)
      const b = await httpWithToken.get(`/api/product/${id}/comments`)
      setComments(b.data)
    }
    fetchData()
  },[])

  const handleAddToCart = (product) => {
    handleSuccessAction("Добавлено в корзину");
  };

  return (
    <div className="main page">
      <CustomNavbar />
      <Container className="products mt-5">
        <Row className="mb-5">
          <Col md={3} xs={4}>
            <img src={product?.image} style={{objectFit:'cover'}} width={200} />
          </Col>
          <Col md={9} xs={8}>
            {[product].map((product) => (
              <Card key={product.id} className="">
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Цена: {product.price}</Card.Text>
                  <Card.Text>Описание: {product.description}</Card.Text>
                  <Card.Text>Рейтинг товара: {product.rating} из 10</Card.Text>
                  <Button variant="primary" onClick={() => handleAddToCart(product)}>
                    Добавить в корзину
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
        <h2>Комментарии</h2>
        <Comment
          reviews={comments}
        />
      </Container>
    </div>
  );
}

function Comment({ reviews }) {
  return (
    <>
      {reviews.length === 0 && (
        <Card className="mb-4">
          <Card.Header> </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p> </p>
              <footer className="blockquote-footer">Отзывов пока нет</footer>
            </blockquote>
          </Card.Body>
        </Card>
      )}
      {reviews.map((e, i) => (
        <Card key={i} className="mb-4">
          <Card.Header>{e.name}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p> </p>
              <footer className="blockquote-footer">{e.message}</footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
