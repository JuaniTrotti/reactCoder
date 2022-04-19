import { NavLink } from "react-router-dom";

const FooterContainer = () => {
  return (
    <div className='footerContainer cFlex'> 
      <div className='dividir'>
      </div>
      <section className="navContainerFooter cFlex">
        <nav className="containerNav cFlex">
          <NavLink to="/categoria/Poster" className="link navBarLink">Poster</NavLink>
          <NavLink to="/categoria/LineArt" className="link navBarLink">Line Art</NavLink>
          <NavLink to="/categoria/Abstract" className="link navBarLink">Abstract</NavLink>
        </nav>
        <h2 className="miNombre cFlex">Juan Ignacio Trotti</h2>
      </section>
    </div>
  )
}

export default FooterContainer