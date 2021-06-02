import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Products from './products';




class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
         showModulo: false
    };
   
    
  }
  render() {
    return ( <HashRouter>
      <div>
        <Container>
  <Row className="flex-row" className= "justify-content-end">
    <Button>Cart</Button>
    <Button>LogIn</Button>
 
  </Row>
  <Row className="flex-row" className= "justify-content-center">
    
  AMARKT ASIAN MARKET
  
  </Row>
</Container>
        <Container fluid="md">
  <Row>
    <Col></Col>
  </Row>
</Container>
      <Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
    </Form>
  </Navbar.Collapse>
</Navbar>
<Carousel style={{height:250, backgroundColor:"blueviolet"}}>
  <Carousel.Item interval={1500}>
  <Button style={{maxHeight:250}}><img style={{maxHeight:250, maxWidth:250}}
      className="d-block w-100"
      src="/cucumberpotatoe.jpg"
      alt="Third slide"
    /></Button> 
  
        
    
    <Carousel.Caption>
      <h3>Its crunch time!</h3>
      <Button variant="primary"  >
         Shop Snacks
        </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <Button style={{maxHeight:250}}><img style={{maxHeight:250, maxWidth:250 }}
      className="d-block w-100"
      src="/matchajelly.jpg"
      alt="Third slide"
    /></Button> 
  
     
        
    <Carousel.Caption>
      <h3> Drink up and cool down</h3>
      <Button variant="primary"  >
      <NavLink to="/products">  Shop Drinks</NavLink>
        </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
   <Button variant="outline-*"style={{maxHeight:250}}><img style={{maxHeight:250, maxWidth:250 }}
      className="d-block w-100"
      src="/poky.jpg"
      alt="Third slide"
    /></Button> 
    
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        <h2>HELLO</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        <Button variant="primary"  >
         Cart
        </Button>
       < div className="content">
      
            <Route path="/products" component={Products}/>
        
          </div>
          
      </div>
      </HashRouter>
    );
}
}
export default Main;