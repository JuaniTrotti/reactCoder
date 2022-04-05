import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from '../components/Firebase'
import ItemList from "./ItemList"
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = (props) => {

  const [produ, setProduct] = useState([])
  const [loading, setLoad] = useState(true)
  const {id} = useParams()

  useEffect(()=>{
    if(!id){
      const artColeccion = collection(db, "juanArtReact")
      const document = getDocs(artColeccion)

      document
      .then(respuesta => setProduct(respuesta.docs.map(doc=>doc.data())))
      .catch(()=>console.log("error"))
      .finally(() => setLoad(false))
    }else{
      const ArtColeccionSort= collection(db, "juanArtReact")
      const filtro = query(ArtColeccionSort, where("categoria", "==", id))
      const document = getDocs(filtro)

      document
      .then(respuesta => setProduct(respuesta.docs.map(doc=>doc.data())))
      .catch(()=>console.log("error"))
      .finally(() => setLoad(false))
    }
  }, [id])

  return (
    <>
      <div className="containerList cFlex">
          <h1 className="tTitulo">{props.nombre}</h1>
          { loading ? <h1>Cargando...</h1> : <ItemList producto={produ}/> }
      </div>
    </>
  )
}

export default ItemListContainer