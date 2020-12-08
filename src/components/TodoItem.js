import React from "react";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };

  return (
    <div className="list-item">
      <input
        type="checkbox"
        checked={ props.item.completed }
        onChange={ () => console.log("Changed") }
      />
      <p style={ props.item.completed ? completedStyle : null }>
        { props.item.text }
      </p>
    </div>
  );
}

export default TodoItem;