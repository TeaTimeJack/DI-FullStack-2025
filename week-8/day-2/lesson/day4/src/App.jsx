import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
// import Child from "./components/Child";
// import Counter from "./components/Counter";
// import Parent from "./components/Parent";
// import ErrorBoudary from "./helpers/ErrorBoudary";
import { Routes, Route, Link } from "react-router";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='*' element={<h2>404 page not found</h2>} />
      </Routes>
    </>
  );
}

export default App;

// function App() {
//   return (
//     <>
//       <h2>Children / Error Boundary / Routering</h2>
//       <ErrorBoudary fallback={"Something is wrong one counter 1 or 2... we are working to solve it"}>
//         <Counter />
//         <Counter />
//       </ErrorBoudary>

//       <ErrorBoudary fallback={"Something is wrong one counter 3... we are working to solve it"}>
//         <Counter />
//       </ErrorBoudary>
//       <Parent admin={"john"}>
//         abc
//         <h2>Hello</h2>
//         <Child />
//       </Parent>
//     </>
//   );
// }
