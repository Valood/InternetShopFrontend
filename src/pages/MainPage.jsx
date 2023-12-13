import { Nav, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { CustomNavbar } from '../components/CustomNavbar';
import './MainPage.scss'
import { useContext } from 'react';
import { ToastContext } from '../context/ToastProvider';
import useAuthGuard from '../hooks/useAuthGuard';

export default function MainPage(){
  useAuthGuard()

  const {handleSuccessAction} = useContext(ToastContext)
  const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
  ];

  const handleAddToCart = (product) => {
    handleSuccessAction('Добавлено в корзину')
  }

  return (
    <div className="main page">
        <CustomNavbar/>
        <Container className='products mt-5'>
            <Row>
                <Col md={3} xs={4}></Col>
                <Col md={9} xs={8}>
                    <h1 className='products-title mb-4'>Каталог товаров</h1>
                    <div className="products-grid">
                        {products.map((product) => (
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