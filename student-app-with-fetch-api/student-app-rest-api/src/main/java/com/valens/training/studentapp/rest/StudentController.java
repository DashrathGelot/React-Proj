package com.valens.training.studentapp.rest;

import com.valens.training.studentapp.model.Student;
import com.valens.training.studentapp.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
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
    public Student addStudent(@RequestBody Student student){
        return studentService.addStudent(student);
    }
    @RequestMapping(method = RequestMethod.DELETE,value ="/student/{id}")
    public Map<String,String> deleteStudent(@PathVariable int id){
        studentService.deleteStudent(id);
        return new HashMap<String, String>(){{put("status","success");}};
    }
    @RequestMapping(method = RequestMethod.PUT,value = "/student")
    public Student updateStudent(@RequestBody Student student){
      return studentService.updateStudent(student);
    }
}
