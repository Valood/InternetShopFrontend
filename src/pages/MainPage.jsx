import { Nav, Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { CustomNavbar } from '../components/CustomNavbar';
import './MainPage.scss'
import { useContext, useMemo, useState } from 'react';
import { ToastContext } from '../context/ToastProvider';
import useAuthGuard from '../hooks/useAuthGuard';

export default function MainPage(){
  useAuthGuard()

  const {handleSuccessAction} = useContext(ToastContext)
  const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
    { id: 4, name: 'Product 1', price: 19.99 },
    { id: 5, name: 'Product 2', price: 29.99 },
    { id: 6, name: 'Product 3', price: 39.99 },
  ];
  const [filters, setFilters] = useState({
    name: null,
    price: null
  })

  const filteredProducts = useMemo(() => products.filter(product => (!filters.name || product.name.toLocaleLowerCase().includes(filters.name.toLocaleLowerCase())) && 
    (!filters.price || (product.price >= 0 && product.price <= filters.price))), [filters])

  const handleAddToCart = (product) => {
    handleSuccessAction('Добавлено в корзину')
  }

  return (
    <div className="main page">
        <CustomNavbar/>
        <Container className='products mt-5 p-0'>
            <Row>
                <Col md={3} xs={4} className="main-filters d-flex flex-column pe-5 ps-0">
                  <h2>Фильтры:</h2>
                  <Form className='d-flex flex-column gap-3 mt-4'>
                    <Form.Group>
                      <Form.Label>Наименование товара</Form.Label>
                      <Form.Control
                        value={filters.name}
                        onChange={(event) => setFilters({...filters, name: event.target.value})}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Максимальная цена товара</Form.Label>
                      <Form.Range
                        value={filters.price}
                        onChange={(event) => setFilters({...filters, price: event.target.value})}
                      />
                    </Form.Group>
                  </Form>
                </Col>
                <Col md={9} xs={8} className='ps-5'>
                    <h1 className='products-title mb-4'>Каталог товаров</h1>
                    <div className="products-grid">
                        {filteredProducts.map((product) => (
                            <Card key={product.id} className='products-card'>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>Price: ${product.price}</Card.Text>
                                <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                            </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
};