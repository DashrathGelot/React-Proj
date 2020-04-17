package com.valens.training.studentapp.rest;

import com.valens.training.studentapp.model.Student;
import com.valens.training.studentapp.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {
    @Autowired
    private StudentService studentService;

    @RequestMapping("/students")
    public List<Student> getAllStudent(){
        return studentService.getAllStudent();
    }
    @RequestMapping("/student/{id}")
    public Student getStudent(@PathVariable int id){
        return studentService.getStudent(id);
    }
    @RequestMapping(method=RequestMethod.POST,value="/student")
    public void addStudent(@RequestBody Student student){
        studentService.addStudent(student);
    }
    @RequestMapping(method = RequestMethod.DELETE,value ="/student/{id}")
    public void deleteStudent(@PathVariable int id){
        studentService.deleteStudent(id);
    }
    @RequestMapping(method = RequestMethod.PUT,value = "/student")
    public void updateStudent(@RequestBody Student student){
        studentService.updateStudent(student);
    }
}
