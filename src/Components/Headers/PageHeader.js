import React from 'react';
import "./PageHeader.css"

function PageHeader(props) {
    return (
        <div className={"pageHeader"}>
            <h2>{props.name}</h2>
        </div>
    );
}

export default PageHeader;