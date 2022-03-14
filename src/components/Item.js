const Item = ({producto}) => {
  return (
    <>
        <div className="cardContainer cFlex">
            <div className="cardImg">
            </div>
            <div className="cardInfo cFlex">
                <h2>{producto.nombre}</h2>
                <h2>{producto.precio}</h2>
            </div>
        </div>
    </>
  )
}

export default Item