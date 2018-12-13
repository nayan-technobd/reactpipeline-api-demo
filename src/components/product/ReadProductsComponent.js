import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import $ from 'jquery'; 
import TopActionsComponent from "./TopActionsComponent";
import ProductsTable from "./ProductsTable";

// component that contains all the logic and other smaller components
// that form the Read Products view
class ReadProductsComponent extends React.Component {
//    getInitialState() {
//        return {
//            products: []
//        };
//    }
    state = {
        products: [],
        paging: [],
        api_base_url: 'http://192.168.50.59/react/api',
        api_url: 'http://192.168.50.59/react/api/product/read_paging.php'
    };

    constructor(props) {
        super(props);
        // this.componentDidMount = this.componentDidMount.bind(this);
        // this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }
 
    // on mount, fetch all products and stored them as this component's state
    componentDidMount() {
        this.serverRequest = this.getDataFormServer();
    }

    getDataFormServer = gopageurl => {
        let apiurl = this.state.api_url;
        if(gopageurl){
            apiurl = gopageurl;
        }
        this.serverRequest = $.get(apiurl, function (products) {
            this.setState({
                products: products.records,
                paging: products.paging
            });
        }.bind(this))
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState !== this.state){
            // console.log(prevState);
            // this.getDataFormServer();
        }
        
    }
 
    // on unmount, kill product fetching in case the request is still pending
    componentWillUnmount() {
        // this.serverRzequest.abort();
    }

    gotoPage(pageUrl,pageno){
        this.getDataFormServer(pageUrl);
        this.setState({api_url: pageUrl});
        console.log(pageno);
    }
 
    // render component on the page
    render() {
        // list of products
        var filteredProducts = this.state.products;
        var filteredPaging = this.state.paging;
        $('.page-header h1').text('Read Products');
 
        return (
            <div className='overflow-hidden'>
                <TopActionsComponent changeAppMode={this.props.changeAppMode} />
 
                <ProductsTable
                    products={filteredProducts}
                    paging={filteredPaging}
                    changeAppMode={this.props.changeAppMode}
                    gotoPage={this.gotoPage.bind(this)}
                    />
            </div>
        );
    }
};

export default ReadProductsComponent;