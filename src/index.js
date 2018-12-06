import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import $ from 'jquery'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'magnific-popup/dist/jquery.magnific-popup.js';

import Welcome from "./components/Welcome";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Resources from "./components/Resources";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {

constructor(){
    super();
    this.setNavbar = this.setNavbar.bind(this);
}

setNavbar (){
    if ($(document).scrollTop() > 160) {
        $('.tm-sidebar').addClass('sticky');
    } else {
        $('.tm-sidebar').removeClass('sticky');
    }
}

componentDidMount(){
    // Detect window scroll and change navbar
    this.setNavbar();
            
    $(window).scroll(function() {
        if ($(document).scrollTop() > 160) {
            $('.tm-sidebar').addClass('sticky');
        } else {
            $('.tm-sidebar').removeClass('sticky');
        }
    });
}



render() {
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                <div className="tm-main-content">
                    <Switch>
                        <Route path='/' component={Welcome} exact />
                        <Route path='/gallery' component={Gallery} />
                        <Route path='/services' component={Services} />
                        <Route path='/resources' component={Resources} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route component={Error} />
                    </Switch>
                    <Footer />
                </div>
            </div>
        </BrowserRouter>
        );
    }
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
