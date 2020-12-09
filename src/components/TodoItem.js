import React from 'react';

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };

  return (
    <div className="list-item">
      <label style={ props.item.completed ? completedStyle : null }>
        <input
          type="checkbox"
          className="list-box"
          checked={ props.item.completed }
          onChange={ () => props.handleChange(props.item.id) }
        />
        { props.item.text }
      </label>
      <button
        className="delete"
        onClick={ () => props.handleRemove(props.item.id) }
      >&times;</button>
    </div>
  );
}

export default TodoItem;
