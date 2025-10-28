package com.TUTORING.smarttutor.controller;

import com.TUTORING.smarttutor.model.Offer;
import com.TUTORING.smarttutor.model.Subject;
import com.TUTORING.smarttutor.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    private final AdminService adminService;

    @PostMapping("/subjects")
    public ResponseEntity<Subject> addSubject(@RequestBody Subject subject) {
        return ResponseEntity.ok(adminService.addSubject(subject));
    }

    @PostMapping("/offers")
    public ResponseEntity<Offer> addOffer(@RequestBody Offer offer) {
        return ResponseEntity.ok(adminService.addOffer(offer));
    }

    @GetMapping("/subjects")
    public ResponseEntity<List<Subject>> getSubjects() {
        return ResponseEntity.ok(adminService.getAllSubjects());
    }

    @GetMapping("/offers")
    public ResponseEntity<List<Offer>> getOffers() {
        return ResponseEntity.ok(adminService.getAllOffers());
    }
}
