import { connect } from 'react-redux';
import AddMessageComponent from '../components/AddMessage';
import { addMessage } from '../action';

const mapDispatchTopProps = dispatch => ({
    dispatch: (message, author) => {
        dispatch(addMessage(message, author));
    }
});

const AddMessage = connect(() => ({}), mapDispatchTopProps)(AddMessageComponent);

export default AddMessage;