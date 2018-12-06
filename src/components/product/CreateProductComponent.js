import React from 'react';
import $ from 'jquery'; 
import { Route, Link } from 'react-router-dom';

class CreateProductComponent extends React.Component {
    // initialize values
//    getInitialState() {
//        return {
//            categories: [],
//            selectedCategoryId: -1,
//            name: '',
//            description: '',
//            price: '',
//            successCreation: null
//        };
//    }
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            selectedCategoryId: -1,
            name: '',
            description: '',
            price: '',
            successCreation: null
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    // on mount, get all categories and store them in this component's state
    componentDidMount() {
        window.title = 'Create Product';
        this.serverRequest = $.get("http://localhost/react/api/category/read.php", function (categories) {
            this.setState({
                categories: categories.records
            });
        }.bind(this));

        $('.page-header h1').text('Create product');
    }

    // on unmount, stop getting categories in case the request is still loading
    componentWillUnmount() {
        this.serverRequest.abort();
    }

    // handle category change
    onCategoryChange(e) {
        this.setState({selectedCategoryId: e.target.value});
    }

    // handle name change
    onNameChange(e) {
        this.setState({name: e.target.value});
    }

    // handle description change
    onDescriptionChange(e) {
        this.setState({description: e.target.value});
    }

    // handle price change
    onPriceChange(e) {
        this.setState({price: e.target.value});
    }

    // handle save button clicked
    onSave(e){
        e.preventDefault();
        // data in the form
        if(this.state.name != '' && this.state.description != '' && this.state.price != '' && this.state.selectedCategoryId != -1){
            var form_data={
                name: this.state.name,
                description: this.state.description,
                price: this.state.price,
                category_id: this.state.selectedCategoryId
            };

            // submit form data to api
            // fetch('http://localhost/react/api/product/create.php', {
            //     method: 'POST',
            //     mode: 'CORS',
            //     body: JSON.stringify(form_data),
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json'
            //     }
            // }).then(res => {
            //     // return res;
            //     // api message
            //     this.setState({successCreation: res});

            //     // empty form
            //     this.setState({name: ""});
            //     this.setState({description: ""});
            //     this.setState({price: ""});
            //     this.setState({selectedCategoryId: -1});
            // }).catch(err => {
            //     console.log(err);
            // });

            $.ajax({
                url: "http://localhost/react/api/product/create.php",
                dataType: "json",
                contentType: "application/json",
                type: "POST",
                data : JSON.stringify(form_data),
                success : function(response) {
                    // api message
                    this.setState({successCreation: response['message']});

                    // empty form
                    this.setState({name: ""});
                    this.setState({description: ""});
                    this.setState({price: ""});
                    this.setState({selectedCategoryId: -1});
                }.bind(this),
                error: function(xhr, resp, text){
                    // show error to console
                    console.log(xhr, resp, text);
                }
            });
        }else{
            alert ('Please fill all the form field');
        }
        
    }

    render() {
 
        // make categories as option for the select tag.
        var categoriesOptions = this.state.categories.map(function(category){
            return (
                <option key={category.id} value={category.id}>{category.name}</option>
            );
        });

        /*
        - tell the user if a product was created
        - tell the user if unable to create product
        - button to go back to products list
        - form to create a product
        */
        return (
        <div>
            {

                this.state.successCreation == "Product was created." ?
                    <div className='alert alert-success'>
                        Product was saved.
                    </div>
                : null
            }

            {

                this.state.successCreation == "Unable to create product." ?
                    <div className='alert alert-danger'>
                        Unable to save product. Please try again.
                    </div>
                : null
            }

            {/* <button 
                onClick={() => this.props.changeAppMode('read')}
                className='btn btn-primary margin-bottom-1em'> <i className="fa fa-list"></i>  Read Products
            </button> */}

            <Link to={'/resources'} onClick={() => this.props.changeAppMode('read')} className='btn btn-primary margin-bottom-1em'> <i className="fa fa-list"></i> Read Products</Link>


            <form onSubmit={this.onSave}>
                <table className='table table-bordered table-hover'>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input
                            type='text'
                            className='form-control'
                            value={this.state.name}
                            required
                            onChange={this.onNameChange} />
                        </td>
                    </tr>

                    <tr>
                        <td>Description</td>
                        <td>
                            <textarea
                            type='text'
                            className='form-control'
                            required
                            value={this.state.description}
                            onChange={this.onDescriptionChange}>
                            </textarea>
                        </td>
                    </tr>

                    <tr>
                        <td>Price ($)</td>
                        <td>
                            <input
                            type='number'
                            step="0.01"
                            className='form-control'
                            value={this.state.price}
                            required
                            onChange={this.onPriceChange}/>
                        </td>
                    </tr>

                    <tr>
                        <td>Category</td>
                        <td>
                            <select
                            onChange={this.onCategoryChange}
                            className='form-control'
                            value={this.state.selectedCategoryId} required>
                            <option value="-1">Select category...</option>
                            {categoriesOptions}
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td></td>
                        <td>
                            <button 
                            className='btn btn-primary'
                            onClick={this.onSave}>Save</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
        );
    }
};

export default CreateProductComponent;