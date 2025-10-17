import './style.css'
// import './generate-random'



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Pokemon Random Battle!</h1>
    <div id="details"></div>
    <button id="findButton">Random Pokemon</button>
  </div>
`



// `<div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="#" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="#" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>`