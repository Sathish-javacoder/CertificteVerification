import React from 'react'
import './Navbar.css'

function Navbar({ currentPage, setCurrentPage }) {
  return (
    <div className="navbar">
      <div className="navbar-brand">
          Certificate Generator
      </div>
      <div className="navbar-links">
        <button
          className={currentPage === 'create' ? 'nav-btn active' : 'nav-btn'}
          onClick={function () 
              {
               setCurrentPage('create') 
              }
            }
        >
          Create Certificate
        </button>

        <button
          className={currentPage === 'view' ? 'nav-btn active' : 'nav-btn'}
          onClick={function () 
            {
               setCurrentPage('view') 
            }
          }
        >
          View Certificate
        </button>
      </div>
    </div>
  )
}

export default Navbar
