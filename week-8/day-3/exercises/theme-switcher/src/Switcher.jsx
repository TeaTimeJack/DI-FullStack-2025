import React, {useContext} from 'react'
import {ThemeContext} from "./App"

const Switcher = () => {
    const {switchTheme} = useContext(ThemeContext)
  return (
        <button onClick={()=>switchTheme()}>Switch Theme</button>
  )
}

export default Switcher


