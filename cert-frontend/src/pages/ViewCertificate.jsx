import React, { useState } from 'react'
import { getCertificateById } from '../services/api'
import CertificateCard from '../components/CertificateCard'
import './ViewCertificate.css'

function ViewCertificate() {

  const [certId, setCertId] = useState('')
  const [certificate, setCertificate] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSearch(e) {
    e.preventDefault()

    if (certId.trim() === '') {
      setError('Please enter a certificate ID')
      return
    }

    setError('')
    setCertificate(null)
    setLoading(true)

    getCertificateById(certId)
      .then(function (response) {
        setCertificate(response.data)
        setLoading(false)
      })
      .catch(function (err) {
        if (err.response && err.response.status === 404) {
          setError('No certificate found with ID: ' + certId)
        } else {
          setError('Something went wrong. Please try again.')
        }
        setLoading(false)
      })
  }

 

  return (
    <div className="view-page">

      {/* Search box */}
      <div className="search-card no-print">
        <h2>View Certificate</h2>
        <p className="sub-text">Enter the certificate ID to view the certificate</p>

        {error && (
          <div className="error-msg">❌ {error}</div>
        )}

        <form onSubmit={handleSearch} className="search-form">
          <input
            type="number"
            placeholder="Enter Certificate ID  e.g. 1, 2, 3..."
            value={certId}
            onChange={function (e)
               {
                 setCertId(e.target.value) 
               }}
            min="1"
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>

      {/* Certificate display */}
      {certificate && (
        <div className="cert-area">
          <CertificateCard certificate={certificate} />
        </div>
      )}

    </div>
  )
}

export default ViewCertificate
