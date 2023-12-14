import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import { CustomNavbar } from "../components/CustomNavbar";
import { useEffect, useState } from "react";
import './Cart.scss'
import useAuthGuard from "../hooks/useAuthGuard";
import { useDispatch, useSelector } from "react-redux";
import {cartSlice} from "../store/Reducers/cartSlice";
import { httpWithToken } from "../http/http";


export default function Cart(){
    useAuthGuard()
    
    const dispatch = useDispatch()
    const {cartProducts} = useSelector(state => state.cartSlice)
    const {changeQuantity, setCart} = cartSlice.actions

    useEffect(() => {
        const fetchCart = async() => {
            const data = (await httpWithToken.get('/api/cart')).data
            dispatch(setCart(data.map(proudct => ({...proudct, quantity: 1}))))
        }
        fetchCart()
    }, [])

    const handleChangeQuantity = (product, value) => {
        dispatch(changeQuantity({quantity: value, product}))
    }

    

    return (
        <div className="cart page">
            <CustomNavbar/>
            <Container className="cart-container mt-4">
                <h1 className="cart-title mb-4">Корзина</h1>
                <Row>
                    <Col xs={8} className="cart-list d-flex flex-column gap-5">
                        {cartProducts.map(product => <Card className="cart-item">
                            <Card.Header>{product.name}</Card.Header>
                            <Card.Body className="cart-itemBody d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-baseline gap-3">
                                    <Form.Label>Количество: </Form.Label>
                                    <Form.Control
                                        className="cart-inputNumber"
                                        type="number"
                                        value={product.quantity}
                                        onChange={(event) => {
                                            handleChangeQuantity(product, +event.target.value)
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
                            <p>{cartProducts.reduce((acc, curr) => acc + curr.quantity, 0)} шт.</p>
                        </div>
                        <div className="overall-property mb-2 d-flex justify-content-between">
                            <p>Стоимость:</p>
                            <p>{cartProducts.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)} &#8381;</p>
                        </div>
                        <Button className="mt-3" onClick={() => {}}>
                            Заказать
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}