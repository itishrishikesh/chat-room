import React from 'react'
import PropTypes from 'prop-types';

import "../css/message.css";

const Message = ({message, author}) => {
    return (
        <div className = "message-container">
            <i style={{ textAlign : author === "Me" ? "right" : "left" }}>{author}</i>
            <div className={ author !== "Me" ? "message" : "me"}>
                {message}
            </div>
        </div>
    );
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Message;