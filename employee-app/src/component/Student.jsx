import React from 'react';
import {connect} from 'react-redux';
import {Table,Button} from 'react-bootstrap'; 

import {RemoveStudent,GetStudent, SetStudent,SetModel,SetUpdate} from '../actions/StudentAction'

import FormComponent from './FormComponent';
import HeaderComponent from './HeaderComponent';
import { fetchStudentData } from '../actions/fetchStudentData';

function TableComponent(props){
  const studentContent=props.students.map(
    student => {
        return(
            <tr>
                <td>{student.rollNo}</td>
                <td><Button type="submit" value={student.rollNo} onClick={props.onUpdate}>Update</Button></td>
                <td><Button variant="danger" value={student.rollNo} onClick={props.onDelete}>Delete</Button></td>
            </tr>
        );
      });
  return(
    <div>
      <h2 className="table-heading">Student List</h2>
        <Table className='table-style' responsive="sm" size="sm">
          <thead>
            <tr>
              <th>Roll Number</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {studentContent}
          </tbody>
        </Table>
    </div>
  );
}

function SecondTableComponent(props){
  const studentContent=props.students.map(
    student => {
        let cname;
        student.result==='Pass' ? cname='rowcolorg': cname='rowcolorr';
        return(
            <tr className={cname}>
                <td>{student.rollNo}</td>
                <td>{student.name}</td>
                <td>{student.cpp}</td>
                <td>{student.java}</td>
                <td>{student.dbms}</td>
                <td>{student.result}</td>
            </tr>
        );
    })
  return<div>
    <h2 className="table-heading">Student's MarkSheet</h2>
      <Table className='table-style' responsive="sm" size="sm">
      <thead>
        <tr>
          <th>Roll Number</th>
          <th>Name</th>
          <th>Java</th>
          <th>CPP</th>
          <th>DBMS</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        {studentContent}
      </tbody>
      </Table>
</div>
}

class Student extends React.Component {
  constructor(props){
    super(props)
    this.setModalShow=this.setModalShow.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
    this.handleUpdate=this.handleUpdate.bind(this)
  }
  componentDidMount(){
    this.props.dispatch(fetchStudentData())
  }
  setModalShow(){
    this.props.dispatch(SetModel())
    this.props.dispatch(SetStudent())
    if(this.props.update){
        this.props.dispatch(SetUpdate())
    }
  }
  handleDelete(e){
    this.props.dispatch(RemoveStudent(e.target.value))
  }
  handleUpdate(e){
    this.props.dispatch(GetStudent(e.target.value))
    this.props.dispatch(SetModel())
    this.props.dispatch(SetUpdate())
  }
  render(){ 
    return (
      <div>
        <HeaderComponent setModalShow={this.setModalShow}/>
        {this.props.tableShow ?
        <TableComponent students={this.props.students} onDelete={this.handleDelete} onUpdate={this.handleUpdate}/> : null}
        {this.props.modelShow ?
        <FormComponent 
          show={this.props.modelShow} 
          onHide={this.setModalShow} 
        />:null}
        {this.props.tableShow ?
        <SecondTableComponent students={this.props.students}/>:null}
      </div>  
    );
  }
}

export default connect((state,props)=>{
  console.log(state.studentStore.stud)
    return{
        students:state.studentStore.students,
        modelShow:state.studentStore.modelShow,
        tableShow:state.studentStore.students.length!==0,
        update:state.studentStore.update,
    }})(Student);
