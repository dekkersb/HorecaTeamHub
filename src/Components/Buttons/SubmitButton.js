import React from 'react';
import "./SubmitButton.css";

function SubmitButton(props) {
    return (
        <div>
            <button className="submitButton"
            >{props.type}</button>
        </div>
    );
}

export default SubmitButton;