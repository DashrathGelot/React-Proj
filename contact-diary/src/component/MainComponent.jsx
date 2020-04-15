import React from 'react';
import { connect } from 'react-redux';
import {Form,Col, Button,Row} from 'react-bootstrap';

import {CreateContact,RemoveContact} from "../actions/ContactAction";
import contacts from '../services/ContactService'

function RowList(props){
  return(<Row className="row-list" key={props.i} >
  <Col>
    {props.contact.name}
  </Col>
  <Col>
    <Button variant="outline-info" value={props.i} onClick={props.handleShowmore}>Show More</Button>
  </Col>
  <Col>
    <Button variant="outline-danger" value={props.i} onClick={props.handleRemove}>Remove Contact</Button>
  </Col>
</Row>)
} 

function MoreInfo(props){
  return(
    <Row className="row-list-more" key={props.i+1}>
  <Col>
    phone : {props.contact.phone}
  </Col>
  <Col>
    Email : {props.contact.email}
  </Col>
  <Col>
    Company : {props.contact.company.name}
  </Col>
</Row>
  )
}
class MainComponent extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'',
      showmore:false,
      phone:'',
      email:'',
      company:'',
      i:0,
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleRemove=this.handleRemove.bind(this)
    this.handleShowmore=this.handleShowmore.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.dispatch(CreateContact(e))
    this.setState({
      name:'',
      phone:'',
      email:'',
      company:''
    })
  }

  handleRemove(e){
    this.props.dispatch(RemoveContact(e.target.value))
  }
  componentDidMount(){
    contacts(this.props.dispatch)
  }
  handleShowmore(e){
    if(parseInt(this.state.i) === parseInt(e.target.value)){
      this.setState({showmore:!this.state.showmore,i:e.target.value})
    }
    else {
      this.setState({showmore:true,i:e.target.value})}
  }
  render(){
    let list;
    if(this.props.loading){
     list="loading..."
    }
    else if(this.props.error){
      list=<div className="error-msg">Oops! Something wrong to get contacts</div>
    }
    else{
    list=this.props.contacts.map((contact,i)=>{
      return(
      <div className="list-class" key={i}>
        <RowList 
        handleRemove={this.handleRemove}
        handleShowmore={this.handleShowmore}
        contact={contact} 
        i={i}/>
        
      {parseInt(this.state.i)===i && this.state.showmore ? 
        <div>
          <div className="top-notch"></div>
          <MoreInfo contact={contact}/>
        </div>
        :null}
      </div>
      )
    })
  }
    return (
    <div className="container" 
    onClick={(e)=>{return e.target.className!=='btn btn-outline-info'?this.setState({showmore:false}):null}}>
      <div className="heading">
        CONTACT DIARY
      </div>
      <div className="top">
      <Form onSubmit={this.handleSubmit}>
        <Form.Row>
          <Col>
            <Form.Control name="name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} placeholder="name" />
          </Col>
          <Col>
            <Form.Control name="phone" value={this.state.phone} onChange={(e)=>this.setState({phone:e.target.value})} placeholder="Phone" />
          </Col>
          <Col>
            <Form.Control name="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} placeholder="Email" />
          </Col>
          <Col>
            <Form.Control name="company" value={this.state.company} onChange={(e)=>this.setState({company:e.target.value})} placeholder="Company" />
          </Col>
          <Col>
            <Button variant="outline-info" type="submit">Add Contact</Button>
          </Col>
        </Form.Row>
      </Form>
      </div>
      <div className="list">
        {list}
      </div>
    </div> )
  }
}

export default connect((state,props)=>{
  return{
  contacts:state.contactStore.contacts,
  loading:state.contactStore.loading,
  error:state.contactStore.error,
}})(MainComponent)