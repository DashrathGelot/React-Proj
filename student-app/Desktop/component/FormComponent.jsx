import React from 'react';
import {Button, Col, Modal, Form, Alert} from 'react-bootstrap';
import {connect} from 'react-redux';

import {changName, changeMarks, changRollNo} from '../actions/FormAction'
import {AddStudent, UpdateStudent, SetStudent, SetModel, SetUpdate} from '../actions/StudentAction'

function FormGroup(props) {
    return <Form.Group as={Col}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control name={props.name} id={props.id} type="number" className='valid-marks' custom={props.custom}
                      value={props.value} onChange={props.onChange}/>
        {props.custom ?
            <div variant="danger" className='valid-marks-div'>Enter valid Marks</div> : null}
    </Form.Group>
}

class FormComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            empty: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.checkEmpty = this.checkEmpty.bind(this)
        this.checkValid = this.checkValid.bind(this)
    }

    checkEmpty() {
        const obj = this.props
        if (obj.rollNo === undefined || obj.rollNo === ''
            || obj.name === undefined || obj.name === ''
            || obj.cpp === undefined || obj.cpp === ''
            || obj.java === undefined || obj.java === ''
            || obj.dbms === undefined || obj.dbms === '') {
            this.setState({empty: true})
            return true
        } else {
            return false
        }
    }

    checkValid() {
        const obj = this.props
        if (obj.rvalid || obj.nvalid || obj.cppvalid || obj.javavalid || obj.dbmsvalid) return true
        else return false
    }

    handleSubmit(event) {
        event.preventDefault()
        if (this.checkEmpty() || this.checkValid()) {
            event.preventDefault()
        } else {
            if (this.props.update) {
                this.props.dispatch(UpdateStudent(event))
                this.props.dispatch(SetUpdate())
            } else {
                this.props.dispatch(AddStudent(event))
            }
            this.props.dispatch(SetStudent())
            this.props.dispatch(SetModel())
        }
    }

    render() {
        const title = this.props.update ? 'Update Detail' : 'Add New Student';
        const seen = this.props.update ? 'readonly' : '';
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                {this.state.empty ?
                    <Alert variant="danger">All fields are required</Alert> : null}
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="validationCustomUsername">
                                <Form.Label>Roll Number</Form.Label>
                                <Form.Control name="rollno" type="number" placeholder="Enter Roll Number"
                                              value={this.props.rollNo}
                                              onChange={(e) => this.props.dispatch(changRollNo(e.target.value, this.props.students))}
                                              readOnly={seen}/>
                                {this.props.rvalid ?
                                    <Alert variant="danger">Roll Number is Exists.</Alert> : null}
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Name"
                                              value={this.props.name}
                                              onChange={(e) => this.props.dispatch(changName(e.target.value))}
                                />
                                {this.props.nvalid ?
                                    <Alert variant="danger">Enter valid name.</Alert> : null}
                            </Form.Group>
                        </Form.Row>
                        <Form.Label>Enter Subject Marks :</Form.Label>
                        <Form.Row>
                            <FormGroup
                                label="CPP"
                                name="cpp"
                                id="cppvalid"
                                custom={this.props.cppvalid}
                                value={this.props.cpp}
                                onChange={(e) => this.props.dispatch(changeMarks(e))}
                            />
                            <FormGroup
                                label="Java"
                                name="java"
                                id="javavalid"
                                custom={this.props.javavalid}
                                value={this.props.java}
                                onChange={(e) => this.props.dispatch(changeMarks(e))}
                            />
                            <FormGroup
                                label="DBMS"
                                name="dbms"
                                id="dbmsvalid"
                                custom={this.props.dbmsvalid}
                                value={this.props.dbms}
                                onChange={(e) => this.props.dispatch(changeMarks(e))}
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

export default connect((state) => {
    return {
        students: state.studentStore.students,
        update: state.studentStore.update,
        name: state.studentForm.name,
        rollNo: state.studentForm.rollNo,
        cpp: state.studentForm.cpp,
        java: state.studentForm.java,
        dbms: state.studentForm.dbms,
        rvalid: state.studentForm.validRollNo,
        nvalid: state.studentForm.validName,
        cppvalid: state.studentForm.cppvalid,
        javavalid: state.studentForm.javavalid,
        dbmsvalid: state.studentForm.dbmsvalid,
    }
})(FormComponent)