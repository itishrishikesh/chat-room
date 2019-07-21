import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

const Navbar = ({ users }) => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <div>Random Chat Application</div>
                <i className="fa fa-circle"></i>
            </nav>
            <Sidebar users={null}></Sidebar>
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