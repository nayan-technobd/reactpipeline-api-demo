import React from 'react';
import Datasource from "./Datasource";

const Resources = () => {
    document.title = "Resources";
    return(
        <div>
            <div className="page-header">
                <h1>Loading...</h1>
            </div>
    
            <div id='content'>
            <Datasource />
            </div>
 
        </div>
    );
};

export default Resources;