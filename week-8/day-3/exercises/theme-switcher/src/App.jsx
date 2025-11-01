import { useState, createContext } from 'react'
import Switcher from "./Switcher"
import "./App.css"
import CharacterCounter from "./CharacterCounter"

export const ThemeContext = createContext()
function App() {
  
  const [darkMode, setDarkMode] = useState(false)
  const [themeStyle, setThemeStyle] = useState("lightMode");
  const [rootElm, setRootElm] = useState(document.getElementById("root"))

  rootElm.className = themeStyle;

  const switchTheme = () =>{
    setDarkMode(!darkMode)
    if (darkMode) {
      setThemeStyle("darkMode");
    }else{
      setThemeStyle("lightMode");
    }
    rootElm.className = themeStyle;
  }
  
  return (
    <>
    <ThemeContext value={{switchTheme, themeStyle}}>
        <Switcher />
    </ThemeContext>
    <br/>
    <CharacterCounter />
    </>
  )
}

export default App

