import { connect } from 'react-redux';
import NavbarComponent from '../components/Navbar';

import "../css/navbar.css";

const Navbar = connect(state => ({
    users: state.users
}), {})(NavbarComponent);

export default Navbar;
