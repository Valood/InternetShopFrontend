import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './CreateProduct.scss'
import { useDispatch } from "react-redux";
import { productSlice } from "../store/Reducers/productReducer";
import { http } from "../http/http";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
    const dispatch = useDispatch()
    const {addProduct} = productSlice.actions;
    const navigate = useNavigate()

    const [settings, setSettings] = useState({
        name: "",
        price: 0,
        description: "",
        image: "",
    });

    function handleSettings(k, value) {
        setSettings((prev) => {
            return { ...prev, [`${k}`]: value };
        });
    }

    const postProduct = async () => {
        const product = { ...settings };
        dispatch(addProduct(product))
        await http.post('/api/product', product)
        navigate('/')
    };

    function handleImg(event) {
        let reader = new FileReader();
        reader.onload = function () {
            const base64 = reader.result;
            handleSettings("image", base64);
        };
        if (event.target.files[0]) {
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    return (
        <Row className="m-auto createProduct">
            <Col md={8} className="w-100">
            <h2>Создать продукт</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Название</Form.Label>
                        <Form.Control onChange={(e) => handleSettings("name", e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Фотография</Form.Label>
                        <Form.Control type="file" size="sm" onChange={handleImg} />
                    </Form.Group>

                    <Row className="mb-3">
                        <Col xs={12}>
                            <Form.Group>
                                <Form.Label>Цена</Form.Label>
                                <Form.Control onChange={(e) => handleSettings("price", e.target.value)} type="number" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Описание</Form.Label>
                        <Form.Control onChange={(e) => handleSettings("description", e.target.value)} as="textarea" rows={3} />
                    </Form.Group>

                    <Button onClick={postProduct} variant="primary" type="button">
                        Создать
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}
