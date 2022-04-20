import React from 'react'
import ItemCount from "./ItemCount"
import { useState, useContext} from 'react'
import { cartContext } from './Context';
import { userContext } from "../userComponent/UserContext";
import { NavLink } from "react-router-dom";

const ItemDetail = ({producto}) => {

    const {addItem} = useContext(cartContext)
    const [selec, setSelec] = useState(false)
    const { usuario } = useContext(userContext)
    
    const onAdd = (unidadesSelec) => {
        if (unidadesSelec !== undefined) {
            setSelec(unidadesSelec)
        }
    }

    return (
        <>
            <section className='sectionInfo cFlex'>
                <section className='sec1 cFlex'>
                    <div className='nameContainer cFlex'>
                        <h1 className='itemNombre'>{producto.item.name}</h1>
                        <h2 className='itemCategoria'>{producto.categoria}</h2>
                    </div>
                    <div className='descContainer cFlex'>
                        <p className='itemDesc'>{producto.item.desc}</p>
                    </div>
                </section>
                <section className='sec2 cFlex'>
                    <div className='priceContainer cFlex'>
                        <h2 className='itemPrecio'>usd {producto.item.price}</h2>
                        {selec === false ? <ItemCount initial={1} stock={producto.item.stock} onAdd={onAdd}/> 
                                        : usuario == null ?
                                        <div className='addItemContainer cFlex'><NavLink className="addToBag" to="/user/LogIn" onClick={() => {addItem(producto, selec)}}>Log In</NavLink></div>
                                        : <div className='addItemContainer cFlex'><NavLink className="addToBag" to="/carrito" onClick={() => {addItem(producto, selec)}}>Add to bag</NavLink></div>}
                    </div>
                </section>
            </section>
            <section className='sectionImg cFlex'>
                <div className='imgContainer cFlex'>
                    <section className='izqImg cFlex'>
                        <img src={producto.item.image1} alt="imagen del producto" className='imgItem'/>
                    </section>
                    <section className='rImg cFlex'>
                        <img src={producto.item.image2} alt="imagen del producto" className='imgItem'/>
                        <img src={producto.item.image3} alt="imagen del producto" className='imgItem'/>
                    </section>
                </div>
            </section>
        </>
    )
}

export default ItemDetail