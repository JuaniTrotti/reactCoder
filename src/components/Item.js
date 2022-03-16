import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <>
      <Link to={`/item/${producto.nombre}`} className="cardContainer cFlex">
          <div className="cardImg">
            <div className="imgCardContainer">
              <img src={producto.img} alt="imagenProducto" className="imgCard"/>
            </div>
          </div>
          <div className="cardInfo cFlex">
              <h2>{producto.nombre}</h2>
              <h2>{producto.precio}</h2>
          </div>
      </Link>
    </>
  )
}

export default Item