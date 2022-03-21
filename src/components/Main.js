import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import CartContainer from "./CartContainer"
import { Route, Routes } from "react-router-dom"

const Main = () => {
  return (
    <div className="containerMain cFlex">
        {/* <ItemListContainer nombre="Catágolo"/>
        <ItemDetailContainer/> */}
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:id" element={<ItemListContainer/>}/>
            <Route path="/carrito" element={<CartContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
    </div>
  )
}

export default Main