import React from 'react';
import { Button, Container,Row,Col} from 'react-bootstrap'; 
import { connect } from 'react-redux';

class HeaderComponent extends React.Component{
    state={
        ar:[],
        search:''
    }
    handleSearch=(e)=>{
        this.setState({
            ar:this.props.students.filter(student=> e.target.value && (student.rollno).toString().startsWith(e.target.value)),
            search:e.target.value
        })
    }
    render(){
        const result=this.state.ar.map((result,i)=>{
        return <li key={i}> &nbsp; {result.rollno} &nbsp; &nbsp; {result.name}</li>
        })
        return(
            <div>
                <h1 className="heading"> Student App </h1>
                <Container>
                    <Row>
                        <Col>
                            Student Record : {this.props.students.length}
                        </Col>
                        <Col>
                            <input className="input-search" placeholder=" Search RollNumber...." value={this.state.search} onChange={this.handleSearch}/>
                            <ul className="list-unstyled dropdown-list-box">
                            {result}
                            </ul>
                        </Col>
                        <Col>
                            <Button variant="outline-success">SEARCH</Button>
                        </Col>
                        <Col>
                            <Button variant="outline-info" onClick={this.props.setModalShow}>Add New Student</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default connect((state)=>{
    return{
        students:state.studentStore.students
    }})(HeaderComponent)