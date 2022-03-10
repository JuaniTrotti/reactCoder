const Item = (props) => {

  console.log(props.productos)
  return (
    <>
        {props.productos.map((i)=>{
            return (
                <div className="cardContainer cFlex">
                    <div className="cardImg">
                    </div>
                    <div className="cardInfo cFlex">
                        <h2>{i.nombre}</h2>
                        <h2>{i.precio}</h2>
                    </div>
                </div>
            )      
        })} 
    </>
  )
}

export default Item