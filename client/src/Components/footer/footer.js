import React, { Component } from 'react';
import './footer.css'
import img_school from './img_footer/img_school.jpg';
import img_envelope from './img_footer/envelope.png';
import img_location from './img_footer/location.png';
import img_phone_call from './img_footer/phone-call.png'



class Footer extends Component {
    render() {
        return (
            <div>
                    <div className="Footer">
                    <div className="container ">    
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-4 Footer-infor">
                                <div className="col-md-12 col-sm-12 col-xs-12 Footer-infor-header">
                                    <h3>Contact information</h3>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12 Footer-infor-content">
                                    <img src={img_school} alt="logo"/>
                                    <h1>HORO</h1>
                                    <p>HORO is very happy to help you</p>
                                </div>
                            
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-4">
                                <div className="col-md-12 col-sm-12 col-xs-12 Footer-infor-header">
                                    <h3>Work time</h3>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12 Footer-infor-hourwork">
                                    <p>Monday - Friday <span>09 AM - 19 PM</span></p>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12  Footer-infor-hourwork">
                                    <p>Saturday  <span>09 AM - 12 AM</span></p>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12  Footer-infor-hourwork">
                                    <p>Sunday <span>09 AM - 19 PM</span></p>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12  Footer-infor-hourwork">
                                    <h6><img src={img_phone_call} alt="cty"/><span> 0905.424.331</span></h6>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12  Footer-infor-hourwork">
                                    <h6><img src={img_envelope} alt="cty"/><span>nguyen424331@gmail.com</span> </h6>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12  Footer-infor-hourwork">
                                    <h6><img src={img_location} alt="cty"/> <span>1001 Ngô Quyền , P.An Hải Đông, Q.Sơn Trà, Đà Nẵng.</span></h6>
                                </div>
                            
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-4">
                                <div className="row ">
                                <div className="col-md-12 col-sm-12 col-xs-12 Footer-infor-header">
                                    <h3>Menu</h3>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6 Footer-menu">
                                    <div className="col-md-12 col-sm-12 col-xs-12 Footer-menu-link">
                                        <p>Home Page</p>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12 Footer-menu-link">
                                        <p>Rent A Room</p>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12 Footer-menu-link">
                                        <p>Rent A Apartment</p>
                                    </div>
                                
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-6 Footer-menu ">
                                    <div className="col-md-12 col-sm-12 col-xs-12 Footer-menu-link">
                                        <p>House Rental</p>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12 Footer-menu-link">
                                        <p>Contact</p>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12 Footer-menu-link">
                                        <p>Detailed Information</p>
                                    </div>
                                </div>
                                </div>
                            
                            </div>

                        </div>
                        
                    </div>
                    
                </div>
                <div className="Copyright">
                        <p>© Horo, 2020</p>
                </div>
         </div>
        );
    }
}

export default Footer;