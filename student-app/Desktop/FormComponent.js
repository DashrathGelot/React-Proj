import React from 'react';
import {Button, Col, Modal, Form, Alert} from 'react-bootstrap';

function FormGroup(props) {
    return
<
    Form.Group as = {Col}
    controlId = "formGridCity" >
        < Form.Label > {props.label} < /Form.Label>
        < Form.Control
    name = {props.name}
    type = "number"
    className = 'valid-marks'
    custom = {props.custom}
    value = {props.value}
    onChange = {props.onChange}
    />
    {
        props.valid ?
    <
        div
        variant = "danger"
        className = 'valid-marks-div' > Enter
        valid
        Marks < /div>:null}
        < /Form.Group>
    }


    export default class FormComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                validated: false,
                name: props.student.name,
                rollNo: props.student.rollNo,
                cpp: props.student.cpp,
                java: props.student.java,
                dbms: props.student.dbms,
                empty: false
            }
            this.rollNoValid = this.rollNoValid.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
            this.nameValid = this.nameValid.bind(this)
            this.checkEmpty = this.checkEmpty.bind(this)
            this.marksValid = this.marksValid.bind(this)
            this.checkValid = this.checkValid.bind(this)
        }

        rollNoValid(e) {
            let bool = false;
            this.props.allstudents.forEach(element => {
                if (parseInt(e.target.value) === element.rollNo) {
                    bool = true
                }
            });
            this.setState({rollNo: e.target.value, rvalid: bool})
        }

        nameValid(e) {
            const regex = /^[a-zA-Z ]*$/
            let bool = !regex.test(e.target.value)
            this.setState({name: e.target.value, nvalid: bool})
        }

        marksValid(e) {
            let bool = false
            const obj = e.target
            console.log()
            if (obj.value < 0 || obj.value > 100) {
                bool = true
            }
            if (obj.name === 'cpp') {
                this.setState({cpp: obj.value, cppvalid: bool})
            } else if (obj.name === 'java') {
                this.setState({java: obj.value, javavalid: bool})
            } else {
                this.setState({dbms: obj.value, dbmsvalid: bool})
            }
        }

        checkEmpty() {
            const obj = this.state
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
            const obj = this.state
            if (obj.rvalid || obj.nvalid || obj.cppvalid || obj.javavalid || obj.dbmsvalid) {
                return true
            } else {
                return false
            }
        }

        handleSubmit(event) {
            event.preventDefault()
            if (this.checkEmpty() || this.checkValid()) {
                event.preventDefault()
            } else {
                this.props.handleSubmit(event)
            }
        }

        render() {
            const title = this.props.update ? 'Update Detail' : 'Add New Student';
            const seen = this.props.update ? 'readonly' : '';
            return (
                < Modal
            {...
                this.props
            }
            aria - labelledby = "contained-modal-title-vcenter" >
                < Modal.Header
            closeButton >
            < Modal.Title
            id = "contained-modal-title-vcenter" >
                {title}
                < /Modal.Title>
                < /Modal.Header>
            {
                this.state.empty ?
            <
                Alert
                variant = "danger" > All
                fields
                are
                required < /Alert>:null}
                < Modal.Body >
                < Form
                onSubmit = {this.handleSubmit} >
                < Form.Row >
                < Form.Group as = {Col}
                controlId = "validationCustomUsername" >
                    < Form.Label > Roll
                Number < /Form.Label>
                < Form.Control
                name = "rollno"
                type = "number"
                placeholder = "Enter Roll Number"
                value = {this.state.rollNo}
                onChange = {this.rollNoValid}
                readOnly = {seen}
                />
                {
                    this.state.rvalid ?
                <
                    Alert
                    variant = "danger" > Roll
                    Number
                    is
                    Exists. < /Alert>:null}
                    < /Form.Group>
                    < Form.Group as = {Col}
                    controlId = "formGridPassword" >
                        < Form.Label > Name < /Form.Label>
                        < Form.Control
                    name = "name"
                    type = "text"
                    placeholder = "Name"
                    value = {this.state.name}
                    onChange = {this.nameValid}
                    />
                    {
                        this.state.nvalid ?
                    <
                        Alert
                        variant = "danger" > Enter
                        valid
                        name. < /Alert>:null}
                        < /Form.Group>
                        < /Form.Row>
                        < Form.Label > Enter
                        Subject
                        Marks :<
                        /Form.Label>
                        < Form.Row >
                        < FormGroup
                        label = "CPP"
                        name = "cpp"
                        custom = {this.state.cppvalid}
                        value = {this.state.cpp}
                        onChange = {this.marksValid}
                        />
                        < FormGroup
                        label = "Java"
                        name = "java"
                        custom = {this.state.javavalid}
                        value = {this.state.java}
                        onChange = {this.marksValid}
                        />
                        < FormGroup
                        label = "DBMS"
                        name = "dbms"
                        custom = {this.state.dbmsvalid}
                        value = {this.state.dbms}
                        onChange = {this.marksValid}
                        />
                        < /Form.Row>
                        < Modal.Footer >
                        < Button
                        type = "submit" > Save < /Button>
                            < Button
                        onClick = {this.props.onHide} > Close < /Button>
                            < /Modal.Footer>
                            < /Form>
                            < /Modal.Body>
                            < /Modal>
                    )
            ;
        }
    }