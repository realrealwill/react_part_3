import React, {useContext} from "react";
import { ThemeContext } from "./App";

export const ComponentA = (props) => {
  console.log('A');
    return (
        <>
          <div>
            Component: A
          </div>
          <ComponentB></ComponentB>
        </>
    )
}

export const ComponentB = (props) => {
  console.log('B');
    return (
        <>
          <div>
            Component: B
          </div>
          <ComponentC></ComponentC>
        </>
    )
}

export const ComponentC = (props) => {
  console.log('C');
    return (
        <>
          <div>
            Component: C
          </div>
          <ComponentD></ComponentD>
        </>
    )
}

export const ComponentD = (props) => {
  console.log('D');
    return (
        <>
          <div>
            Component: D
          </div>
          <ComponentE></ComponentE>
        </>
    )
}

export const ComponentE = (props) => {
  console.log('E');
  const {theme, setTheme} = useContext(ThemeContext);  // 调取context

    return (
        <>
          <div>
            Component: E
          </div>
          <div>
            <span>
              {theme.light ? 'Light Theme':'Dark Theme'}
            </span>
          </div>
          <br />
          <button onClick={() => {
            setTheme({light: !theme.light})
          }}> Change Theme </button>
        </>
    )
}