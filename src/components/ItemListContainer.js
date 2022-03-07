import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
  return (
    <div className="containerList cFlex">
        <h1 className="tTitulo">{props.nombre}</h1>
        <ItemCount initial={1} stock="5"/>
    </div>
  )
}

export default ItemListContainer