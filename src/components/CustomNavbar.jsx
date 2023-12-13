import { Navbar, Nav, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { userSlice } from "../store/Reducers/userReducer"

export function CustomNavbar(){
    const dispacth = useDispatch()
    const {clearUser} = userSlice.actions
    const navigate = useNavigate()

    const handleExit = () => {
        localStorage.clear()
        dispacth(clearUser())
        navigate('/login')
    }

    return (
        <Navbar className='navbar'>
            <Navbar.Brand>
                <Link to='/' className='navbar-link navbar-logo'>Sepul'ka Shop</Link>
            </Navbar.Brand>
            <Nav className="ms-auto d-flex gap-3">
                <div>
                    <NavLink to='/cart' className={({isActive}) => ['navbar-link', isActive ? 'active' : ''].join(' ')}>Cart</NavLink>
                </div>
                <div>
                     <NavLink to='/orders' className={({isActive}) => ['navbar-link', isActive ? 'active' : ''].join(' ')}>Orders</NavLink>
                </div>
                <div className="d-flex align-items-center">
                    <p className="m-0">{localStorage.getItem('name')}</p>
                </div>
                <div>
                    <Button variant="danger" onClick={handleExit}>Выйти</Button>
                </div>
            </Nav>
        </Navbar>
    )
}