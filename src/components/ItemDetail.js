import React from 'react'
import ItemCount from "./ItemCount"
import { useState, useContext} from 'react'
import { cartContext } from './Context';
import { NavLink } from "react-router-dom";

const ItemDetail = ({producto}) => {

    const {addItem} = useContext(cartContext)
    const [selec, setSelec] = useState(false)
    
    const onAdd = (unidadesSelec) => {
        if (unidadesSelec != undefined) {
            setSelec(unidadesSelec)
        }
    }

    console.log(producto)
    return (
        <>
            <section className='sectionImg cFlex'>
                <div className='imgContainer cFlex'>
                    <img src={producto.item.image} alt="imagen del producto" className='imgItem'/>
                </div>
            </section>
            <section className='sectionInfo cFlex'>
                <div className='nameContainer cFlex'>
                    <h1 className='itemNombre'>{producto.item.name}</h1>
                </div>
                <div className='descContainer cFlex'>
                    <p className='itemDesc'>{producto.item.desc}</p>
                </div>
                <div className='priceContainer cFlex'>
                    <h2 className='itemPrecio'>{producto.item.price}</h2>
                    {selec == false ? <ItemCount initial={1} stock={producto.item.stock} onAdd={onAdd}/> 
                                    : <NavLink to="/carrito" onClick={() => {addItem(producto, selec)}}>Ir al carrito</NavLink>}
                </div>
            </section>
        </>
    )
}

export default ItemDetail