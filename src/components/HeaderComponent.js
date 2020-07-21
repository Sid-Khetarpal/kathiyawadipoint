import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, DropdownToggle, DropdownMenu, DropdownItem, Dropdown } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../shared/style.css';
import { NavLink, Link } from 'react-router-dom';


class Header extends Component{

    constructor(props){
        super(props);

        this.state = { isModalOpen: false, dropdownOpen: false, value: "Select" };
        this.toggleModal  = this.toggleModal.bind(this);
        this.handleOrder = this.handleOrder.bind(this);
        this.handleChangeDropdown = this.handleChangeDropdown.bind(this);
    }

    handleChangeDropdown(event){
        this.setState({value: event.target.value});
    }


    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleOrder(event){
        this.toggleModal();
        alert("Sorry " + this.username.value + " we are not accepting orders right now!");
        event.preventDefault();

    }

    render(){
        return(
            <>
            <div>
                <Navbar dark expand="lg" className="fixed-top" id="mainNav">
                    <div className="container">
                    <NavbarBrand>
                        <Link to="/home"><img className="logoimg" src="assets/images/logo.png" alt="Ristorante Con Fusion"/></Link>
                    </NavbarBrand>


                        <Nav className="mr-auto">
                        <NavItem>
                            <NavLink className="nav-link" to='/home'>
                                <span> Home</span>
                            </NavLink>
                        </NavItem>    
                        <NavItem>    
                            <NavLink className="nav-link" to="/menu">
                                <span> Menu</span>
                            </NavLink>
                        </NavItem>    
                        <NavItem>
                            <NavLink className="nav-link" to="/gallery">
                                <span> Gallery</span>
                            </NavLink>
                        </NavItem>                                                        
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <span> Contact Us</span>
                            </NavLink>
                        </NavItem> 
                        <NavItem>   
                            <NavLink className="nav-link" to="/aboutus">
                                <span> About Us</span>
                            </NavLink>
                        </NavItem>
                        </Nav>
                        <Nav navbar className="mr-5">
                        <NavItem>   
                            <Button outline onClick={this.toggleModal} className="btn btn-warning text-white">
                                <span>Order Online</span>
                            </Button>
                        </NavItem>                        
                        </Nav>
                    </div>
                </Navbar>

                <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                    <ModalHeader toggle = {this.toggleModal}>Order Now!</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleOrder}>
                            <FormGroup>
                                <Label htmlFor="username">Enter Your Name</Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username=input} />
                            </FormGroup>
                            <FormGroup>
                            <Label>Select Your Order: </Label>
                            <select value={this.state.value} onChange={this.handleChangeDropdown}>
                                <option value="selectorder">Please Select Your Order Now!!!</option>
                                <option value="grape">Grape</option>
                                <option value="apple">Apple</option>
                                <option value="orange">Orange</option>
                            </select>
                            </FormGroup>
                            
                            <Button type="submit" value="order" className="btn btn-warning text-white">Order</Button>
                        </Form>
                    </ModalBody>
                </Modal>

                </div>
            </>    
            
        );
    }
}

export default Header;