import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const ItemListContainer = (props) => {
  return (
    <div className="containerList cFlex">
        <h1 className="tTitulo">{props.nombre}</h1>
        <ItemCount initial={1} stock={7}/>
        <ItemList/>
    </div>
  )
}

export default ItemListContainer