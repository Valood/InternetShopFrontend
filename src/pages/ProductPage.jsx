import { Nav, Card, Button, Container, Row, Col } from "react-bootstrap";
import { CustomNavbar } from "../components/CustomNavbar";
import { useContext } from "react";
import { ToastContext } from "../context/ToastProvider";
import useAuthGuard from "../hooks/useAuthGuard";
import { useParams } from "react-router";

export default function ProductPage() {
  useAuthGuard();

  const { handleSuccessAction } = useContext(ToastContext);
  const products = [{ id: 1, name: "Название", price: 19.99 }];
  const { id } = useParams();

  const handleAddToCart = (product) => {
    handleSuccessAction("Добавлено в корзину");
  };

  return (
    <div className="main page">
      <CustomNavbar />
      <Container className="products mt-5">
        <Row className="mb-5">
          <Col md={3} xs={4}>
            <img src={product?.image} />
          </Col>
          <Col md={9} xs={8}>
            {products.map((product) => (
              <Card key={product.id} className="">
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Card.Text>Описание: ${product.price}</Card.Text>
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
          reviews={[
            { name: "Имя", surname: "Фамилия", reviews: "Комментарий" },
            { name: "123", surname: "456", reviews: "222" },
          ]}
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
          <Card.Header>{e.name + " " + e.surname}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p> </p>
              <footer className="blockquote-footer">{e.reviews}</footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
