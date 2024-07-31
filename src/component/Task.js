import React from 'react';
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { addTodo } from '../Redux/actions/index';


const Task = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
  
    function addNewTask() {
      const task = inputRef.current.value.trim();
      console.log(task,'task');
      if (task !== "") {
        dispatch(addTodo(task));
        inputRef.current.value = "";
      }
    }
  
    return (
      <div className="task-component">
        <div className="add-task">
          <input
            type="text"
            placeholder="Add task here..."
            ref={inputRef}
            className="form-control taskInput"
          />
          <button className="btn btn-primary" onClick={addNewTask}>Add task</button>
        </div>
      </div>
    );
  };
  
  export default Task;