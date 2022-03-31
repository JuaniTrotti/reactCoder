import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <>
      <Link to={`/item/${producto.item.name}`} className="cardContainer cFlex">
          <div className="cardImg">
            <div className="imgCardContainer">
              <img src={producto.item.image} alt="imagenProducto" className="imgCard"/>
            </div>
          </div>
          <div className="cardInfo cFlex">
              <h2>{producto.item.name}</h2>
              <h2>{producto.item.price}</h2>
          </div>
      </Link>
    </>
  )
}

export default Item