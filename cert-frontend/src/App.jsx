import React, { useState } from 'react'
import Navbar from './components/Navbar'
import CreateCertificate from './pages/CreateCertificate'
import ViewCertificate from './pages/ViewCertificate'
import './App.css'

function App() {

  const [currentPage, setCurrentPage] = useState('create')

  return (
    <div className="app">

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <div className="page-content">
        {currentPage === 'create' && <CreateCertificate />}
        {currentPage === 'view' && <ViewCertificate />}
      </div>

    </div>
  )
}

export default App
