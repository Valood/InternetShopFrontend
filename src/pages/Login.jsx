import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './Login.scss'
import { http } from "../http/http";
import { userSlice } from './../store/Reducers/userReducer'
import { useDispatch } from "react-redux";

export default function Login(){
    const dispacth = useDispatch()
    const {setUser} = userSlice.actions
    const navigate = useNavigate()

    const [userData, setUserData] = useState({});

    const handleLogin = async(event) => {
        event.preventDefault()
        const user = (await http.post('/auth/login', userData)).data;
        localStorage.setItem('token', user.token)
        localStorage.setItem('name', user.name)
        dispacth(setUser(user))
        navigate('/')
    }

    return (
        <div className="login page m-auto" onSubmit={handleLogin}>
            <h2 className="login-title mb-3">Вход</h2>
            <Card className="login-card">
                <Card.Body>
                    <Form className="d-flex flex-column gap-2">
                        <Form.Group>
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ваш e-mail"
                                value={userData.email}
                                onChange={(e) => setUserData({...userData, email: e.target.value})}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ваш пароль"
                                value={userData.password}
                                onChange={(e) => setUserData({...userData, password: e.target.value})}
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