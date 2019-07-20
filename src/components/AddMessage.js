import React from 'react';
import PropTypes from 'prop-types';
import "../css/addmessage.css";
const AddMessage = (props) => {
    let input;

    return (
        <div className = "addmessage">
            <input onKeyPress = {(e) => {
                if (e.key === 'Enter') {
                props.dispatch(input.value, 'Me');
                input.value = ''
                }
            }} 
            type = "text"
            ref={(node) => {
                input = node
            }}
            ></input>
            <i className="fa fa-paper-plane"></i>
        </div>
    );
}

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default AddMessage;