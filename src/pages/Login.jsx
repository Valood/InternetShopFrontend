import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Login.scss'

export default function Login(){
    const [user, setUser] = useState({});

    const handleLogin = (event) => {
        event.preventDefault()
        
    }

    return (
        <div className="login page m-auto" onSubmit={handleLogin}>
            <h2 className="login-title mb-3">Авторизация</h2>
            <Card className="login-card">
                <Card.Body>
                    <Form className="d-flex flex-column gap-2">
                        <Form.Group>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ваш e-mail"
                                value={user.email}
                                onChange={(e) => setUser({...user, email: e.target.value})}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ваш пароль"
                                value={user.password}
                                onChange={(e) => setUser({...user, password: e.target.value})}
                                required
                            />
                        </Form.Group>
                        <Button className="mt-3" variant="primary" type="submit">
                            Войти
                        </Button>
                    </Form>
                    <p className="login-hint mt-2 mb-0">Еще нет аккаунта? <Link to='/registration'>Зарегистрируйтесь</Link></p>
                </Card.Body>
            </Card>
        </div>
    )
}