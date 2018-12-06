import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// component that contains the functionalities that appear on top of
// the products table: create product
class TopActionsComponent extends React.Component {
    render(){
        return (
            <div>
                {/* <button
                    onClick={() => this.props.changeAppMode('create')}
                    className='btn btn-primary margin-bottom-1em'> <i className="fa fa-plus"></i> Create product
                </button> */}
                
                <Link to={'/resources/create'} onClick={() => this.props.changeAppMode('create')} className='btn btn-primary margin-bottom-1em'> <i className="fa fa-plus"></i> Create product</Link>
                
            </div>
        );
    }
};

export default TopActionsComponent;