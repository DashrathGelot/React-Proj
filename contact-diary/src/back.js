// import React from 'react';
// import store from './app/store'
// import { connect } from 'react-redux';
// import {Form,Col, Button, ListGroup} from 'react-bootstrap';

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={
//       //contacts:[],
//       name:''
//     }
//  //   this.dispatch=this.dispatch.bind(this)
//     this.handleSubmit=this.handleSubmit.bind(this)
//     this.handleRemove=this.handleRemove.bind(this)
//   }
//   handleSubmit(e){
//     e.preventDefault()
//     let newContact=this.state.contacts
//     newContact.push(e.target.name.value)
//     store.dispatch({type:'Create Contact',name:e.target.name.value})
//     // this.setState({
//     //   contacts:newContact
//     // })
//   }
//   handleRemove(e){
//     // this.setState({
//     //   contacts:this.props.contacts.filter((con,i)=>i!==parseInt(e.target.value))
//     // })
//   }
//   // dispatch(){
//   //   store.dispatch(function(dispatch){
//   //     dispatch({type:'Some_Action',data:9})
//   //     setTimeout(function(){
//   //       dispatch({type:'After Action',data:7})
//   //     },3000)
//   //   })
//   // }
//   render(){
//     let list=this.props.contacts.map((contact,i)=>{
//       return(
//       <ListGroup.Item variant="info">{contact}
//       <Button variant="outline-danger" value={i} onClick={this.handleRemove}>Remove Contact</Button>
//       </ListGroup.Item>
//       )
//     })
//     return (
//     <div>
//       <h1>hello</h1>
//       <Form onSubmit={this.handleSubmit}>
//         <Form.Row>
//           <Col>
//             <Form.Control name="name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} placeholder="name" />
//           </Col>
//           <Col>
//             <Button variant="outline-info" type="submit">Add Contact</Button>
//           </Col>
//         </Form.Row>
//       </Form>
//       <ListGroup>{list}</ListGroup>
//     </div>  
//       )
//   }
// }

// export default connect((state,props)=>{return{
//   contacts:state.store.contacts,
//   originincrement:state.originincrement
// }})(App)


// // import {applyMiddleware,createStore} from 'redux';
// // import {createLogger} from 'redux-logger'
// // import thunk from 'redux-thunk'

// function counter(state={originincrement:0},action){
//   switch (action) {
//     case 'Increment':
//       return{
//         ...state,
//       originincrement:state.originincrement+action.data
//       }
//     case 'After Action':
//       return{
//         ...state,
//       originincrement:state.originincrement+action.data
//       }
//     default:
//         return state
//       break;
//   }
// }

// // let logger=createLogger({
// //   collapsed:true
// // })
// // let store=createStore(counter,
// //   applyMiddleware(thunk,logger))

// //export default store;