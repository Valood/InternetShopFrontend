import { Card, Col, Container, Row, Form } from "react-bootstrap";
import { CustomNavbar } from "../components/CustomNavbar";
import { useState } from "react";
import './Cart.scss'


export default function Cart(){
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
        { id: 2, name: 'Product 2', price: 29.99, quantity: 1 },
    ]);

    return (
        <div className="cart page">
            <CustomNavbar/>
            <Container className="cart-container mt-4">
                <h1 className="cart-title mb-4">Корзина</h1>
                <Row>
                    <Col xs={8} className="cart-list d-flex flex-column gap-5">
                        {cartItems.map(product => <Card className="cart-item">
                            <Card.Header>{product.name}</Card.Header>
                            <Card.Body className="cart-itemBody d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-baseline gap-3">
                                    <Form.Label>Количество: </Form.Label>
                                    <Form.Control
                                        className="cart-inputNumber"
                                        type="number"
                                        value={product.quantity}
                                        onChange={() => {

                                        }}
                                    />
                                </div>
                                <p className="m-0">Стоимость: {product.price * product.quantity} &#8381;</p>
                            </Card.Body>
                        </Card>)}
                    </Col>
                    <Col xs={4} className="cart-overall overall">
                        <h2 className="mb-4">Итого:</h2>
                        <div className="overall-property mb-2 d-flex justify-content-between">
                            <p>Количество товаров:</p>
                            <p>{cartItems.reduce((acc, curr) => acc + curr.quantity, 0)} шт.</p>
                        </div>
                        <div className="overall-property mb-2 d-flex justify-content-between">
                            <p>Стоимость:</p>
                            <p>{cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)} &#8381;</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}