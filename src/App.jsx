import { useState } from 'react'
import { LogoImages } from './components/LogoImages'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LogoImages />
      <h1>Lord of Computer Science</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
