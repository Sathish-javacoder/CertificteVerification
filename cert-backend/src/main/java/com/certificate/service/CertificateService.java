package com.certificate.service;

import com.certificate.model.Certificate;
import com.certificate.repository.CertificateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class CertificateService {

    @Autowired
    private CertificateRepository certificateRepository;

    // Save a new certificate
    public Certificate saveCertificate(Certificate certificate) {
        // set the issued date to today automatically
        certificate.setIssuedDate(LocalDate.now().toString());
        return certificateRepository.save(certificate);
    }

    // Get certificate by id
    public Optional<Certificate> getCertificateById(Long id) {
        return certificateRepository.findById(id);
    }

    // Get all certificates
    public List<Certificate> getAllCertificates() {
        return certificateRepository.findAll();
    }

}
