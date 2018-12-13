import React from 'react';

const Services = () => {
    document.title = "Services";
    return(
        <div id="services" className="tm-content-box tm-gray-bg tm-services">

            <div className="tm-services-img-container">
                <img src={require("../img/450x900-01.jpg")} alt="Green Field" className="img-fluid tm-services-img" />    
            </div> 
                
            <div className="tm-box-pad tm-services-description-container">
                <h2 className="tm-section-title">Vivamus eget convallis tellus</h2>
                <p className="tm-section-description">Pipeline Bootstrap 4.0 Template is provided by <a href="http://templatemo.com" target="_parent">templatemo</a> website. You may use this HTML CSS template and also share it to friends. Thank you for visiting our site.</p>
            <p className="tm-section-description">Duis vel elit eu eros dapibus vestibulum vel vel nibh. Morbi efficitur erat nulla, id tempor mi accumsan sed. Suspendisse sollicitudin condimentum interdum. <span className="tm-blue-text">BG #F4F4F4 Button BG #936</span> <span className="tm-red-text">Button Hover BG #C33</span></p> 
                <p className="tm-section-description">Nulla id ornare eros, at efficitur risus. Fusce sodales lorem magna, id tempor justo mattis eget. Aenean accumsan semper commodo. Aliquam ante sapien, tincidunt sed vaius et, luctus condimentum sapien.</p>   
            </div>                                              
        </div>
    );
};

export default Services;