import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";
import { useContext} from 'react'
import { cartContext } from './Context';

const NavBar = () => {
    const {cantidad} = useContext(cartContext)

    return (
        <header className="header cFlex">
            <section className="containerHeader cFlex">
                <div>
                    <Link to="/" className="tLogo"><img src="./img/icon/logoApp.svg" alt="" /></Link>
                </div>
                <nav className="containerNav cFlex">
                    <NavLink to="/categoria/Poster" className="link">Poster</NavLink>
                    <NavLink to="/categoria/LineArt" className="link">Line Art</NavLink>
                    <NavLink to="/categoria/Abstract" className="link">Abstract</NavLink>
                </nav>
                <div className="containerLog cFlex">
                    <NavLink to="/user/LogIn" className="link">LogIn</NavLink>
                    <NavLink to="/user/SignUp" className="link">SignUp</NavLink>
                    { cantidad > 0 ? <NavLink to="/carrito"><CartWidget/></NavLink> : null }
                </div>
            </section>
        </header>
    )
}

export default NavBar;