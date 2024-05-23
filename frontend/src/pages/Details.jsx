import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Bar, Doughnut } from 'react-chartjs-2';
import './ProjectDetails.scss';

const ProjectDetails = () => {
  const project = {
    id: 258,
    title: 'Android Application',
    clientName: 'Cara Stevens',
    startDate: '2021-05-10',
    endDate: '2021-07-25',
    deadline: '2021-08-25',
    members: 'useruseruser',
    priority: 'High',
    progress: 60,
    status: 'Active',
    createdBy: 'Alex Smith',
    client: 'ZMK Tech LLP.',
    version: 'v1.2.0',
    lastUpdated: '2022-08-16 12:15:57',
    created: '2022-07-10 23:36:57',
    completed: 'Project completed in 60%. Remaining close the project, sign a contract and invoice.',
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    tags: 'Photoshop HTML, SCSS Laravel 7.0.0 ReactJs',
    files: [
      { name: 'Design file.pdf', size: '2.7 mb' },
      { name: 'Design file.psd', size: '22.5 mb' },
      { name: 'Project detail.doc', size: '2.8 mb' }
    ]
  };

  const barData = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        label: 'Project Progress',
        data: [project.progress, 100 - project.progress],
        backgroundColor: ['#36A2EB', '#FF6384']
      }
    ]
  };

  const doughnutData = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  return (
    <div className="project-details-page">
      <h1 className="page-title">Project Details: {project.title}</h1>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Details</Tab>
          <Tab>Files</Tab>
          <Tab>Charts</Tab>
        </TabList>

        <TabPanel>
          <div className="form-section">
            <h2>Project Overview</h2>
            <div className="form-group">
              <label>ID:</label>
              <input type="text" value={project.id} readOnly />
            </div>
            <div className="form-group">
              <label>Client Name:</label>
              <input type="text" value={project.clientName} readOnly />
            </div>
            <div className="form-group">
              <label>Start Date:</label>
              <input type="date" value={project.startDate} readOnly />
            </div>
            <div className="form-group">
              <label>End Date:</label>
              <input type="date" value={project.endDate} readOnly />
            </div>
            <div className="form-group">
              <label>Deadline:</label>
              <input type="date" value={project.deadline} readOnly />
            </div>
            <div className="form-group">
              <label>Members:</label>
              <input type="text" value={project.members} readOnly />
            </div>
            <div className="form-group">
              <label>Priority:</label>
              <select value={project.priority} disabled>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div className="form-group">
              <label>Progress:</label>
              <input type="text" value={`${project.progress}%`} readOnly />
            </div>
            <div className="form-group">
              <label>Status:</label>
              <input type="text" value={project.status} readOnly />
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="form-section">
            <h2>Additional Details</h2>
            <div className="form-group">
              <label>Created by:</label>
              <input type="text" value={project.createdBy} readOnly />
            </div>
            <div className="form-group">
              <label>Client:</label>
              <input type="text" value={project.client} readOnly />
            </div>
            <div className="form-group">
              <label>Version:</label>
              <input type="text" value={project.version} readOnly />
            </div>
            <div className="form-group">
              <label>Last Updated:</label>
              <input type="text" value={project.lastUpdated} readOnly />
            </div>
            <div className="form-group">
              <label>Created:</label>
              <input type="text" value={project.created} readOnly />
            </div>
            <div className="form-group">
              <label>Completed:</label>
              <textarea value={project.completed} readOnly />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea value={project.description} readOnly />
            </div>
            <div className="form-group">
              <label>Tags:</label>
              <input type="text" value={project.tags} readOnly />
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="form-section">
            <h2>Project Files</h2>
            {project.files.map((file, index) => (
              <div key={index} className="file-item">
                <span>{file.name}</span> <span>({file.size})</span>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="form-section">
            <h2>Charts</h2>
            <div className="chart-container">
              <h3>Project Progress</h3>
              <Bar data={barData} options={{ maintainAspectRatio: false }} />
            </div>
            <div className="chart-container">
              <h3>Priority Distribution</h3>
              <Doughnut data={doughnutData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ProjectDetails;
