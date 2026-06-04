package com.example.backend.controller;

import java.util.List;

import com.example.backend.entity.Admission;
import com.example.backend.repository.AdmissionRepository;
import com.example.backend.service.EmailService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admissions")
@CrossOrigin(origins = "http://localhost:3000")
public class AdmissionController {

    @Autowired
    private AdmissionRepository repository;

    @Autowired
    private EmailService emailService;

    @GetMapping
    public List<Admission> getAllAdmissions() {

        return repository.findAll()
                .stream()
                .sorted((a, b) -> {

                    if (a.getAdmissionDate() == null &&
                            b.getAdmissionDate() == null) {
                        return 0;
                    }

                    if (a.getAdmissionDate() == null) {
                        return 1;
                    }

                    if (b.getAdmissionDate() == null) {
                        return -1;
                    }

                    return b.getAdmissionDate()
                            .compareTo(a.getAdmissionDate());
                })
                .toList();
    }

    @DeleteMapping("/{id}")
    public void deleteAdmission(@PathVariable Long id) {
        repository.deleteById(id);
    }


    @PutMapping("/{id}")
public Admission updateAdmission(
        @PathVariable Long id,
        @RequestBody Admission updatedAdmission) {

    Admission admission = repository.findById(id)
            .orElseThrow();

    admission.setStudentName(updatedAdmission.getStudentName());
    admission.setEmail(updatedAdmission.getEmail());
    admission.setMobile(updatedAdmission.getMobile());
    admission.setCourse(updatedAdmission.getCourse());
    admission.setCity(updatedAdmission.getCity());
    admission.setMessage(updatedAdmission.getMessage());
    admission.setStatus(updatedAdmission.getStatus());
    admission.setNotes(updatedAdmission.getNotes());

    return repository.save(admission);
}

    @PostMapping
    public Admission saveAdmission(
            @Valid @RequestBody Admission admission)
            throws Exception {

        Admission saved = repository.save(admission);

        emailService.sendAdmissionMail(
                admission.getStudentName(),
                admission.getCourse(),
                admission.getMobile()
        );

        emailService.sendConfirmationMail(
                admission.getEmail(),
                admission.getStudentName()
        );

        return saved;
    }
}