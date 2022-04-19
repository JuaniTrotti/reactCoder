import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";
import { useContext} from 'react'
import { cartContext } from './Context';
import { userContext } from "../userComponent/UserContext";


const NavBar = () => {
    const {cantidad} = useContext(cartContext)
    const { logOut, usuario } = useContext(userContext)

    return (
        <header className="header cFlex">
            <section className="containerHeader cFlex">
                <div className="logoIn cFlex">
                    <Link to="/" className="tLogo"><img src="./img/icon/logoApp.svg" alt="" /></Link>
                </div>
                <nav className="containerNav cFlex">
                    <NavLink to="/categoria/Poster" className="link navBarLink">Poster</NavLink>
                    <NavLink to="/categoria/LineArt" className="link navBarLink">Line Art</NavLink>
                    <NavLink to="/categoria/Abstract" className="link navBarLink">Abstract</NavLink>
                </nav>
                <div className="containerLog cFlex">
                    { cantidad > 0 ? <NavLink to="/carrito" className="widgetContainer cFlex"><CartWidget/></NavLink> : null }
                    { usuario == null ? 
                        <>
                            <div className="loginBtnContainer cFlex">
                                <NavLink to="/user/LogIn" className="link navBarLink">Log In</NavLink> 
                            </div>
                            <div className="signUpBtnContainer cFlex">
                                <NavLink to="/user/SignUp" className="link regBtn">Sign Up</NavLink> 
                            </div>
                        </>
                        :
                        <div className="logOutContainer cFlex">  
                            <div className="nameContainer cFlex">
                                <p className="name">{usuario.email}</p> 
                            </div>
                            <div className="logOutBtnContainer cFlex">
                                <button onClick={logOut} className="btnLogOut">LogOut</button>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </header>
    )
}

export default NavBar;