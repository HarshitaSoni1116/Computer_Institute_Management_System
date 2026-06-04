package com.example.backend.controller;
import com.example.backend.dto.LoginResponse;
import com.example.backend.security.JwtUtil;
import com.example.backend.dto.LoginRequest;
import com.example.backend.entity.Admin;
import com.example.backend.repository.AdminRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")

public class AdminController {

    @Autowired
    private AdminRepository repository;

    private BCryptPasswordEncoder encoder =
        new BCryptPasswordEncoder();

    @PostMapping("/login")
    public Object login(
            @RequestBody LoginRequest request) {

        Admin admin =
                repository.findByEmail(
                        request.getEmail());

        if(admin == null) {
            return "Admin not found";
        }

       if(!encoder.matches(
        request.getPassword(),
        admin.getPassword())) {

    return "Wrong password";
}

       String token =
        JwtUtil.generateToken(
                admin.getEmail()
        );

return new LoginResponse(token, admin.getEmail());
    }
}