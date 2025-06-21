import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const divRef = useRef(null)
  const countRef = useRef(null)
  useEffect(() => {
    console.log(divRef.current);  //current为当前ref的dom元素
    divRef.current.style.backgroundColor = 'red'

    countRef.current = 10  // 不会引起下方渲染
  },[])

  return (
    <div ref={divRef}>
      hello world
    </div>
  )
}

export default App
