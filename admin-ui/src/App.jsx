import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen w-full bg-neutral-800 flex flex-col items-center justify-center'>
      <div className='flex items-center justify-center space-x-8 mb-12 '>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo w-24 h-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react w-24 h-24 animate-spin" alt="React logo" style={{animationDuration : "10s"}} />
        </a>
      </div>
      <h1 className='text-white text-4xl font-bold mb-16'>Vite + React</h1>
      <h3 className='text-gray-300 mt-2'>Kent Prana Diharto</h3>
      <div className="card text-center space-y-6mb-8">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className='bg-neutral-900 text-white font-bold py-2 px-6 rounded-lg text-lg'
        >
          count is {count}
        </button>
        <p className='text-neutral-400 mt-4'>
          Edit <code className='bg-gray-700 px-1 rounded'>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-neutral-500 mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App