import React from 'react';

const AddInput = (props) => {
  return(
    <input 
      placeholder="What needs to be done?"
      value={props.value}
      onChange={props.handleChange}
    />
  );
}

export default AddInput;
