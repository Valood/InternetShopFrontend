import { Navbar, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function CustomNavbar(){
    return (
        <Navbar className='navbar'>
            <Navbar.Brand>
                <NavLink to='/' className='navbar-link navbar-logo'>Sepul'ka Shop</NavLink>
            </Navbar.Brand>
            <Nav className="ms-auto">
                <div>
                    <NavLink to='/login' className={({isActive}) => ['navbar-link', isActive ? 'active' : ''].join(' ')}>Вход</NavLink>
                </div>
                <div>
                    <NavLink to='/cart' className={({isActive}) => ['navbar-link', isActive ? 'active' : ''].join(' ')}>Cart</NavLink>
                </div>
                <div>
                     <NavLink to='/orders' className={({isActive}) => ['navbar-link', isActive ? 'active' : ''].join(' ')}>Orders</NavLink>
                </div>
            </Nav>
        </Navbar>
    )
}