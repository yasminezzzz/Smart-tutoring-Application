package com.TUTORING.smarttutor.service;

import com.TUTORING.smarttutor.dto.AdminDashboardResponse;
import com.TUTORING.smarttutor.model.Role;
import com.TUTORING.smarttutor.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminDashboardService {

    private final UserRepository userRepository;

    public AdminDashboardResponse getDashboardData() {
        long totalUsers = userRepository.count();
        long totalTutors = userRepository.findAll().stream()
                .filter(u -> u.getRole() == Role.TUTOR)
                .count();
        long totalStudents = userRepository.findAll().stream()
                .filter(u -> u.getRole() == Role.STUDENT)
                .count();
        long totalAdmins = userRepository.findAll().stream()
                .filter(u -> u.getRole() == Role.ADMIN)
                .count();

        return AdminDashboardResponse.builder()
                .totalUsers(totalUsers)
                .totalTutors(totalTutors)
                .totalStudents(totalStudents)
                .totalAdmins(totalAdmins)
                .build();
    }
}
