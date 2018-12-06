import React from 'react';

const Welcome = () => {
    document.title = "React Pipeline";
    return(
        <div className="tm-content-box tm-content-box-home">                        
            <img src="img/1200x800-01.jpg" alt="Image 1" className="img-fluid tm-welcome-img" />                        
            <div className="tm-welcome-boxes-container">
                <div className="tm-welcome-box">
                    <div className="tm-welcome-text">
                        <h2 className="tm-section-title">Aliquam ante sapien</h2>
                        <p>Duis vel elit eu eros dapibus vestibulum vel vel nibh. Nulla id ornare eros, at efficitur risus.</p>    
                    </div>                            
                    <a href="#" className="tm-welcome-link tm-button">Learn More</a>
                </div>
                <div className="tm-welcome-box">
                    <div className="tm-welcome-text">
                        <h2 className="tm-section-title">Lorem ipsum dolor</h2>
                        <p>Vivamus eleifend ac turpis sit amet maximus. Nulla in faucibus nisl, ut ultrices magna.</p>    
                    </div>                            
                    <a href="#" className="tm-welcome-link tm-button">Read Details</a>
                </div>
            </div>
        </div>
    );
};

export default Welcome;