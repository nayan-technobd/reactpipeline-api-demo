import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import ReadProductsComponent from "./product/ReadProductsComponent";
import ReadOneProductComponent from "./product/ReadOneProductComponent";
import CreateProductComponent from "./product/CreateProductComponent";
import UpdateProductComponent from "./product/UpdateProductComponent";
import DeleteProductComponent from "./product/DeleteProductComponent";


// component that decides which main component to load: read or create/update
class Datasource extends React.Component {
 
    // initial mode is 'read' mode
//    getInitialState(){
//        return {
//            currentMode: 'read',
//            productId: null
//        };
//    }
    constructor(props) {
        super(props);
        this.state = {
            currentMode: 'read',
            productId: null
        };
        this.changeAppMode = this.changeAppMode.bind(this);
    }
 
    // used when use clicks something that changes the current mode
    changeAppMode(newMode, productId){
        this.setState({currentMode: newMode});
            if(productId !== undefined){
            this.setState({productId: productId});
        }
    }
 
    // render the component based on current or selected mode
    render(){
 
        var modeComponent =
            <ReadProductsComponent
            changeAppMode={this.changeAppMode} />;
 
        switch(this.state.currentMode){
            case 'read':
                break;
            case 'readOne':
                modeComponent = <ReadOneProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'create':
                modeComponent = <BrowserRouter><Switch><CreateProductComponent changeAppMode={this.changeAppMode}/></Switch></BrowserRouter>;
                break;
            case 'update':
                modeComponent = <UpdateProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'delete':
                modeComponent = <DeleteProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            default:
                break;
        }
 
        return modeComponent;
    }
};
 
// go and render the whole React component on to the div with id 'content'
// ReactDOM.render(
//     <Datasource />,
//     document.getElementById('content')
// );

export default Datasource;