import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"

const Main = () => {
  return (
    <div className="containerMain cFlex">
        <ItemListContainer nombre="Catágolo"/>
        <ItemDetailContainer/>
    </div>
  )
}

export default Main