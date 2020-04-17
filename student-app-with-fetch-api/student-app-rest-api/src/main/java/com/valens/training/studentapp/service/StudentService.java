package com.valens.training.studentapp.service;

import com.valens.training.studentapp.model.Student;
import com.valens.training.studentapp.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudent(){
        return (List<Student>) studentRepository.findAll();
    }

    public Student getStudent(int id){
        return studentRepository.findById(id).orElse(new Student(0,"",0,0,0));
   }
    public void addStudent(Student student){
        studentRepository.save(student);
    }

   public void deleteStudent(int id){
        studentRepository.deleteById(id);
   }

   public void updateStudent(Student student){
        studentRepository.save(student);
   }
}
