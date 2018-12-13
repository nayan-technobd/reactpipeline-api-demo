import React from 'react';
import $ from 'jquery';
import 'magnific-popup/dist/jquery.magnific-popup.js';

class Gallery extends React.Component {
    componentDidMount(){
        document.title = "Gallery";
        $('.tm-gallery').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {enabled:true}
            // other options
          });
    }
// const Gallery = () => {
    render() {
    return(
        <div id="gallery" className="tm-content-box">                        
            <div className="grid tm-gallery">
                <figure className="effect-bubba">
                    <img src={require("../img/img-11-08.jpg")} alt="Image 8" className="img-fluid" />
                    <figcaption>
                        <h2>Light <span>Bridge</span></h2>
                        <p>Fusce faucibus metus in augue</p>
                        <a href="img/img-11-08.jpg">View more</a>
                    </figcaption>
                </figure>

                <figure className="effect-bubba">
                    <img src={require("../img/img-11-07.jpg")} alt="Image 7" className="img-fluid" />
                    <figcaption>
                        <h2>Glass <span>Tower</span></h2>
                        <p>Sed ut ipsum eu purus ullamcorper</p>
                        <a href="img/img-11-07.jpg">View more</a>
                    </figcaption>
                </figure>

                <figure className="effect-bubba">
                    <img src={require("../img/img-11-05.jpg")} alt="Image 5" className="img-fluid" />
                    <figcaption>
                        <h2>Jump <span>Higher</span></h2>
                        <p>Morbi fermentum eget libero sed</p>
                        <a href="img/img-11-05.jpg">View more</a>
                    </figcaption>
                </figure>

                <figure className="effect-bubba">
                    <img src={require("../img/img-11-03.jpg")} alt="Image 3" className="img-fluid" />
                    <figcaption>
                        <h2>Forest <span>Park</span></h2>
                        <p>Aenean rutrum enim a tellus suscipit</p>
                        <a href="img/img-11-03.jpg">View more</a>
                    </figcaption>
                </figure>

                <figure className="effect-bubba">
                    <img src={require("../img/img-11-02.jpg")} alt="Image 2" className="img-fluid" />
                    <figcaption>
                        <h2>Ice <span>Mountain</span></h2>
                        <p>Curabitur a ipsum eget eros sodales</p>
                        <a href="img/img-11-02.jpg">View more</a>
                    </figcaption>
                </figure>

                <figure className="effect-bubba">
                    <img src={require("../img/img-11-04.jpg")} alt="Image 4" className="img-fluid" />
                    <figcaption>
                        <h2>Green <span>Field</span></h2>
                        <p>Duis eget tortor et mauris tempus</p>
                        <a href="img/img-11-04.jpg">View more</a>
                    </figcaption>
                </figure>                                
            </div>
        </div>
    );
    }
};

export default Gallery;