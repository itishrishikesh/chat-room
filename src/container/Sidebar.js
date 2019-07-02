import { connect } from 'react-redux';
import SidebarComponent from '../components/Sidebar';

const Sidebar = connect(state => ({
    users: state.users
}), {})(SidebarComponent);

export default Sidebar;
