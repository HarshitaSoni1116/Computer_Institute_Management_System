package com.example.backend.repository;

import com.example.backend.entity.Admission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdmissionRepository extends JpaRepository<Admission, Long> {
}