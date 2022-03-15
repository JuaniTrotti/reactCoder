import React from 'react'
import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const [item, setItem] = useState({})

  useEffect(()=>{
    const pedido = fetch("./json/itemDesc.json")

    pedido
    .then((respuesta)=>{return respuesta.json()})
    .then((item)=>{setTimeout(()=>{setItem(item)}, 2000)})
    .catch(()=>{console.log("error")})
  }, [])

  console.log(item)

  return (
    <>
        <div className='containerItem cFlex'>
            <ItemDetail item={item}/>
        </div>
    </>
  )
}

export default ItemDetailContainer