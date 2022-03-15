import React from 'react'

const ItemDetail = ({item}) => {
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
            </div>
        </section>
    </>
  )
}

export default ItemDetail