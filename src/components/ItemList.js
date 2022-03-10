import { useState, useEffect } from "react"
import Item from "./Item"

import React from 'react'

const ItemList = () => {

  const [produ, getProduct]= useState([])

  useEffect(()=>{
    fetch("./json/itemData.json")
    .then((respuesta)=> {
        return respuesta.json()
    })
        .then((art)=>{
            setTimeout(()=>{
                getProduct(art);
            },2000)  
        })
    .catch(()=>{
        console.log("error")
    })
  }, [])

  return (
    <div className="containerItems cFlex">
      <Item productos={produ}/>
    </div>
  )
}

export default ItemList