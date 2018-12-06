import React from 'react';

import ProductRow from "./ProductRow";
import PagingLi from "./PagingLi";

// component for the whole products table
class ProductsTable extends React.Component {
    
    render() {
    let first_page;
    let last_page;
    let lis;
    
    if(this.props.paging.first == '') {
        first_page = <li className="page-item disabled"><button className="page-link" tabIndex="-1">Previous</button></li>;
    } else {
        first_page = <li className="page-item"><button className="page-link" onClick={()=>this.props.gotoPage(this.props.paging.first,1)} tabIndex="-1">Previous</button></li>;
    }
    
    if (this.props.paging.last == '') {
        last_page = <li className="page-item disabled"><button className="page-link">Next</button></li>;
    } else {
        last_page = <li className="page-item"><button className="page-link" onClick={()=>this.props.gotoPage(this.props.paging.last,this.props.paging.pages.length)}>Next</button></li>;
    }
    
    var rows = this.props.products
        .map(function(product, i) {
            return (
                <ProductRow
                    key={i}
                    product={product}
                    changeAppMode={this.props.changeAppMode} />
            );
        }.bind(this));
    
    if(this.props.paging.pages && this.props.paging.pages.length > 0){
        lis = this.props.paging.pages
            .map(function(page, j) {
                return (
                    <PagingLi
                        key={j}
                        pageno={j}
                        page={page}
                        gotoPage={this.props.gotoPage}
                        />
                );
            }.bind(this));
    }
        
        
        
 
        return(
            !rows.length
                ? <div className='alert alert-danger'>No products found.</div>
                :
                <div>
                    <table className='table table-bordered table-hover'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th className="action_area">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                    <nav aria-label="...">
                        <ul className="pagination justify-content-center">
                          {first_page}
                          {lis}
                          {last_page}
                        </ul>
                    </nav>
                </div>
        );
    }
};

export default ProductsTable;