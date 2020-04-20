import { connect } from 'react-redux';
import AddInput from './../AddInput/AddInput';
import { addTodo } from './../../redux/actionCreators';

const mapDispatchToProps = (dispatch) => ({
    addNewTodo: (text) => {
        dispatch(addTodo(text))
    }
});

const AddTodoContainer = connect(null, mapDispatchToProps)(AddInput);

export default AddTodoContainer;