package com.certificate.controller;

import com.certificate.model.Certificate;
import com.certificate.service.CertificateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/certificates")
@CrossOrigin(origins = "http://localhost:5173")
public class CertificateController {

    @Autowired
    private CertificateService certificateService;

    // POST /api/certificates
    @PostMapping
    public ResponseEntity<Certificate> createCertificate(@RequestBody Certificate certificate) {
        Certificate saved = certificateService.saveCertificate(certificate);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    // GET /api/certificates/{id}
    @GetMapping("/{id}")
    public ResponseEntity<?> getCertificate(@PathVariable Long id) {
        Optional<Certificate> certificate = certificateService.getCertificateById(id);

        if (certificate.isPresent()) {
            return new ResponseEntity<>(certificate.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Certificate not found with id: " + id, HttpStatus.NOT_FOUND);
        }
    }

    // GET /api/certificates
    @GetMapping
    public ResponseEntity<List<Certificate>> getAllCertificates() {
        List<Certificate> list = certificateService.getAllCertificates();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

}
