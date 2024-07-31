import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogoImages } from './components/LogoImages'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const isDarkModeDefaultEnabled = import.meta.env.VITE_DARK_MODE_DEFAULT === 'true'

  return (
    <div>
      <LogoImages />
      <h1>Lord of Computer Science</h1>
      { isDarkModeDefaultEnabled ? <p>DARK MODE IS ENABLED</p> : <p>GO BLIND</p>}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        <button onClick={() => navigate("/abc")}>Go to /abc</button>
        <button onClick={() => navigate("/users/3")}>Go to /users/3 page</button>
      </div>
    </div>
  )
}

export default App
