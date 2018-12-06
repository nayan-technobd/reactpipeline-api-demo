import React from 'react';
import $ from 'jquery'; 

// component that contains the logic to delete a product
class DeleteProductComponent extends React.Component {
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }
    // on mount, change header text
    componentDidMount(){
        $('.page-header h1').text('Delete Product');
    }

    // handle single row deletion
    onDelete(e){

        // product to delete
        var productId = this.props.productId;

        // submit form data to api
        $.ajax({
            url: "http://localhost/react/api/product/delete.php",
            type : "POST",
            contentType : 'application/json',
            data : JSON.stringify({'id' : productId}),
            success : function(response) {
                this.props.changeAppMode('read');
            }.bind(this),
            error: function(xhr, resp, text){
                // show error in console
                console.log(xhr, resp, text);
            }
        });
    }

    // render will be here
    render(){
        return (
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <div className='panel panel-default'>
                        <div className='panel-body text-align-center'>Are you sure?</div>
                        <div className='panel-footer clearfix'>
                            <div className='text-align-center'>
                                <button onClick={this.onDelete}
                                    className='btn btn-danger m-r-1em'> <i className="fa fa-check-circle"></i> Yes</button>
                                <button onClick={() => this.props.changeAppMode('read')}
                                    className='btn btn-primary'> <i className="fa fa-times-circle"></i> No</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'></div>
            </div>
        );
    }
};

export default DeleteProductComponent;