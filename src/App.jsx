

function App() {

  return (
    <>
      <div>
        <h1>Counter : 0</h1>
        <button onClick={console.log('increment clicked')}>increment</button>
        <button onClick={console.log('decrement clicked')}>decrement</button>
      </div>
    </>
  )
}

export default App
