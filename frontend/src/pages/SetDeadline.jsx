import React, { useState } from 'react';
import './Deadline.scss';

const Deadline = () => {
  const [deadlines, setDeadlines] = useState([
    { title: 'Project Proposal', dueDate: '2024-05-31', team: 'Team A', description: 'Submit project proposal document.' },
    { title: 'Design Phase', dueDate: '2024-06-15', team: 'Team B', description: 'Complete design phase with prototypes.' },
    { title: 'Development Phase', dueDate: '2024-08-01', team: 'Team C', description: 'Finish initial development and unit testing.' },
    { title: 'Testing Phase', dueDate: '2024-09-10', team: 'Team D', description: 'Conduct system and integration testing.' },
    { title: 'Deployment', dueDate: '2024-10-05', team: 'Team E', description: 'Deploy the project to production.' }
  ]);

  const handleCreate = (e) => {
    e.preventDefault();
    const newDeadline = {
      title: e.target.title.value,
      dueDate: e.target.dueDate.value,
      team: e.target.team.value,
      description: e.target.description.value
    };
    setDeadlines([...deadlines, newDeadline]);
    e.target.reset();
  };

  const handleDelete = (index) => {
    const newDeadlines = deadlines.filter((_, i) => i !== index);
    setDeadlines(newDeadlines);
  };

  return (
    <div className="deadline-page">
      <header>
        <h1>Project Deadlines & Reminders</h1>
      </header>
      <main>
        <section className="deadlines">
          <h2>Upcoming Deadlines</h2>
          <ul>
            {deadlines.map((deadline, index) => (
              <li key={index}>
                <div className="deadline">
                  <div className="deadline-header">
                    <h3>{deadline.title}</h3>
                    <p>Due Date: {new Date(deadline.dueDate).toLocaleDateString()}</p>
                    <p>Team: {deadline.team}</p>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                  <div className="deadline-details">
                    <p>{deadline.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <form onSubmit={handleCreate}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />
            <label htmlFor="dueDate">Due Date:</label>
            <input type="date" id="dueDate" name="dueDate" required />
            <label htmlFor="team">Team:</label>
            <input type="text" id="team" name="team" required />
            <label htmlFor="description">Description:</label>
            <textarea id="description" name="description" required></textarea>
            <button type="submit">Create Deadline</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Deadline;
