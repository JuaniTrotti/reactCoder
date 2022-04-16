import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import CartContainer from "./CartContainer"
import LogIn from "../userComponent/LogIn"
import SignUp from "../userComponent/SignUp"
import { Route, Routes } from "react-router-dom"


const Main = () => {
  return (
    <div className="containerMain cFlex">
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:id" element={<ItemListContainer/>}/>
            <Route path="/carrito" element={<CartContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/user/LogIn" element={<LogIn/>}/>
            <Route path="/user/SignUp" element={<SignUp/>}/>
        </Routes>
    </div>
  )
}

export default Main