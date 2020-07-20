import React, {Component} from 'react';
import { Button, Row, Col, Form, FormGroup, Input} from 'reactstrap';
import '../shared/style.css';
import { Link } from 'react-router-dom';

class Home extends Component {
        constructor(props) {
          super(props);

          this.handleOrder = this.handleOrder.bind(this);
      }

      handleOrder(event){
        alert("Sorry We Are Temporarily Closed!!!");
        event.preventDefault();
    }


    render(){
      const specialmenu = this.props.special.map((specdish) => {
        return(
          <>
                <div key={specdish.id} className="col-lg-6 pt-4">
                  <div className="card bg-light">
                    <div className="card-horizontal">
                      <div className="cardimg">
                          <img className="cardimg" src={specdish.image} />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">{specdish.name}</h4>
                        <p class="card-text">{specdish.description}</p>
                      </div>        
                    </div>
                  </div>
                </div>
          </>
          
        );
      });
    


    return (
      //........Start......//
        <div>

        {/*........Header Home Start......*/} 
        <div id="banner" className="text-white">
          <Row className="pt-5">
            <Col lg="12" className="text-capitalize">
              <h5 id="banner-text">Welcome To</h5>
              <h1 className="display-2">The Kathiyawadi Point</h1>
              <h4>The real taste of home</h4>
              <span>We provide you the best authentic kathiyawadi food <br/>with delicious taste of home</span>
            </Col>
          </Row>
        </div>
        {/*........Header Home End......*/}




        {/*........Special Menu Section Start......*/}
        <div className="container pt-5">
          <h1 className="head-border">Our Specialities</h1>
            <div className="row">
                {specialmenu}
            </div>
        </div> 
        {/*........Special Menu Section End......*/}


    {/*........Menu Section Start......*/}
    <section className="pt-5 ">
    <div className="menu-section text-dark text-capitalize">
    <h1>Our Menu</h1>
    <p>We have the best ever authentic kathiyawadi menu in the city!!</p>
    <Button className="btn btn-warning"><Link to="/menu" className="text-white">Discover Menu</Link></Button>
    </div>
    </section>
    {/*........Menu Section End......*/}

    {/*........Reservation Section Start......*/}
    <section className="pt-5">
    <div className="container pb-3">
    <h1 className="head-border">Reserve Table</h1>
    </div>
     

<div id="reservation">
  <div className="container">
    <div className="row pt-5">
        <div className="col-lg-12 text-white">
          <h5>Reservation</h5>
          <h1>Book Your Table Now!</h1>
          <Form className="pt-4" onSubmit={this.handleOrder}>
            <FormGroup>
              <Input type="text" name="name" id="Name" placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Input type="email" name="email" id="Email" placeholder="Enter Email" />
            </FormGroup>
            <FormGroup>
              <Input type="number" name="mobno" id="MobileNo" placeholder="Enter Mobile No..." />
            </FormGroup>
            <FormGroup>
              <Input type="select" name="select" id="selectpersons">
                <option>No. Of Persons</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Input
                type="date"
                name="date"
                id="Date"
                placeholder="Select Date"
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="time"
                name="time"
                id="Time"
                placeholder="Select Time...."
              />
            </FormGroup>
            <Button type="submit" className="btn btn-warning text-white">Book Now</Button>
            </Form>
        </div>
  
      </div>
    </div>
  </div>

    </section>
    {/*........Reservation Section End......*/}



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

{/*....About Us Section Start....*/}
<section className="pt-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-6" id="aboutback">

      </div>
      <div className="aboutus col-lg-6 text-capitalize">
          <p1>About Our Restaurant</p1>
          <h2>We provide you the best authentic kathiyawadi food</h2>
          <p className="pt-5">Our restaurant has best ever menu with best ever gujarati recipes. We have the best authentic gujarati recipes with best ever real taste of home and the best quality food.</p>
      </div>
    </div>
  </div>
</section>

{/*....About Us Section End....*/}
















  </div>
  //........End.......//
      );
    } 
}

export default Home;
    
