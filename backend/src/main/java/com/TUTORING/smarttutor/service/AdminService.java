package com.TUTORING.smarttutor.service;

import com.TUTORING.smarttutor.model.Offer;
import com.TUTORING.smarttutor.model.Subject;
import com.TUTORING.smarttutor.repository.OfferRepository;
import com.TUTORING.smarttutor.repository.SubjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final SubjectRepository subjectRepository;
    private final OfferRepository offerRepository;

    // Ajouter une matière
    public Subject addSubject(Subject subject) {
        return subjectRepository.save(subject);
    }

    // Ajouter une offre
    public Offer addOffer(Offer offer) {
        return offerRepository.save(offer);
    }

    public List<Subject> getAllSubjects() {
        return subjectRepository.findAll();
    }

    public List<Offer> getAllOffers() {
        return offerRepository.findAll();
    }
}
