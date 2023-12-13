import { Navbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function CustomNavbar(){
    return (
        <Navbar className='navbar'>
            <Navbar.Brand>
                <NavLink to='/' className='navbar-link navbar-logo'>Sepul'ka Shop</NavLink>
            </Navbar.Brand>
            <Nav className="ms-auto">
            <Nav.Link>
                    <NavLink to='/login' className={({isActive}) => ['navbar-link', isActive ? 'active' : ''].join(' ')}>Вход</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to='/cart' className={({isActive}) => ['navbar-link', isActive ? 'active' : ''].join(' ')}>Cart</NavLink>
                </Nav.Link>
                <Nav.Link>
                     <NavLink to='/orders' className={({isActive}) => ['navbar-link', isActive ? 'active' : ''].join(' ')}>Orders</NavLink>
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}