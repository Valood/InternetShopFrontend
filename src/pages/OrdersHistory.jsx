import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { CustomNavbar } from "../components/CustomNavbar";
import { useContext, useEffect } from "react";
import { ToastContext } from "../context/ToastProvider";
import { historySlice } from "../store/Reducers/historySlice";
import { httpWithToken } from "../http/http";
import { useDispatch, useSelector } from "react-redux";

export default function OrdersHistory() {
  const [modalShow, setModalShow] = useState(false);

  const { handleSuccessAction } = useContext(ToastContext);
  const { setHistory } = historySlice.actions
  const { history } = useSelector(state => state.historySlice)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchHistory = async () => {
      const history = (await httpWithToken('/api/orders')).data
      dispatch(setHistory(history));
    }
    fetchHistory()
  }, [])

  function onModalOpen() {
    setModalShow(true);
  }

  return (
    <div className="main page">
      <CustomNavbar />
      <ModalReview modalShow={modalShow} setModalShow={setModalShow} />
      <Container className="mt-5">
        <Row>
          <Col md={3} xs={4}></Col>
          <Col md={9} xs={8}>
            <h1 className="products-title mb-4">История заказов</h1>
            <div>
              {history.map((product) => (
                <Card key={product.id} className="mb-2">
                  <Card.Body>
                    {product.orders.map((e) => <div className="mb-2">
                      <Card.Title>{e.name}</Card.Title>
                      <Card.Text>Цена: {e.price} &#8381;</Card.Text>
                      <Card.Text>{e.description}</Card.Text>
                      <Card.Text>Дата: {product.date}</Card.Text>
                      <Button variant="primary" onClick={() => { }}>
                        Подробнее
                      </Button>
                      <Button className="ms-2" variant="primary" onClick={onModalOpen}>
                      Оставить отзыв
                    </Button>
                    </div>)}

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

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function ModalReview({ modalShow, setModalShow }) {
  // eslint-disable-next-line
  const [review, setReview] = useState("");

  const onSubmit = async () => {
    setModalShow(false);
  };

  return (
    <Modal size="lg" show={modalShow} onHide={() => setModalShow(false)} aria-labelledby="example-modal-sizes-title-lg">
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Оставить отзыв</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={(e) => setReview(e.target.value)}
              as="textarea"
              placeholder="Расскажите ваши впечатления"
            />
          </Form.Group>

          <Button onClick={onSubmit} variant="primary" type="button">
            Отправить
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
