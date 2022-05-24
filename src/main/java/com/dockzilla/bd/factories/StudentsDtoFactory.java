package com.dockzilla.bd.factories;

import com.dockzilla.bd.dto.StudentDto;
import com.dockzilla.bd.store.entities.StudentsEntity;

public class StudentsDtoFactory {
    public static StudentDto makeStudent(StudentsEntity entity){
        return StudentDto.builder()
                .username(entity.getUsername())
                .lastname(entity.getLastname())
                .patronymic(entity.getPatronymic())
                .studygroup(entity.getStudygroup())
                .dateofbrith(entity.getDateofbrith())
                .build();

    }

}
