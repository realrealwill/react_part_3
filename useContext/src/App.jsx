import { useState, createContext } from 'react'
import './App.css'
import { ComponentA} from './components'

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState({
    light: true
  })

  return (
    // <div>
    //   <ComponentA light={true}>
    //     <ComponentB>
    //       <ComponentC>
    //         <ComponentD>
    //           <ComponentE/>
    //         </ComponentD>
    //       </ComponentC>
    //     </ComponentB>
    //   </ComponentA>
    // </div>

    // 所有被包含的都被提供value
    <ThemeContext.Provider value={{theme, setTheme}}>  
      <ComponentA></ComponentA>
    </ThemeContext.Provider>
  )
}

export default App
