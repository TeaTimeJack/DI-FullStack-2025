import { useState } from 'react'
import Parent from "./components/Parent";
import Child from "./components/Child"
import './App.css'
import Counter from "./components/Counter"
import ErrorBoundary from "./helpers/ErrorBoundary";


import Home from "./pages/Home"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Nav from "./pages/Nav"
import { Routes, Route , Link} from "react-router";



// function App() {
//   return (
//     <>
//     <ErrorBoundary>
//       <Counter />
//     </ErrorBoundary>
//     <Counter />
//     <Parent>
//       <Child />
//     </Parent>
//     </>
//   )
// }
// export default App

function App() {
  return (
    <>
    <h2>React Rendering</h2>
    <Nav />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />

      <Route path="*" element={<h2>404 Page not found</h2>} />
    </Routes>
    </>
  )
}
export default App
