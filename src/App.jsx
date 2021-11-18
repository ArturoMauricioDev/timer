import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="timer">Timer!</h1>
        <div>
          <button className="timer" type="button" onClick={() => setCount((count) => count + 1)}>
            {count}
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
