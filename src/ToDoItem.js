import React, {Component} from "react";

const ToDoItem = ({name, completed, onDelete, onToggle}) => {
    return(
    <li>
    
    <span className="task" style={{textDecoration: completed ? 'line-through' : 'none'}} onClick={onToggle}>
        {name}
    </span>
    
    <span className="cross" onClick={onDelete}>
        &times;
    </span>
    
    </li>
    );
};

export default ToDoItem;