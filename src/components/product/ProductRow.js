import React from 'react';

// component that renders a single product
class ProductRow extends React.Component {
    render() {
    return (
        <tr>
            <td>{this.props.product.name}</td>
            <td>{this.props.product.description}</td>
            <td>${parseFloat(this.props.product.price).toFixed(2)}</td>
            <td>{this.props.product.category_name}</td>
            <td>
                <button
                    onClick={() => this.props.changeAppMode('readOne', this.props.product.id)}
                    className='btn btn-xs btn-info m-r-1em'> <i className="fa fa-eye"></i>
                </button>
                <button
                    onClick={() => this.props.changeAppMode('update', this.props.product.id)}
                    className='btn btn-xs btn-primary m-r-1em'> <i className="fa fa-edit"></i>
                </button>
                <button
                    onClick={() => this.props.changeAppMode('delete', this.props.product.id)}
                    className='btn btn-xs btn-danger'> <i className="fa fa-trash"></i>
                </button>
            </td>
        </tr>
        );
    }
};

export default ProductRow;