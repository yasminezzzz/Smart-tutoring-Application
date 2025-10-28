package com.TUTORING.smarttutor.controller;

import com.TUTORING.smarttutor.dto.AdminDashboardResponse;
import com.TUTORING.smarttutor.service.AdminDashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/dashboard")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AdminDashboardController {

    private final AdminDashboardService adminDashboardService;

    @GetMapping
    public ResponseEntity<AdminDashboardResponse> getDashboard() {
        AdminDashboardResponse dashboard = adminDashboardService.getDashboardData();
        return ResponseEntity.ok(dashboard);
    }
}
