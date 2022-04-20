import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { db } from '../components/Firebase'
import ItemDetail from './ItemDetail'
import { getDocs , collection, query, where } from 'firebase/firestore'


const ItemDetailContainer = () => {

  const [item, setItem] = useState({})
  const [loading, setLoad] = useState(true)
  const {id} = useParams()

  useEffect(()=>{
    const artColeccion = collection(db, "juanArtReact")
    const filtro = query(artColeccion, where("item.name", "==", id))
    const document = getDocs(filtro)

    document
    .then((respuesta) => {respuesta.docs.map(doc=>setItem(doc.data()))})
    .catch(()=>console.log("error"))
    .finally(() => setLoad(false))
  }, [])

  return (
    <>
        <div className='containerItem cFlex'>
          { loading ? <h1>Cargando...</h1> : <ItemDetail producto={item}/> }
        </div>
    </>
  )
}

export default ItemDetailContainer