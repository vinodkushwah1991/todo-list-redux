import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, ToggleTodo, editTodo } from '../Redux/actions/index';

const TaskList = () => {
  const { tasks } = useSelector((state) => state.todo);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState('');
  const [selectedTasks, setSelectedTasks] = useState([]);
  console.log(selectedTasks,'selectedTasks');
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleToggle = (id) => {
    dispatch(ToggleTodo(id));
  };
 console.log(tasks, 'taskstasks')
//  console.log(Array.isArray(tasks));
const handleEdit = (id, text) => {
  setEditingTaskId(id);
  setEditingTaskText(text);
};

const handleEditChange = (e) => {
  setEditingTaskText(e.target.value);
};

const handleEditSubmit = (id) => {
  dispatch(editTodo({
    id,
    text: editingTaskText
  }));
  setEditingTaskId(null);
  setEditingTaskText('');
};
const handleCheckboxChange = (id) => {
  setSelectedTasks(prev =>
    prev.includes(id) ? prev.filter(taskId => taskId !== id) : [...prev, id]
  );
};
const handleSelectAll = (e) => {
  if (e.target.checked) {
    const allTaskIds = tasks.map(task => task.id);
    setSelectedTasks(allTaskIds);
  } else {
    setSelectedTasks([]);
  }
};
const handleDeleteSelected = () => {
  selectedTasks.forEach(taskId => dispatch(deleteTodo(taskId)));
  setSelectedTasks([]);
};
  return (
    <div className="tasklist">
      <div className="container">
        <h3>Your tasks:</h3>
        <button className="btn btn-secondary" onClick={handleDeleteSelected} disabled={selectedTasks.length === 0}>Delete Selected</button>
        <table class="table" >
          <thead>
            <tr>
            <th>
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={tasks.length > 0 && selectedTasks.length === tasks.length}
                />
              </th>
              <th>Task</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(tasks) && tasks.length > 0 ? tasks.map((task) => (
              <tr key={task.id} style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "red" : "black",
              }}>
                 <td>
                  <input
                    type="checkbox"
                    checked={selectedTasks.includes(task.id)}
                    onChange={() => handleCheckboxChange(task.id)}
                  />
                </td>
                <td>
                  {editingTaskId === task.id ? (
                    <input
                      type="text"
                      value={editingTaskText}
                      onChange={handleEditChange}
                    />
                  ) : (
                    task.text
                  )}
                </td>
                <td>
                  {editingTaskId === task.id ? (
                    <button
                      className="save-btn btn btn-primary"
                      onClick={() => handleEditSubmit(task.id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="edit-btn btn btn-primary"
                      onClick={() => handleEdit(task.id, task.text)}
                    >
                      Edit
                    </button>
                  )}
                  <button className="delete-btn btn btn-primary" onClick={() => handleDelete(task.id)}>
                    Delete
                  </button>
                  <button className="toggle-btn btn btn-primary" onClick={() => handleToggle(task.id)}>
                    Mark as completed
                  </button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="2">No tasks available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;