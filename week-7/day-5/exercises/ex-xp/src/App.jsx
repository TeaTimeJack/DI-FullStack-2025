
import Cars from "./components/Cars";
import Garage from "./components/Garage";
import Events from "./components/Events";
import Phone from "./components/Phone";
import Color from "./components/Color"

import './App.css'

function App() {

  const carInfo = {name: "Ford", model: "Mustang"}
  return (
    <>
      <Cars info = {carInfo} />
      <Garage size ="Big" />
      <Events />
      <Phone />
      <Color />
    </>
  )
}

export default App
