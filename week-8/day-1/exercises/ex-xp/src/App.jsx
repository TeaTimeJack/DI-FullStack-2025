import { useState } from 'react'
import BuggyCounter from "./BuggyCounter"
import ErrorBoundary from "./helpers/ErrorBoundary"
import './App.css'

function App() {


  return (
    <>
    <h2>Simulation 1:</h2>
    <ErrorBoundary>
      <BuggyCounter />
      <br/>
      <BuggyCounter />
    </ErrorBoundary>

    <h2>Simulation 2:</h2>
    <ErrorBoundary>
      <BuggyCounter />
    </ErrorBoundary>
    <br/>
    <ErrorBoundary>
      <BuggyCounter />
    </ErrorBoundary>
    <h2>Simulation 3:</h2>
    <BuggyCounter />
    </>
  )
}

export default App
