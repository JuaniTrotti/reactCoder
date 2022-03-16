import ItemList from "./ItemList"
import ItemCount from "./ItemCount"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const productosData = [
  {
    id: "1",
    categoria: "smartwatch",
    nombre: "obra1",
    precio: "1500",
    dim: "60cm x 50cm",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
  },
  {
    id: "2",
    categoria: "smartwatch",
    nombre: "obra2",
    precio: "1500",
    dim: "40cm x 60cm",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
  },
  {
    id: "3",
    categoria: "smartwatch",
    nombre: "obra3",
    precio: "2000",
    dim: "40cm x 60cm",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
  },
  {
    id: "4",
    categoria: "smartwatch",
    nombre: "obra4",
    precio: "1000",
    dim: "60cm x 40cm",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
  },
  {
    id: "5",
    categoria: "headphones",
    nombre: "obra5",
    precio: "1000",
    dim: "60cm x 40cm",
    img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
  },
  {
    id: "6",
    categoria: "headphones",
    nombre: "obra6",
    precio: "1000",
    dim: "60cm x 40cm",
    img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
  },
  {
    id: "7",
    categoria: "headphones",
    nombre: "obra7",
    precio: "1000",
    dim: "60cm x 40cm",
    img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
  },
  {
    id: "8",
    categoria: "headphones",
    nombre: "obra8",
    precio: "1000",
    dim: "60cm x 40cm",
    img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
}
]

const ItemListContainer = (props) => {

  const [produ, getProduct] = useState([])
  const [loading, setLoad] = useState(true)
  const {id} = useParams()

  useEffect(()=>{
    const pedido = fetch(productosData)

    pedido
      .then((productos)=>{
        if (id == "headphones") {
          const pFilter = productosData.filter((i) => i.categoria == "headphones")
          getProduct(pFilter)
        } else if(id == "smartwatch") {
          const pFilter = productosData.filter((i) => i.categoria == "smartwatch")
          getProduct(pFilter)
        } else {
          getProduct(productosData)
        }
      })
      .catch(()=>{console.log("error")})
  }, [id])

  return (
    <>
      <div className="containerList cFlex">
          <h1 className="tTitulo">{props.nombre}</h1>
          {/* <ItemCount initial={1} stock={7}/> */}
          <ItemList producto={produ}/>
      </div>
    </>
  )
}

export default ItemListContainer