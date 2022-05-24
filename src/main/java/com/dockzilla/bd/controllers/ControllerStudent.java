package com.dockzilla.bd.controllers;

import com.dockzilla.bd.dto.StudentDto;
import com.dockzilla.bd.factories.StudentsDtoFactory;
import com.dockzilla.bd.store.entities.StudentsEntity;
import com.dockzilla.bd.store.repository.StudentsRepository;
import com.dockzilla.bd.utils.Const;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@Transactional
@RestController
@RequestMapping(value = Const.STUDENTS_URL)
public class ControllerStudent {
    StudentsRepository studentsRepository;
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    @PostMapping()
    public ResponseEntity<String> addStudent(
            @RequestParam(value = "username", required = true) String username,
            @RequestParam(value = "lastname", required = true) String lastname,
            @RequestParam(value = "patronymic", required = true) String patronymic,
            @RequestParam(value = "studygroup", required = true) String studygroup,
            @RequestParam(value = "dateofbrith", required = true) String dateofbrith
    ) {
        //TODO как дата будет с фронта приходить ???
        LocalDate dateofbrithForBD = LocalDate.parse(dateofbrith,formatter);
        final StudentsEntity studentForBD = StudentsEntity.builder()
                .username(username)
                .lastname(lastname)
                .patronymic(patronymic)
                .studygroup(studygroup)
                .dateofbrith(dateofbrithForBD)
                .build();
        studentsRepository.saveAndFlush(studentForBD);
        return ResponseEntity.status(HttpStatus.CREATED).body("addStudent");
    }

    @DeleteMapping()
    public ResponseEntity<String> deleteStudent(
            @RequestParam(value = "id", required = true) Long id
    ) {
        // про проверку в ТЗ нет ничего
        studentsRepository.deleteById(id);
        String answer = "Студент с " + id + " удалён";
        return ResponseEntity.status(HttpStatus.OK).body(answer);
    }

    @GetMapping()
    public ResponseEntity<List<StudentDto>> getAllStudens() {
        List<StudentDto> allStudnets = studentsRepository.findAll()
                .stream()
                .map(StudentsDtoFactory::makeStudent)
                .collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.CREATED).body(allStudnets);
    }
}
