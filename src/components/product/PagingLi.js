import React from 'react';

// component that renders a single product
class PagingLi extends React.Component {
    render() {
        if (this.props.page.current_page == 'yes') {
            return(
                    <li className="page-item active">
                        <button className="page-link">{this.props.page.page} <span className="sr-only">(current)</span></button>
                    </li>
            );
        } else {
            return(
                <li className="page-item"><button className="page-link" onClick={()=>this.props.gotoPage(this.props.page.url,this.props.pageno+1)}>{this.props.page.page}</button></li>
            );
        }
    }
};

export default PagingLi;