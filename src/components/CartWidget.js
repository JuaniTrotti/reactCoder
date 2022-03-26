import { useContext } from 'react'
import { cartContext } from './Context'

const CartWidget = () => {

  const {cantidad} = useContext(cartContext)

  return (
    <div className="containerCart cFlex">
        <img src="/img/icon/cart.svg"></img>
        { cantidad > 0 ? <p>{cantidad}</p> : null }
    </div>
  )
}

export default CartWidget