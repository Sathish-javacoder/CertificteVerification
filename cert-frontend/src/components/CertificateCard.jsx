import React from 'react'
import './CertificateCard.css'

function CertificateCard({ certificate }) {

  return (
    <div className="cert-wrapper">

      {/* Green left  */}
      <div className="cert-sidebar"></div>

      {/* Main  */}
      <div className="cert-content">

        {/* Top section */}
        <div className="cert-top">
          <p className="company-name">CERTONCLOUD</p>
          <h1 className="cert-title">Completion Certificate</h1>

          {/* ID and date row */}
          <div className="cert-meta-row">
            <div className="cert-meta-box">
              Date of issue: {certificate.issuedDate}
            </div>
            <div className="cert-meta-box">
              Certificate NO: {String(certificate.id)}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="cert-divider"></div>

         {/* Body section  */}
        <div className="cert-body">
          <p className="certify-text">This is to certify that</p>

          <h2 className="recipient-name">{certificate.name.toUpperCase()}</h2>

          <p className="cert-description">
            Has successfully completed the{' '}
            <strong>{certificate.course}</strong> program.
            Joining date: <strong>{certificate.joiningDate}</strong>.
            This certificate is awarded in recognition of dedication
            and successful completion of the course.
          </p>
        </div>

        {/* Bottom section - signatures + seal */}
        <div className="cert-bottom">

          {/* Signatures */}
          <div className="signatures">
            <div className="sig-block">
              <div className="sig-line"></div>
              <p className="sig-name">Sabari</p>
              <p className="sig-role">Course Director / Lecturer</p>
            </div>
            <div className="sig-block">
              <div className="sig-line"></div>
              <p className="sig-name">John</p>
              <p className="sig-role">Program Head / Director</p>
            </div>
          </div>

          {/* Gold verified seal */}
          <div className="gold-seal">
            <div className="seal-inner">
              <p className="seal-text">Verified</p>
              <p className="seal-year">2026</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default CertificateCard
