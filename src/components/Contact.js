import React, { Component } from 'react';

class Contact extends Component {

    constructor(){
        super();
    }

    componentDidMount(){
        document.title = "Contact";
        window.loadGoogleMap();
    }

    render(){
    return(
        <section id="contact" className="tm-content-box">
            <div className="tm-flex">
                <div className="tm-contact-left-half tm-gray-bg">
                    <div className="tm-contact-inner-pad">
                        <h2 className="tm-section-title">Contact Us</h2>
                        <form action="#contact" method="post" className="contact-form">

                            <div className="form-group">
                                <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name"  required/>
                            </div>
                            <div className="form-group">
                                <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email"  required/>
                            </div>
                            <div className="form-group">
                                <textarea id="contact_message" name="contact_message" className="form-control" rows="9" placeholder="Message" required></textarea>
                            </div>
                            
                            <button type="submit" className="btn btn-primary pull-xs-right tm-button tm-button-normal">Submit</button>

                        </form>
                    </div>                                
                </div>

                <div className="tm-contact-right-half tm-purple-bg">
                    <div className="tm-address-box">
                        <h2 className="tm-section-title">Our Location</h2>
                        <address>110 tellus ut fringilla ornare,<br />
                                    velit arcu rutrum metus<br />
                                    id elementum 10990
                        </address>    
                    </div>                                
                    <div id="google-map"></div>
                </div>
            </div>
            
        </section>
    );
    }
};

export default Contact;