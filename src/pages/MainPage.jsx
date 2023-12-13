import { Navbar, Nav, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainPage.scss'
import { useContext } from 'react';
import { ToastContext } from '../context/ToastProvider';

export default function MainPage(){
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
        <Navbar className='navbar'>
          <Navbar.Brand>
            <Link className='navbar-link navbar-logo'>Sepul'ka Shop</Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link>
                <Link className='navbar-link'>Cart</Link>
            </Nav.Link>
            <Nav.Link>
                <Link className='navbar-link'>Orders</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
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