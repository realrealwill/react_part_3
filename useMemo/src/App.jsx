import React, { useMemo } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = React.useState(0)

  const calcNumber = useMemo(() => verySlowFunction(number), [number])

  function verySlowFunction(num) {
    console.log('called')
    for (let i = 0; i <= 1_000_000_000; i++) {
      num += i * 100 / 6 * 3 / 25
    }
    return num
  }

  const [count, setCount] = React.useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }


  return (
    <>
      {/*计算比较慢的数*/}
      <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <br />
      {calcNumber}

      <br />
      {/*增减count比较快*/}
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </>
  )
}

export default App
