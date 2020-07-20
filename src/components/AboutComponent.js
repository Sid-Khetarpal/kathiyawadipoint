import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../shared/style.css';

class About extends Component {
    render(){
        return(
            <>
            <div className="aboutheader text-white">
            <Row className="pt-5">
                <Col lg="12" className="text-capitalize">
                <h1 className="display-3">About Us</h1>
                <h5>We provide you the best authentic kathiyawadi food!</h5>
                </Col>
            </Row>
            </div>

            {/*....About Us Section Start....*/}
                <section className="pt-5">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6" id="aboutback">

                    </div>
                    <div className="aboutus col-lg-6">
                        <p1>About Our Restaurant</p1>
                        <h1>We Provide Good Food For Your Family!</h1>
                        <p className="pt-5">Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco laboris nisi ufsit aliquip ex ea commodo consequat is aute irure m, quis nostrud exer</p>
                        <p className="pt-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected our, or randomised words which don't look even slightly believab If you are going to use a passage.</p>
                    </div>
                    </div>
                </div>
                </section>
            {/*....About Us Section End....*/}

            {/*....Services Section Start....*/}
                <section className="pt-5 ">
                    <div className="services-section text-dark text-capitalize">
                    <h1>Our Services</h1>
                    <div className="container pt-4">
                        <div className="row">
                        <div className="col-lg-4">
                            <div className="card bg-light" id="servicecard">
                            <div>
                                <div>
                                    <img className="cardimg1" src="/assets/images/quality.png" alt="not-found"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Quality Food</h4>
                                    <p class="card-text">We guarantee you to deliver the best quality and healthy food.</p>
                                </div>        
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="card bg-light" id="servicecard">
                            <div>
                                <div>
                                    <img className="cardimg1" src="/assets/images/delivery.png" alt="not-found"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">On Time Delivery</h4>
                                    <p class="card-text">We guarantee you to deliver the best quality food in less than 30 minutes.</p>
                                </div>        
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="card bg-light" id="servicecard">
                            <div>
                                <div>
                                    <img className="cardimg1" src="/assets/images/chef.png" alt="not-found"/>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Best Chef</h4>
                                    <p class="card-text">We have the best ever gujarati experienced chefs.</p>
                                </div>        
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*....Services Section End....*/}
            </>
        );
    }
}

export default About;