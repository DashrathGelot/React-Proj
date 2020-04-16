import React from 'react';
import { Button,Col,Modal,Form,Alert } from 'react-bootstrap'; 
import { connect } from 'react-redux';

import {AddStudent,UpdateStudent,SetStudent,SetModel,SetUpdate} from '../actions/StudentAction'

function FormGroup(props){
  return <Form.Group as={Col}>
  <Form.Label>{props.label}</Form.Label>
  <Form.Control name={props.name} id={props.id} type="number" className='valid-marks' custom={props.custom}
  value={props.value} onChange={props.onChange}/>
  {props.custom ?
  <div variant="danger" className='valid-marks-div'>Enter valid Marks</div>:null}
</Form.Group>
}

class FormComponent extends React.Component{
  constructor(props){
    super(props)
    this.state={
      empty:false,
      name:props.student.name,
      rollNo:props.student.rollNo,
      cpp:props.student.cpp,
      java:props.student.java,
      dbms:props.student.dbms,

    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.checkEmpty=this.checkEmpty.bind(this)
    this.checkValid=this.checkValid.bind(this)
    this.changName=this.changName.bind(this)
    this.changRollNo=this.changRollNo.bind(this)
    this.changeMarks=this.changeMarks.bind(this)
  }
  changName(e){
    this.setState({
      name:e.target.value,
      nvalid:!(/^[a-zA-Z ]*$/).test(e.target.value)
    })
  }
  changRollNo(e){
    this.setState({
      rollNo:e.target.value,
      rvalid:this.props.students.some(element =>parseInt(e.target.value)===element.rollNo),
    })
  }
  changeMarks(e){
    const val=e.target
    this.setState({
      [val.name]:val.value,
      [val.id]:parseInt(val.value) < 0 || parseInt(val.value) >100
    })
  }
  checkEmpty(){
    const obj=this.state
    console.log(obj.name)
    if(obj.rollNo && obj.name && obj.cpp && obj.java && obj.dbms){
      return false
    }
    else{
      this.setState({empty:true})
      return true
    }
  }
  checkValid(){
    const obj=this.state
    if(obj.rvalid || obj.nvalid || obj.cppvalid || obj.javavalid || obj.dbmsvalid) return true
    else return false
  }
  handleSubmit(event){
   event.preventDefault()
   if(this.checkEmpty() || this.checkValid()){ event.preventDefault()}
   else{
      if(this.props.update){
        this.props.dispatch(UpdateStudent(event))
        this.props.dispatch(SetUpdate())
      }else{
          this.props.dispatch(AddStudent(event))
      }
      this.props.dispatch(SetStudent())
      this.props.dispatch(SetModel())
      }
  }
  render(){
    const title=this.props.update ? 'Update Detail' : 'Add New Student';
    const seen=this.props.update ? 'readonly':'';
      return (
          <Modal show={this.props.show} onHide={()=>this.props.dispatch(SetModel())} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {title}
              </Modal.Title>
            </Modal.Header>
            {this.state.empty?
                  <Alert variant="danger">All fields are required</Alert>:null}
            <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} controlId="validationCustomUsername">
                  <Form.Label>Roll Number</Form.Label>
                  <Form.Control name="rollNo" type="number" placeholder="Enter Roll Number"
                  value={this.state.rollNo} 
                  onChange={this.changRollNo}
                  readOnly={seen}/>
                  {this.state.rvalid?
                  <Alert variant="danger">Roll Number is Exists.</Alert>:null}
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Name</Form.Label>
                  <Form.Control name="name" type="text" placeholder="Name"
                  value={this.state.name} 
                  onChange={this.changName}
                 />
                 {this.state.nvalid?
                  <Alert variant="danger">Enter valid name.</Alert>:null}
                </Form.Group>
              </Form.Row>
              <Form.Label>Enter Subject Marks :</Form.Label>
              <Form.Row>
                <FormGroup
                label="CPP"
                name="cpp"
                id="cppvalid"
                custom={this.state.cppvalid}
                value={this.state.cpp}
                onChange={this.changeMarks}
                />
                <FormGroup
                label="Java"
                name="java"
                id="javavalid"
                custom={this.state.javavalid}
                value={this.state.java}
                onChange={this.changeMarks}
                />
                <FormGroup
                label="DBMS"
                name="dbms"
                id="dbmsvalid"
                custom={this.state.dbmsvalid}
                value={this.state.dbms}
                onChange={this.changeMarks}
                />
              </Form.Row>
              <Modal.Footer>
                  <Button type="submit">Save</Button>
                  <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Form>
            </Modal.Body>
          </Modal>
        );
  }
}

export default connect((state)=>{
  return{
    students:state.studentStore.students,
    update:state.studentStore.update,
    student:state.studentStore.getStudent,
  }
})(FormComponent)