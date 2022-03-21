import {useState} from 'react'

const ItemCount = ({initial, stock, onAdd}) => {

  const [contador, setCount] = useState(initial)
  const [error, setError] = useState("")

  const countPlus = () => {
    if(contador == stock) {
      setCount(contador)
      setError(`El stock es ${stock} unidades`)
    } else {
      setCount(contador + 1)
      setError("")
    }
  }

  const countSubtract = () => {
    if(contador == initial) {
      setCount(contador)
    } else {
      setCount(contador - 1)
      setError("")
    }
  }

  const countReset = () => {
    setCount(initial)
    setError("Se agregó el producto")
    onAdd(contador)
  }

  return (
    <>
      <div className="countContainer cFlex">
        <section className="containerCountBtn cFlex">
          <button onClick={countSubtract} className="btnSubtract">-</button>
          <p>{contador}</p>
          <button onClick={countPlus} className="btnPlus">+</button>
        </section>
        <section className="containerAddBtn cFlex">
          <button onClick={countReset} className="btnAdd">Confirm</button>
        </section>
        <p className="containerError">{error}</p>
      </div>
    </>
  )
}

export default ItemCount