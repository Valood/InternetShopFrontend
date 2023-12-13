import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { CustomNavbar } from "../components/CustomNavbar";
import { useContext } from "react";
import { ToastContext } from "../context/ToastProvider";

export default function OrdersHistory() {
  const { handleSuccessAction } = useContext(ToastContext);
  const products = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 39.99 },
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
    { id: 3, name: "Product 3", price: 39.99 },
  ];

  return (
    <div className="main page">
      <CustomNavbar />
      <Container className="mt-5">
        <Row>
          <Col md={3} xs={4}></Col>
          <Col md={9} xs={8}>
            <h1 className="products-title mb-4">История заказов</h1>
            <div>
              {products.map((product) => (
                <Card key={product.id} className="mb-2">
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>Price: ${product.price}</Card.Text>
                    <Card.Text>Количество: ${product.price}</Card.Text>
                    <Card.Text>Дата: ${product.price}</Card.Text>
                    <Button variant="primary" onClick={() => {}}>
                      Подробнее
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
