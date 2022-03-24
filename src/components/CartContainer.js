import React from 'react'
import { useContext } from 'react'
import { cartContext } from './Context'

const CartContainer = () => {

  const resultado = useContext(cartContext)

  return (
    <div>hola, bienvenido al carrito
      <div>{resultado.cart}</div>
    </div> 
  )
}

export default CartContainer