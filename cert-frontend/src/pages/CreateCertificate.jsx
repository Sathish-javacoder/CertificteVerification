import React, { useState } from 'react'
import { createCertificate } from '../services/api'
import './CreateCertificate.css'

function CreateCertificate() {

  const [name, setName] = useState('')
  const [course, setCourse] = useState('Java Full Stack')
  const [joiningDate, setJoiningDate] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [createdId, setCreatedId] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()

    
    if (name.trim() === '') {
      setError('Please enter the student name')
      return
    }
    if (joiningDate === '') {
      setError('Please select joining date')
      return
    }

    setError('')
    setLoading(true)

    const data = {
      name: name,
      course: course,
      joiningDate: joiningDate
    }

    createCertificate(data)
      .then(function (response) {
        setMessage('Certificate created successfully! Certificate ID is: ' + response.data.id)
        setCreatedId(response.data.id)
        setName('')
        setJoiningDate('')
        setCourse('Java Full Stack')
        setLoading(false)
      })
      .catch(function (err) {
        setError('Something went wrong. Please try again.')
        setLoading(false)
      })
  }

  return (
    <div className="create-page">
      <div className="form-card">
        <h2>Create New Certificate</h2>
        <p className="sub-text">Fill in the details below to generate a certificate</p>

        {message && (
          <div className="success-msg">
            {message}
          </div>
        )}

        {error && (
          <div className="error-msg">
           {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Student Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e)=> { setName(e.target.value) }}
            />
          </div>

          <div className="form-group">
            <label>Course</label>
            <select
              value={course}
              onChange={function (e) { setCourse(e.target.value) }}
            >
              <option value="Java Full Stack">Java Full Stack</option>
              <option value="Python Full Stack">Python Full Stack</option>
              <option value="Dotnet Full Stack">Dotnet Full Stack</option>
            </select>
          </div>

          <div className="form-group">
            <label>Joining Date</label>
            <input
              type="date"
              value={joiningDate}
              onChange={function (e) { setJoiningDate(e.target.value) }}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Creating...' : 'Create Certificate'}
          </button>

        </form>
      </div>
    </div>
  )
}

export default CreateCertificate
