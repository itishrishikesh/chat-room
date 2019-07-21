import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ users }) => {
    return (
        <div id="sidebar" className="sidebar">
            <div>
                {
                    users === null ? null : users.map(user => {
                        return <div key = {user.id}>{user.name}</div>;
                    })
                }
            </div>
        </div>
    )
}

Sidebar.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default Sidebar;