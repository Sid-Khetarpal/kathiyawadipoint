import React, {Component} from 'react';
import { Row, Col, Form, FormGroup, Input, Button, Label } from 'reactstrap';
import '../shared/style.css'

class Contact extends Component {

    constructor(props){
        super(props);

        this.handleFeedback = this.handleFeedback.bind(this);
    }

    handleFeedback(event){
        alert("Thank You For Your Feedback, We Will Get Back To You Soon!");
        event.preventDefault();
    }

    render(){
    return(
        <>
           <div id="contactheader" className="text-white">
            <Row className="pt-5">
                <Col lg="12" className="text-capitalize">
                <h1 className="display-3">Contact Us</h1>
                </Col>
            </Row>
            </div>


       <div className="container">
            <div className="row row-content">
                <div className="col-12">
                <h3 className="head-border">Location Information</h3>
                </div>

                <div className="col-12 col-sm-4 offset-sm-1 pt-3">
                        <h5>Our Address</h5>
                        <address>
                        22, Clear Water Bay Road,<br />
                        Clear Water Bay, Porbandar,<br />
                        Gujarat, India<br />
                        <i className="fa fa-phone"></i>: +91 8569321563<br />
                        <i className="fa fa-fax"></i>: +91 8563445236<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">kathiyawadipoint@food.net</a>
                        </address>
                </div>
                <div className="col-lg-6 offset-sm-1 pt-3">
                    <h5>Map of our Location</h5>
                    <img width="60%" src="assets/images/map.jpg" />
                </div>
                <div className="col-lg-12 pt-3">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="#"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="#" ><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="#"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>

                
            </div>
            </div>

            <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-md-5 container">
                    <h2>Send Us A Message</h2>
                    <Form className="formback" onSubmit={this.handleFeedback}>
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" name="name" className="form-control" id="name"  placeholder="Enter your name..." />
                            <small id="nameHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="exampleInputEmail1">Email address</Label>
                            <Input type="email" name="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="message">Message</Label>
                            <Input type="textarea" name="message" className="form-control" id="message"  placeholder="Enter Your Message Here....." />
                            <small id="messageHelp" className="form-text text-muted">We'll never share your message with anyone else.</small>
                        </FormGroup>
                        <Button type="submit" className="btn btn-warning text-white">Send</Button>
                    </Form>
                    </div>
            </div> 

</>
        
    );
    }
}

export default Contact;