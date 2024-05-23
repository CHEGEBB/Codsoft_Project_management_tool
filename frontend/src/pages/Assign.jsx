import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for HTTP requests
import './Tasks.scss';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: "TASK-01",
      projectName: "ProjectProctor",
      client: "John Doe",
      status: "Completed",
      type: "Design",
      priority: "High",
      assignedTo: "John Doe",
      dueDate: "12/12/2021"
    },
    {
      id: "TASK-02",
      projectName: "SmartLife Web App",
      client: "Phil Daniels",
      status: "In progress",
      type: "Design",
      priority: "High",
      assignedTo: "Cara Eve",
      dueDate: "12/12/2021"
    },
    {
      id: "TASK-03",
      projectName: "Health Tracker",
      client: "Alice Smith",
      status: "Pending",
      type: "Development",
      priority: "Medium",
      assignedTo: "Bob Brown",
      dueDate: "14/12/2021"
    },
    {
      id: "TASK-04",
      projectName: "CityScape Ecommerce",
      client: "Jane Steward",
      status: "In progress",
      type: "Development",
      priority: "High",
      assignedTo: "John Doe",
      dueDate: "05/06/2024"
    },
    {
      id: "TASK-05",
      projectName: "Responsive Website",
      client: "John Hemsworth",
      status: "Completed",
      type: "Web Development",
      priority: "High",
      assignedTo: "John Doe",
      dueDate: "23/02/2024"
    }
  ]);

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleEdit = (id, field, value) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, [field]: value };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

    const handleCreateTask = () => {
      const newTask = {
        id: `TASK-${tasks.length + 1}`, // Generate a unique ID for the new task
        projectName: "",
        client: "",
        status: "",
        type: "",
        priority: "",
        assignedTo: "",
        dueDate: ""
      };
      setTasks([...tasks, newTask]);
    };
    
    const handleSaveTask = async () => {
      try {
        // Access the last task directly from the state
        const newTask = tasks[tasks.length - 1];
    
        // Send a POST request to save the new task to the database
        await axios.post('http://localhost:5000/api/tasks', newTask); // Assuming the backend route is '/api/tasks'
        alert('Task saved successfully!');
      } catch (error) {
        console.error('Error saving task:', error);
        alert('Failed to save task. Please try again later.');
      }
    };

  return (
    <div className="tasks">
      <div className="task-bar">
        <div className="task-bar__title">
          <h1>My Tasks</h1>
        </div>
        <div className="create-task-button">
          <button onClick={handleCreateTask}>Create Task</button>
          <button onClick={handleSaveTask}>Save Task</button>
        </div>
        
        <div className="task-bar__search">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="task-table">
        <table className="table">
          <thead>
            <tr>
              <th>Task No</th>
              <th>Project Name</th>
              <th>Client</th>
              <th>Status</th>
              <th>Type</th>
              <th>Priority</th>
              <th>Assigned To</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td className="data-number">
                <input
                    type="string"
                    value={task.id}
                    onChange={(e) => handleEdit(task.id, "id", e.target.value)}
                />
                </td>
                <td>
                <td className="data-name">
                  <input
                    type="text"
                    value={task.projectName}
                    onChange={(e) => handleEdit(task.id, "projectName", e.target.value)}
                  />
                  </td>
                </td>
                <td className="data-client">
                  <input
                    type="text"
                    value={task.client}
                    onChange={(e) => handleEdit(task.id, "client", e.target.value)}
                  />
                </td>
                <td className="data-status">
                  <input
                    type="text"
                    value={task.status}
                    onChange={(e) => handleEdit(task.id, "status", e.target.value)}
                  />
                </td>
                <td className="data-type">
                  <input
                    type="text"
                    value={task.type}
                    onChange={(e) => handleEdit(task.id, "type", e.target.value)}
                  />
                </td>
                <td className="data-priority">
                  <input
                    type="text"
                    value={task.priority}
                    onChange={(e) => handleEdit(task.id, "priority", e.target.value)}
                  />
                </td>
                <td className="data-assigned">
                  <input
                    type="text"
                    value={task.assignedTo}
                    onChange={(e) => handleEdit(task.id, "assignedTo", e.target.value)}
                  />
                </td>
                <td className="data-date">
                  <input
                    type="text"
                    value={task.dueDate}
                    onChange={(e) => handleEdit(task.id, "dueDate", e.target.value)}
                  />
                </td>
                <td>
                  <button className="btn" onClick={() => handleDelete(task.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;
