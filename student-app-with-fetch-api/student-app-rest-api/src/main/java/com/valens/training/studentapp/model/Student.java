package com.valens.training.studentapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "studentapp")
public class Student {

    @Id
    @Column(name = "id")
    private  int rollno;
    private String name;
    private int cpp;
    private int java;
    private int dbms;

    public Student(int rollno, String name, int cpp,int java,int dbms){
        this.rollno=rollno;
        this.name=name;
    }
    public Student(){}
    public void setName(String name) {
        this.name = name;
    }

    public void setRollno(int rollno) {
        this.rollno = rollno;
    }

    public void setCpp(int cpp) {
        this.cpp = cpp;
    }

    public void setJava(int java) {
        this.java = java;
    }

    public void setDbms(int dbms) {
        this.dbms = dbms;
    }

    public int getRollno() {
        return rollno;
    }

    public String getName() {
        return name;
    }

    public int getCpp() {
        return cpp;
    }

    public int getJava() {
        return java;
    }

    public int getDbms() {
        return dbms;
    }
    @Override
    public String toString() {
        return "Student{" +
                "rollno=" + rollno +
                ", name='" + name + '\'' +
                ", cpp=" + cpp +
                ", java=" + java +
                ", dbms=" + dbms +
                '}';
    }
}
