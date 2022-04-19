import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <>
      <Link to={`/item/${producto.item.name}`} className="cardContainer cFlex">
          <div className="cardImg">
            <div className="imgCardContainer">
              <img src={producto.item.image1} alt="imagenProducto" className="imgCard"/>
            </div>
          </div>
          <div className="cardInfo cFlex">
            <div className="itemPriceContainer cFlex">
              <h2>{producto.item.name}</h2>
              <h3>${producto.item.price}</h3>
            </div>
            <div className="categoria cFlex">
              <h3>{producto.categoria}</h3>
            </div>
          </div>
      </Link>
    </>
  )
}

export default Item