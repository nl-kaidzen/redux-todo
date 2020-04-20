import React, { useState } from 'react';
import PropTypes from 'prop-types'

const AddInput = ({ addNewTodo }) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    const { value } = event.target;
    setValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === '') {
      return;
    }
    addNewTodo(value);
    setValue('');
  };

  return(
    <form onSubmit={onSubmit}>
      <input 
        placeholder="What needs to be done?"
        value={value}
        onChange={onChange}
        className="todo-input"
      />  
    </form>
    
  );
}

AddInput.propTypes = {
  addNewTodo: PropTypes.func.isRequired
}

export default AddInput;
