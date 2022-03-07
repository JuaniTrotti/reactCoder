import {useState} from 'react'

const ItemCount = (props) => {

  const [contador, setCount] = useState(props.initial)
  const [error, setError] = useState("")

  const countPlus = () => {
    if(contador == props.stock) {
      setCount(contador)
      setError(`El stock es ${props.stock} unidades`)
    } else {
      setCount(contador + 1)
      setError("")
    }
  }

  const countSubtract = () => {
    if(contador == props.initial) {
      setCount(contador)
    } else {
      setCount(contador - 1)
      setError("")
    }
  }

  const countReset = () => {
    setCount(props.initial)
    setError("Se agregó el producto")
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
          <button onClick={countReset} className="btnAdd">Add to cart</button>
        </section>
        <p className="containerError">{error}</p>
      </div>
    </>
  )
}

export default ItemCount