import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ users }) => {
    return (
        <React.Fragment>
            <div className="navbar">Name</div>
            <i className="fa fa-circle"></i>
        </React.Fragment>
    )
}

Navbar.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default Navbar;