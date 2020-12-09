import React from 'react';

function AddItem(props) {
  return (
    <form className="add-form" onSubmit={props.handleSubmit}>
      <input
        type = "text"
        name = "inputText"
        placeholder = "Type note here"
        value = {props.text}
        onChange = { (event) => props.handleInputChange(event) }
      />
      <button>Add</button>
    </form>
  );
}

export default AddItem;
