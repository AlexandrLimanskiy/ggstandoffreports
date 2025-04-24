import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import './App.css'
import Start from './assets/jsxComponents/pages/Start/Start'
import Home from './assets/jsxComponents/pages/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
