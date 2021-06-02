import React, { Component } from 'react';
 import Form from 'react-bootstrap/Form';
 import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Main from "./main"


class Counter extends Component {
  
  

   
    render() { 
      return (<HashRouter> <div><Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        
        
      </Form> 
      <button className="btn btn-secondary btn sm"><NavLink to="/main"> Continue without LogIn</NavLink></button> 
       <button className="btn btn-secondary btn sm"><NavLink to="/main"> Log In</NavLink></button> 
     
     
      <div className="content">
      
            <Route path="/main" component={Main}/>
        
          </div>
      
       </div>
      </HashRouter>);
    }

 
  
}
export default Counter;