import { useState } from 'react'
import './App.css'

import Customers from './pages/Customers'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className='app'>
      <Sidebar />
      <div className='main-container'>
        <Navbar />
        <Customers />
      </div>
    </div>
  )
}

export default App
