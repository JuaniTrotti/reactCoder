import { useContext } from 'react'
import { cartContext } from './Context'
import { userContext } from '../userComponent/UserContext'
import { NavLink } from 'react-router-dom'
import { db } from '../components/Firebase'
import { collection, addDoc, serverTimestamp, query, where, getDocs} from 'firebase/firestore'

const CartContainer = () => {

  const {carrito, total, removeItem, clear} = useContext(cartContext)
  const {usuario} = useContext(userContext)

  
  const infoUser = async () => {
    const usuarioCollection = collection(db, "user")
    const userDoc = query(usuarioCollection, where("email", "==", usuario.email))
    const docu = getDocs(userDoc)
    docu
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const orden = {
          buyer: {
            user: usuario.email,
            name: doc.data().nombre,
            phone: doc.data().telefono
          },
          item: carrito,
          date: serverTimestamp(),
          total: total
        }
        handleOrden(orden)
      })
    })
  }

  const handleOrden = (i) => {
    const ordenColeccion = collection(db, "ordenes")
    const document = addDoc(ordenColeccion, i)
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
          <button className='texto link' onClick={infoUser}>Checkout</button>
        </div>
      </div>
    </div> 
  )
}

export default CartContainer