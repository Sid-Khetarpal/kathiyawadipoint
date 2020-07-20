import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../shared/style.css';

class Gallery extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const gallerylist = this.props.gallery.map((galleryimg) => {
            return(
            <>
              <div key={galleryimg.id} className="col-lg-4">
                <div className="card">
                  <a href={galleryimg.image} ><img src={galleryimg.image} className="card-img-top" /></a>
                </div>
              </div>
            </>  
          );
        });

        return(
            <>
            <div className="galleryheader text-dark">
            <Row className="pt-5">
                <Col lg="12" className="text-capitalize">
                <h1 className="display-3">Our Food Gallery</h1>
                </Col>
            </Row>
            </div>

            <div className="gallery-container m-3 p-3">
                <div className="row no-gutters">
                    {gallerylist}
                </div>
            </div> 

            
            </>
        );
    }
}


export default Gallery;