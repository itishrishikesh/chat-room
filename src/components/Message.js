import React from 'react'
import PropTypes from 'prop-types';
const Message = ({message, author}) => {
    return (
        <div>
            <p>
                <i>{author}</i>: {message}
            </p>
        </div>
    );
}

Message.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Message;