import { useContext } from 'react'
import { cartContext } from './Context'

const CartWidget = () => {

  const {cantidad} = useContext(cartContext)

  return (
    <div className="containerCart cFlex">
        <img src="/img/icon/cart.svg"></img>
        { cantidad > 0 ? <div className='cantidadWidget cFlex'><p className='link'>{cantidad}</p></div> : null }
    </div>
  )
}

export default CartWidget