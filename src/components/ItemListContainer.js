import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from '../components/Firebase'
import ItemList from "./ItemList"
import { getDocs, collection } from 'firebase/firestore'

const ItemListContainer = (props) => {

  const [produ, setProduct] = useState([])
  const [loading, setLoad] = useState(true)
  const {id} = useParams()

  useEffect(()=>{
    const artColeccion = collection(db, "juanArtReact")
    const document = getDocs(artColeccion)

    document
      .then((respuesta)=>{
        const aux = []
        respuesta.forEach((doc)=>{
          const obra = {
            idO: doc.id,
            ...doc.data()
          }
          aux.push(obra)
        })
        setProduct(aux)
        setLoad(false)
      })
      .catch(()=>{console.log("error")})
  }, [id])

  console.log(produ)

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