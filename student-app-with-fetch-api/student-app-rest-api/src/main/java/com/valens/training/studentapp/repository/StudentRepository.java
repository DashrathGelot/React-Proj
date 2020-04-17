package com.valens.training.studentapp.repository;

import com.valens.training.studentapp.model.Student;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student,Integer> {
}
