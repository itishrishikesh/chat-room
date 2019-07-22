import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Modal from "react-modal";

const Navbar = (props) => {
    const toggleModal = () => props.dispatch(props.modal.show);

    const modalStyle = {
        content : {
            width : "200px",
            height: "max-content", 
            margin : "auto", 
            border: "1px solid #000", 
            borderRadius: "0",
            fontSize: "15px",
            padding: "10px 20px",
            margin: "8% auto"
        }
    }

    return (
        <div>
            <nav className="navbar">
                <div>Random Chat Application</div>
                <i className="fa fa-circle" onClick={toggleModal} ></i>
            </nav>
            <Modal isOpen={props.modal.show} onRequestClose={toggleModal} style={modalStyle}>
                <div style={{
                    color: "green",
                    marginBottom: "10px",
                    fontWeight: "600"
                }}>Online Users</div>
                {
                    props.users === null ? null : props.users.map(user => {
                        return <div key = {user.id}>{user.name}</div>;
                    })
                }

            </Modal>
        </div>
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