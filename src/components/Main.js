import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import CartContainer from "./CartContainer"
import { Route, Routes } from "react-router-dom"
import ItemGenerator from "./ItemGenerator"


const Main = () => {
  return (
    <div className="containerMain cFlex">
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:id" element={<ItemListContainer/>}/>
            <Route path="/carrito" element={<CartContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/itemGen" element={<ItemGenerator/>}/>
        </Routes>
    </div>
  )
}

export default Main