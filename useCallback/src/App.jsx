import { useState, useCallback } from 'react'
import './App.css'
import List from './List'

function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)
  const theme = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333'
  }

  // const getItems = (add = 0) => [number + add, (number + add) * 2, (number + add) * 3]

  const getItems = useCallback ((add = 0) => [number + add, (number + add) * 2, (number + add) * 3], [number])  // 记忆函数 dependency


  return (
    <div style={theme}>
      <button onClick={() => {setDark(preValue => !preValue)}}>
        Toggle Theme to {dark? 'Light' : 'Dark'}
      </button>

      <input type="number" value={number} onChange = {e => setNumber(parseInt(e.target.value))} />
      <List getItems={getItems} />
    </div>
  )
}

export default App
