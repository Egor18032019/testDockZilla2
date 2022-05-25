package com.dockzilla.bd.store.repository;

import com.dockzilla.bd.store.entities.StudentsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface StudentsRepository extends JpaRepository<StudentsEntity, Long> {

    @Transactional
    @Modifying
    @Query("DELETE FROM StudentsEntity u WHERE u.id=:id")
    int delete(@Param("id") Long id);
}
