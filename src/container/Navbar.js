import { connect } from 'react-redux';
import NavbarComponent from '../components/Navbar';
import { toggleModal } from "../action";

import "../css/navbar.css";

const mapDispatchTopProps = dispatch => ({
    dispatch: (toggle) => {
        dispatch(toggleModal(toggle));
    }
});


const Navbar = connect(state => ({
    users: state.users,
    modal: state.modal
}), mapDispatchTopProps)(NavbarComponent);

export default Navbar;
