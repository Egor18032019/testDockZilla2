package com.dockzilla.bd.dto;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.Column;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class StudentDto {
    @NonNull
    String username;
    @NonNull
    String lastname;
    @NonNull
    String patronymic;
    @NonNull
    String studygroup;
    @NonNull
    private LocalDate dateofbrith;
}
