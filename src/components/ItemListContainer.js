import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import { useState, useEffect } from "react"

const ItemListContainer = (props) => {

  const [produ, getProduct]= useState([])

  useEffect(()=>{
    const pedido = fetch("./json/itemData.json")

    pedido
      .then((respuesta)=>{return respuesta.json()})
      .then((art)=>{setTimeout(()=>{getProduct(art)}, 2000)})
      .catch(()=>{console.log("error")})
  }, [])

  return (
    <>
      <div className="containerList cFlex">
          <h1 className="tTitulo">{props.nombre}</h1>
          <ItemCount initial={1} stock={7}/>
          <ItemList producto={produ}/>
      </div>
    </>
  )
}

export default ItemListContainer