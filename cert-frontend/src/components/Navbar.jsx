import React from 'react'
import './Navbar.css'

function Navbar({ currentPage, setCurrentPage }) {
  return (
    <div className="navbar">
      <div className="navbar-brand">
          Certificate Generator
      </div>
      <div className="navbar-links">
        <button className="nav-btn"
          onClick={function () 
              {
               setCurrentPage('create') 
              }
            }
        >
          Create Certificate
        </button>

        <button className="nav-btn"
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
