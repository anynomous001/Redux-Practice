import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, addProducts, deleteProducts } from "./Redux"
import { nanoid } from "nanoid"
import React from "react"

function App() {

  const count = useSelector((state) => state.count)
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()



  const [inputItem, setInputItem] = React.useState('')

  function handleIncrement() {
    dispatch(increment())
  }
  function handleDecrement() {
    dispatch(decrement())
  }

  function handleSubmit(e) {
    e.preventDefault()
    setInputItem('')

    dispatch(addProducts(inputItem))

  }

  function handleClick(id) {
    dispatch(deleteProducts(id))
  }

  return (
    <>
      <div>
        <h1>Counter : {count}</h1>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputItem} onChange={(e) => setInputItem(e.target.value)} />
        <button>Add Item</button>
      </form>
      {products.map(item => {
        return <div key={nanoid()}>
          <ul>
            <li>
              {item.name}
            </li>
          </ul>
          <button onClick={() => handleClick(item.id)}>Delete</button>
        </div>
      })}
    </>
  )
}

export default App
