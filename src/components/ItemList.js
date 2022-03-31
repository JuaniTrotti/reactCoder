import Item from "./Item"

const ItemList = ({producto}) => {
  console.log(producto)
  return (
    <div className="containerItems cFlex">
      {producto.map((producto, index)=>{
        return <Item key={index} producto={producto}/>
      })}
    </div>
  )
}

export default ItemList