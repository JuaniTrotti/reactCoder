import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="header cFlex">
            <section className="containerHeader cFlex">
                <Link to="/" className="tLogo">Aripto</Link>
                <nav className="containerNav cFlex">
                    <NavLink to="/categoria/smartwatch" className="link">SmartWatch</NavLink>
                    <NavLink to="/categoria/headphones" className="link">Headphones</NavLink>
                    <NavLink to="/categoria/shop" className="link">Shop</NavLink>
                    <NavLink to="/categoria/AboutUs" className="link">About Us</NavLink>
                    <NavLink to="/carrito"><CartWidget/></NavLink>
                </nav>
            </section>
        </header>
    )
}

export default NavBar;