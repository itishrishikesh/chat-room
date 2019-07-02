import { connect } from 'react-redux';
import MessageListComponent from '../components/MessageList';

const MessageList = connect(state => ({
    messages: state.messages
}), {})(MessageListComponent);

export default MessageList;