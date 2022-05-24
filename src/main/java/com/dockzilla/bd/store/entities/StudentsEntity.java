package com.dockzilla.bd.store.entities;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)//все поля приватные
@Entity
@Table(name = "students")
@Builder
@NoArgsConstructor
public class StudentsEntity {
    public StudentsEntity(Long id, @NonNull String username, @NonNull String lastname,
                          @NonNull String patronymic, @NonNull String studygroup, @NonNull LocalDate dateofbrith) {
        this.id = id;
        this.username = username;
        this.lastname = lastname;
        this.patronymic = patronymic;
        this.studygroup = studygroup;
        this.dateofbrith = dateofbrith;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    Long id;
    @NonNull
    @Column(name = "username")
    String username;
    @NonNull
    @Column(name = "lastname")
    String lastname;
    @NonNull
    @Column(name = "patronymic")
    String patronymic;
    @NonNull
    @Column(name = "studygroup")
    String studygroup;
    // TODO по ТЗ одну таблицу
    @NonNull
    @Column(name = "dateofbrith")
    private LocalDate dateofbrith;

}
