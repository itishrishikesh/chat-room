import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

import "../css/messagelist.css";

const MessageList = ({ messages }) => {
    return (
        <div className="messagelist">
            <div>
                <div>
                    {messages.map(message => {
                        return <Message key = {message.id} {...message} />;
                    })}
                </div>
            </div>
        </div>
    )
}

MessageList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default MessageList;