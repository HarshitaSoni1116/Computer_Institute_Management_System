package com.example.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import java.time.LocalDateTime;

@Entity
public class Admission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Student name is required")
    private String studentName;

    @Email(message = "Invalid email")
    @NotBlank(message = "Email is required")
    private String email;

    @Pattern(
            regexp = "^[0-9]{10}$",
            message = "Mobile must be 10 digits"
    )
    private String mobile;

    @NotBlank(message = "Course is required")
    private String course;

    private String city;

    private String message;

    private LocalDateTime admissionDate;

    private String status = "New Lead";

    @Column(length = 1000)
    private String notes;

    public Admission() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @PrePersist
public void setAdmissionDate() {
    this.admissionDate = LocalDateTime.now();
}

public LocalDateTime getAdmissionDate() {
    return admissionDate;
}

public void setAdmissionDate(LocalDateTime admissionDate) {
    this.admissionDate = admissionDate;
}

public String getStatus() {
    return status;
}

public void setStatus(String status) {
    this.status = status;
}

public String getNotes() {
    return notes;
}

public void setNotes(String notes) {
    this.notes = notes;
}
}