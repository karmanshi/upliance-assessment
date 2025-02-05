import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-red-400 flex justify-center h-96'>
        Hi tailwind configured
      </div>
    </>
  )
}

export default App
