package com.dockzilla.bd.store.repository;

import com.dockzilla.bd.store.entities.StudentsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentsRepository extends JpaRepository<StudentsEntity, Long> {
}
