import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header className="header cFlex">
            <section className="containerHeader cFlex">
                <h2 className="tLogo">Aripto</h2>
                <nav className="containerNav cFlex">
                    <a href="#" className="link">Shop</a>
                    <a href="#" className="link">About Us</a>
                    <CartWidget/>
                </nav>
            </section>
        </header>
    )
}

export default NavBar;