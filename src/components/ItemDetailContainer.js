import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const [item, setItem] = useState({})
  const {id} = useParams()

  useEffect(()=>{
    const pedido = fetch(`/json/${id}Data.json`)

    pedido
    .then((respuesta)=>{return respuesta.json()})
    .then((item)=>{setItem(item)})
    .catch(()=>{console.log("error")})
  }, [])

  return (
    <>
        <div className='containerItem cFlex'>
            <ItemDetail item={item}/>
        </div>
    </>
  )
}

export default ItemDetailContainer