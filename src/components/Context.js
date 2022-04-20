import { createContext, useState, useEffect } from "react"

export const cartContext = createContext()
const { Provider } = cartContext

const Context = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)
    let carritoAux = []

    useEffect(() => {
        totalPrecio()
    } , [carrito])

    const totalPrecio = () => {
        let precioTotal = 0
        let cantidadTotal = 0
        carrito.map(i => {
            precioTotal = precioTotal + (i.item.item.price * i.cantidad)
            cantidadTotal = cantidadTotal + i.cantidad
        })
        setTotal(precioTotal)
        setCantidad(cantidadTotal)
    }

    const addItem = (item, cantidad) => {
        
        let pCarrito = {item, cantidad};

        if (isInCart(item.id)) {
            pCarrito = carrito.find(i => i.item.id === item.id)
            pCarrito.cantidad = pCarrito.cantidad + cantidad
            carritoAux = [...carrito]
        } else {
            carritoAux = [...carrito, pCarrito]
        }
        setCarrito(carritoAux)
    }

    const removeItem = (id) => {
        carritoAux = carrito.filter(i => i.item.id !== id)
        setCarrito(carritoAux)
    }

    const clear = () => {
        setCarrito([])
    }

    const isInCart = (item) => {
        const resultado = carrito.some(i => i.item.id === item)
        return resultado
    }

    const valorContexto = {
        carrito : carrito,
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
