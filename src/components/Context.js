import { createContext, useState, useEffect } from "react"

export const cartContext = createContext()
const { Provider } = cartContext

const Context = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)

    const addItem = (id, cantidad) => {
    }

    const removeItem = (id) => {
    }

    const clear = () => {
    }

    const isInCart = (id) => {
    }

    const valorContexto = {
        cart : carrito,
        total : total,
        cantidad : cantidad,

        addItem : addItem,
        removeItem : removeItem,
        clear : clear,
        isInCart : isInCart
    }


    return (
      <Provider value={valorContexto}>
          {children}
      </Provider>
    )
}

export default Context