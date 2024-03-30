import React from 'react';
import './TasksGroup.css';

function TasksGroup({ tasks }) {
  return (
    <ul className='list-group'>
      {tasks.map((task) => (
        <li key={task.id} className={`list-group-item ${task.completed ? 'completed' : ''}`}>{task.text}</li>
      ))}
    </ul>
  )
}

TasksGroup.defaultProps = {
  tasks: []
}

export default TasksGroup;