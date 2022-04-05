import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";
import { useContext} from 'react'
import { cartContext } from './Context';

const NavBar = () => {
    const {cantidad} = useContext(cartContext)

    return (
        <header className="header cFlex">
            <section className="containerHeader cFlex">
                <Link to="/" className="tLogo">Aripto</Link>
                <nav className="containerNav cFlex">
                    <NavLink to="/categoria/Poster" className="link">Poster</NavLink>
                    <NavLink to="/categoria/LineArt" className="link">Line Art</NavLink>
                    <NavLink to="/categoria/Abstract" className="link">Abstract</NavLink>
                    <NavLink to="/categoria/shop" className="link">Shop</NavLink>
                    <NavLink to="/categoria/AboutUs" className="link">About Us</NavLink>
                    { cantidad > 0 ? <NavLink to="/carrito"><CartWidget/></NavLink> : null }
                </nav>
            </section>
        </header>
    )
}

export default NavBar;