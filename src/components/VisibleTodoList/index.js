import { connect } from 'react-redux';
import TodoList from './../TodoList/TodoList';
import { toggleTodo, removeTodo } from './../../redux/actionCreators';
import { VisibilityFilters } from './../../redux/actionTypes';

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters
const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL: return todos;
    case SHOW_COMPLETED: return todos.filter((todo) => todo.completed);
    case SHOW_ACTIVE: return todos.filter((todo) => !todo.completed);
    default: return todos;
  }
}

const mapStateToProps = (state) => ({
  todos: getFilteredTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  },
  onRemove: (id) => {
    dispatch(removeTodo(id))
  }
})

const VisibilityTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibilityTodoList;

