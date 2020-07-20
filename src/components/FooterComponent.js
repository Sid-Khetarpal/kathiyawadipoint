import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../shared/style.css';

class Footer extends Component {
    render(){
        return(
            <div className="mt-5 pt-5 pb-5 footer">
            <div className="container">
            <div className="row">
                <div className="col-lg-5 col-xs-12 about-company">
                <h2>The Kathiyawadi Point</h2>
                <p className="pr-5 text-white-50">The best ever kathiyawadi restaurant in whole gujarat. We provide you the best quality authentic gujarati food with delicious taste of home.</p>
                <p><a href="#"><i className="fa fa-facebook-square mr-1"></i></a><a href="#"><i className="fa fa-linkedin-square"></i></a></p>
                </div>
                
                <div className="col-lg-3 col-xs-12 links">
                <h4 className="mt-lg-0 mt-sm-3">Quick Links</h4>
                    <ul className="m-0 p-0">
                    <li>- <Link to="/home" className="text-white">Home</Link></li>
                    <li>- <Link to="/menu" className="text-white">Menu</Link></li>
                    <li>- <Link to="/gallery" className="text-white">Gallery</Link></li>
                    <li>- <Link to="/contactus" className="text-white">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-xs-12 location">
                <h4 className="mt-lg-0 mt-sm-4">Location</h4>
                <p>22, K.K Road, Porbandar, Gujarat</p>
                <p className="mb-0"><i className="fa fa-phone mr-3"></i>(+91) 9566851236</p>
                <p><i className="fa fa-envelope-o mr-3"></i>info@tkp.com</p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col copyright">
                <p className=""><small className="text-white-50">© 2020. All Rights Reserved.</small></p>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Footer;