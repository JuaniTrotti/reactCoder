import React from 'react'
import ItemCount from "./ItemCount"
import { useState } from 'react'
import { NavLink } from "react-router-dom";

const ItemDetail = ({item}) => {

    const [selec, setSelec] = useState(false)
    
    const onAdd = (unidadesSelec) => {
        if (unidadesSelec != undefined) {
            setSelec(unidadesSelec)
        }
    }

    return (
        <>
            <section className='sectionImg cFlex'>
                <div className='imgContainer cFlex'>
                    <img src={item.img} alt="imagen del producto" className='imgItem'/>
                </div>
            </section>
            <section className='sectionInfo cFlex'>
                <div className='nameContainer cFlex'>
                    <h1 className='itemNombre'>{item.nombre}</h1>
                </div>
                <div className='descContainer cFlex'>
                    <p className='itemDesc'>{item.desc}</p>
                </div>
                <div className='priceContainer cFlex'>
                    <h2 className='itemPrecio'>{item.precio}</h2>
                    {selec == false ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/> : <NavLink to="/carrito">Ir al carrito</NavLink>}
                </div>
            </section>
        </>
    )
}

export default ItemDetail