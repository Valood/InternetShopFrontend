import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import {http} from "../http/http";
import './Login.scss'

export default function Registration(){
    const [user, setUser] = useState({});

    const handleLogin = (event) => {
        event.preventDefault()
        http.post('/auth/registration', user)
    }

    return (
        <div className="registration page m-auto" onSubmit={handleLogin}>
            <h2 className="registration-title mb-3">Регистрация</h2>
            <Card className="registration-card">
                <Card.Body>
                    <Form className="d-flex flex-column gap-2">
                        <Form.Group>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Введите e-mail"
                                value={user.email}
                                onChange={(e) => setUser({...user, email: e.target.value})}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Имя пользователя</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите имя пользователя "
                                value={user.name}
                                onChange={(e) => setUser({...user, name: e.target.value})}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Введите пароль"
                                value={user.password}
                                onChange={(e) => setUser({...user, password: e.target.value})}
                                required
                            />
                        </Form.Group>
                        <Button className="mt-3" variant="primary" type="submit">
                            Войти
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}