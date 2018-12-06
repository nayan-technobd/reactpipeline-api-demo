import React from 'react';

const About = () => {
    document.title = "About";
    return(
        <div id="about" className="tm-content-box">
            <div className="tm-box-pad tm-bordered-box">
                <h2 className="tm-section-title">Mauris sollicitudin a nibh ut sollicitudin</h2>
                <p>Pellentesque quam libero, hendrerit pretium feugiat sed, rhoncus ac nunc. Etiam eget dui vel ex eleifend mattis eget vitae risus. Nullam eu libero sit amet quam finibus condimentum. Aenean vulputate dictum suscipit. Morbi efficitur erat nulla, id tempor mi accumsan sed.</p>
                <a href="#" className="tm-button tm-button-normal">Read More</a>
            </div>
            <div className="tm-flex">
                <div className="tm-purple-bg tm-box-pad tm-bordered-box tm-no-border-top">
                    <h2 className="tm-section-title">Cras volutpat fermentum</h2>
                    <p>Aliquam ante sapien, tincidunt sed varius et, luctus condimentum sapien. Duis vel elit eu eros dapibus vestibulum vel vel nibh. Nulla id ornare eros.</p>
                </div>
                <div className="tm-gray-bg tm-box-pad tm-bordered-box tm-no-border-top">
                    <h2 className="tm-section-title">Aenean vulputate dictum</h2>
                    <p>Suspendisse ultricies egestas nulla, non vestibulum quam suscipit et. Sed sit amet enim ultricies, auctor nisl eu, porta augue. Cras et tristique augue.</p>
                </div>    
            </div>                        
        </div>
    );
};

export default About;