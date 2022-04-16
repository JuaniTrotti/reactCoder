import React from 'react'
import { useContext } from 'react'
import { cartContext } from './Context'
import { userContext } from '../userComponent/UserContext'
import { NavLink } from 'react-router-dom'
import { db } from '../components/Firebase'
import { collection, addDoc, serverTimestamp} from 'firebase/firestore'

const CartContainer = () => {

  const {carrito, total, removeItem, clear} = useContext(cartContext)
  const {usuario, nombre, telefono } = useContext(userContext)

  console.log(nombre)
  console.log(telefono)
  console.log(usuario.email)

  const handleOrden = () => {
    const orden = {
      buyer: {
        nombre: nombre,
        telefono: telefono,
        email: usuario.email
      },
      item: carrito,
      date: serverTimestamp(),
      total: total
    }

    const ordenColeccion = collection(db, "ordenes")
    const document = addDoc(ordenColeccion, orden)
    document
    .then(()=>{
      console.log("Orden enviada") 
      clear()
    })
    .catch(()=>console.log("error"))
  }

  return (
    <div className='cartContainer cFlex'>
      { carrito.length > 0 ?
        <div className='cartItemContainer cFlex'>
          { carrito.map(i => {
            return <div className='itemCart cFlex' key={i.item.id}>
                <p>Producto: {i.item.item.name}</p>
                <p>Cantidad: {i.cantidad}</p>
                <p>Precio: ${i.item.item.price}</p>
                <button onClick={()=>{removeItem(i.item.id)}}>Eliminar</button>
              </div>
          })}
          <div className='totalContainer cFlex'>
            <p>Precio a pagar: ${total}</p>
            <button onClick={()=>{clear()}}>Vaciar Carro</button>
          </div>
        </div>
        : <h1 className='texto'>No hay productos en el carrito</h1>
      }
      <div className='opContainer cFlex'>
        <div className='btnSc cFlex'>
          <NavLink to="/" className='texto link'>Seguir comprando</NavLink>
        </div>
        <div className='cFlex'>
          <button className='texto link' onClick={() => {handleOrden()}}>Checkout</button>
        </div>
      </div>
    </div> 
  )
}

export default CartContainer