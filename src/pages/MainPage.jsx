import { Nav, Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import { CustomNavbar } from "../components/CustomNavbar";
import "./MainPage.scss";
import { useContext, useEffect, useMemo, useState } from "react";
import { ToastContext } from "../context/ToastProvider";
import useAuthGuard from "../hooks/useAuthGuard";
import { http, httpWithToken } from "../http/http";
import { useDispatch, useSelector } from "react-redux";
import { productSlice } from "../store/Reducers/productReducer";
import { useNavigate } from "react-router";
import { cartSlice } from '../store/Reducers/cartSlice';

export default function MainPage() {
  useAuthGuard();
  const navigate = useNavigate();
  const { handleSuccessAction } = useContext(ToastContext);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productSlice);
  const { setProducts } = productSlice.actions;
  const {addToCart} = cartSlice.actions

  const [filters, setFilters] = useState({
    name: null,
    price: null,
  });

  useEffect(() => {
    const fetchProducts = async () => (await http.get("/api/products")).data;
    fetchProducts().then((data) => dispatch(setProducts(data)));
  }, []);

  const filteredProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          (!filters.name || product.name.toLocaleLowerCase().includes(filters.name.toLocaleLowerCase())) &&
          (!filters.price || (product.price >= 0 && product.price <= filters.price))
      ),
    [filters, products]
  );

  const handleAddToCart = async(product) => {
    dispatch(addToCart({...product, quantity: 1}))
    await httpWithToken.post('/api/cart', {product: product.id})
    handleSuccessAction("Добавлено в корзину");
  };

  return (
    <div className="main page">
      <CustomNavbar />
      <Container className="products mt-5 p-0">
        <Row>
          <Col md={3} xs={4} className="main-filters d-flex flex-column pe-5 ps-0">
            <h2>Фильтры:</h2>
            <Form className="d-flex flex-column gap-3 mt-4">
              <Form.Group>
                <Form.Label>Наименование товара</Form.Label>
                <Form.Control
                  value={filters.name}
                  onChange={(event) => setFilters({ ...filters, name: event.target.value })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Максимальная цена товара</Form.Label>
                <Form.Control
                  type="number"
                  defaultValue={filters.price}
                  onChange={(event) => setFilters({ ...filters, price: +event.target.value })}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col md={9} xs={8} className="ps-5">
            <h1 className="products-title mb-4">Каталог товаров</h1>
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="products-card">
                  <Card.Body>
                    <img className="p-2" src={product.image} width={80} />
                    <Card.Title style={{ cursor: "pointer" }} onClick={() => navigate("/product/" + product.id)}>
                      {product.name}
                    </Card.Title>
                    <Card.Text>Стоимость: {product.price} &#8381;</Card.Text>
                    <Button variant="primary" onClick={() => handleAddToCart(product)}>
                      Добавить в корзину
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
