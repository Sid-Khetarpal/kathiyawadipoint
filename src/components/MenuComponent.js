import React, { Component } from 'react';
import { Row, Col, Link } from 'reactstrap';
import '../shared/style.css';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const breakfastmenu = this.props.breakfast.map((breakdish) => {
            return(
            <>
              <div key={breakdish.id} className="col-lg-6 pt-4">
                <div className="card bg-light">
                  <div className="card-horizontal">
                    <div className="cardimg">
                        <img className="cardimg" src={breakdish.image} />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">{breakdish.name}</h4>
                      <p class="card-text">{breakdish.description}</p>
                    </div>        
                  </div>
                </div>
              </div>
            </>  
          );
        });
        const lunchmenu = this.props.lunch.map((lunchdish) => {
            return(
              <>
                <div key={lunchdish.id} className="col-lg-6 pt-4">
                  <div className="card bg-light">
                    <div className="card-horizontal">
                      <div className="cardimg">
                          <img className="cardimg" src={lunchdish.image} />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">{lunchdish.name}</h4>
                        <p class="card-text">{lunchdish.description}</p>
                      </div>        
                    </div>
                  </div>
                </div>
            </>
              
            );
        });
        const dinnermenu = this.props.dinner.map((dinnerdish) => {
            return(
             <>
                <div key={dinnerdish.id} className="col-lg-6 pt-4">
                  <div className="card bg-light">
                    <div className="card-horizontal">
                      <div className="cardimg">
                          <img className="cardimg" src={dinnerdish.image} />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">{dinnerdish.name}</h4>
                        <p class="card-text">{dinnerdish.description}</p>
                      </div>        
                    </div>
                  </div>
                </div>
            </>
              
            );
        });

        return(
            <>
            <div id="menuheader" className="text-white">
            <Row className="pt-5">
                <Col lg="12" className="text-capitalize">
                <h1 className="display-3">Our Menu</h1>
                <h5>Hey Foodies!! Presenting You the best authentic kathiyawadi menu!!</h5>
                </Col>
            </Row>
            </div>
            <div className="container pt-5">
                <h1 className="head-border">Breakfast Menu</h1>
                <div className="row pt-4">
                    {breakfastmenu}
                </div>
                <h1 className="head-border pt-5">Lunch Menu</h1>
                <div className="row pt-4">
                    {lunchmenu}
                </div>
                <h1 className="head-border pt-5" id="dine">Dinner Menu</h1>
                <div className="row pt-4">
                    {dinnermenu}
                </div>
            </div>
            </>
        );
        
    }
}

export default Menu;