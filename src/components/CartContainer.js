import React from 'react'
import { useContext } from 'react'
import { cartContext } from './Context'

const CartContainer = () => {

  const {carrito, total, removeItem, clear} = useContext(cartContext)
  console.log(carrito)

  return (
    <div className='cartContainer cFlex'>
      { carrito.length > 0 ?
        <div className='cartItemContainer cFlex'>
          { carrito.map(i => {
            return <div className='itemCart cFlex' key={i.item.id}>
                <p>Producto: {i.item.nombre}</p>
                <p>Cantidad: {i.cantidad}</p>
                <p>Precio: ${i.item.precio}</p>
                <button onClick={()=>{removeItem(i.item.id)}}>Eliminar</button>
              </div>
          })}
          <div>
            <p>Precio a pagar: ${total}</p>
            <button onClick={()=>{clear()}}>Vaciar Carro</button>
          </div>
        </div>
        : <h1>No hay productos en el carrito</h1>
      }
    </div> 
  )
}

export default CartContainer