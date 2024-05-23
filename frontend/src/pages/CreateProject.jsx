import React, { useState } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import './CreateProject.scss';
import axios from 'axios';


const CreateProject = () => {
    const [projectDetails, setProjectDetails] = useState({
        projectName: '',
        projectDescription: '',
        projectCategory: '',
        projectPhases: [],
        projectManager: '',
        projectStartDate: '',
        projectEndDate: '',
        notificationSent: 'All',
        taskAssignPerson: '',
        budget: '',
        priority: 'Medium'
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            const selectedPhases = [...projectDetails.projectPhases];
            if (checked) {
                selectedPhases.push(value);
            } else {
                const index = selectedPhases.indexOf(value);
                if (index !== -1) {
                    selectedPhases.splice(index, 1);
                }
            }
            setProjectDetails(prevState => ({
                ...prevState,
                projectPhases: selectedPhases
            }));
        } else {
            setProjectDetails(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleFileInputChange = (e) => {
        const files = e.target.files;
        setProjectDetails(prevState => ({
            ...prevState,
            projectImages: files
        }));
    };

    const [teamMembers, setTeamMembers] = useState([
        { name: 'Alice', role: 'Developer', responsibility: 'Frontend Development', expertise: 'React, JavaScript', image: 'alice.jpg' },
        { name: 'Bob', role: 'Designer', responsibility: 'UI/UX Design', expertise: 'Adobe XD, Sketch', image: 'bob.jpg' },
        { name: 'Charlie', role: 'Project Manager', responsibility: 'Project Planning', expertise: 'Agile, Scrum', image: 'charlie.jpg' },
        { name: 'Dave', role: 'Tester', responsibility: 'Quality Assurance', expertise: 'Selenium, Jira', image: 'dave.jpg' },
        { name: 'Eve', role: 'DevOps', responsibility: 'Deployment & Automation', expertise: 'Docker, Jenkins', image: 'eve.jpg' },
        { name: 'Frank', role: 'Data Scientist', responsibility: 'Data Analysis', expertise: 'Python, TensorFlow', image: 'frank.jpg' }
    ]);

    const doughnutData = {
        labels: ['Planning', 'Execution', 'Monitoring', 'Closing'],
        datasets: [
            {
                label: 'Project Progress',
                data: [70, 50, 90, 80],
                backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545'],
                hoverBackgroundColor: ['#0056b3', '#1e7e34', '#d39e00', '#bd2130'],
            },
        ],
    };

    const barData = {
        labels: ['Project A', 'Project B', 'Project C', 'Project D', 'Project E'],
        datasets: [
            {
                label: 'Client Satisfaction',
                data: [90, 85, 95, 80, 88],
                backgroundColor: '#007bff',
                hoverBackgroundColor: '#0056b3',
            },
        ],
    };

    const projectVariants = {
        initial: { x: '-100%' },
        animate: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 120,
                duration: 1
            }
        }
    };

    const waveGraphData = {
        labels: ['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5'],
        datasets: [
            {
                label: 'Clients Served',
                data: [80, 85, 70, 90, 75],
                backgroundColor: '#007bff',
                hoverBackgroundColor: '#0056b3',
            },
        ],
    };

    const addMember = () => {
        // Add new member to teamMembers array
        const newMember = { name: '', role: '', responsibility: '', expertise: '', image: '' };
        setTeamMembers([...teamMembers, newMember]);
    };

    const removeMember = (index) => {
        // Remove member from teamMembers array
        const updatedMembers = [...teamMembers];
        updatedMembers.splice(index, 1);
        setTeamMembers(updatedMembers);
    };

    const updateMember = (index, field, value) => {
        // Update member field in teamMembers array
        const updatedMembers = [...teamMembers];
        updatedMembers[index][field] = value;
        setTeamMembers(updatedMembers);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                projectName: projectDetails.projectName,
                projectDescription: projectDetails.projectDescription,
                projectCategory: projectDetails.projectCategory,
                projectStartDate: projectDetails.projectStartDate,
                projectEndDate: projectDetails.projectEndDate,
                notificationSent: projectDetails.notificationSent,
                taskAssignPerson: projectDetails.taskAssignPerson,
                budget: projectDetails.budget,
                priority: projectDetails.priority
            };
    
            // Note: The URL now uses the proxy '/api/projects'
            const response = await axios.post('http://localhost:5000/api/projects ', formData);
            console.log(response.data); // Log the created project data
    
            // Optionally, you can redirect the user or show a success message here
        } catch (error) {
            console.error('Error creating project:', error);
            // Handle error: show error message to the user
        }
    };
    

    return (
        <div className="project-create">
        <div className="project-us">
        <div className="man">
            <h1>Project Management</h1>
            <p><span className='us-name'>ProjectProctor</span>  is a project management tool that helps you organize your work and keep track of your projects.
            </p>
            </div>
            <div className="us">
            <div className="we">
            <h1>We are best know for</h1>
            </div>
                
                <div className="ads">
                <div className="easy-management-card1">
                    <h3>Easy Management</h3>
                    <p>Manage your projects with ease and keep track of your progress.</p> 
                </div>
                <div className="Robust-Ai-intervention-card2">
                    <h3>Robust AI Intervention</h3>
                    <p>Our AI system helps you manage your projects efficiently and effectively.</p>
                </div>
                <div className="team-management-card3">
                    <h3>Team Management</h3>
                    <p>Manage your team and assign tasks to your team members.</p>
                </div>

                    <div className="organizational-focus-card4">
                    <h3>Organizational Focus</h3>
                    <p>Our tool helps you focus on your organizational goals and objectives.</p>
                    </div>
                    </div>
            </div>
        </div>
        <div className="project-showcase">
                <h2>Best Team Projects Showcase</h2>
                <motion.div
                    className="project-cards"
                    variants={projectVariants}
                    initial="initial"
                    animate="animate"
                >
                <div className="row1">
                    <motion.div className="card1"><p>Creative Cafe Responsive website</p></motion.div>
                    <motion.div className="card2"><p>E-commerce Website</p></motion.div>
                    <motion.div className="card3"><p>Online Learning Platform</p></motion.div>
                   
                    </div>
                    <div className="row2">
                    <motion.div className="card4"><p>Online Learning Platform</p></motion.div>
                    <motion.div className="card5"><p>Task Automation Bots</p></motion.div>
                    <motion.div className="card6"><p>Healthcare Management System</p></motion.div>
                    </div>

                  
                </motion.div>
            </div>
            <h1>Create Project</h1>
            <form className="create-project-form"  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="projectName" style={{marginTop:40}}>Project Name</label>
                    <input type="text" id="projectName" name="projectName" value={projectDetails.projectName} onChange={handleInputChange} required className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="projectDescription">Explain what the Project Entails</label>
                    <textarea id="projectDescription" name="projectDescription" value={projectDetails.projectDescription} onChange={handleInputChange} required className="form-control"></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="projectCategory">Project Category</label>
                    <select id="projectCategory" name="projectCategory" value={projectDetails.projectCategory} onChange={handleInputChange} className="form-control">
                        <option value="">Select Category</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Web Development">Web Development</option>
                        <option value="SEO">SEO</option>
                        <option value="Content Writing">Content Writing</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="App Development">App Development</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Game Development">Game Development</option>
                        <option value="Graphic Design">Graphic Design</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="projectImages">Project Images & Document</label>
                    <input type="file" id="projectImages" name="projectImages" onChange={handleFileInputChange} multiple className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="projectStartDate">Project Start Date</label>
                    <input type="date" id="projectStartDate" name="projectStartDate" value={projectDetails.projectStartDate} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="projectEndDate">Project End Date</label>
                    <input type="date" id="projectEndDate" name="projectEndDate" value={projectDetails.projectEndDate} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="notificationSent">Notification Sent</label>
                    <select id="notificationSent" name="notificationSent" value={projectDetails.notificationSent} onChange={handleInputChange} className="form-control">
                        <option value="All">All</option>
                        <option value="Some">Some</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="taskAssignPerson">Task Assign Person</label>
                    <input type="text" id="taskAssignPerson" name="taskAssignPerson" value={projectDetails.taskAssignPerson} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="budget">Budget</label>
                    <input type="text" id="budget" name="budget" value={projectDetails.budget} onChange={handleInputChange} className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="priority">Priority</label>
                    <select id="priority" name="priority" value={projectDetails.priority} onChange={handleInputChange} className="form-control">
                        <option value="Highest">Highest</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Create Project</button>
            </form>

            <div className="team-members-create">
                <h2>Team Members</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Responsibility</th>
                            <th>Expertise</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teamMembers.map((member, index) => (
                            <tr key={index}>
                                <td>
                                    <input
                                        type="text"
                                        value={member.name}
                                        onChange={(e) => updateMember(index, 'name', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={member.role}
                                        onChange={(e) => updateMember(index, 'role', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={member.responsibility}
                                        onChange={(e) => updateMember(index, 'responsibility', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={member.expertise}
                                        onChange={(e) => updateMember(index, 'expertise', e.target.value)}
                                    />
                                </td>
                                <td>
                                    <button onClick={() => removeMember(index)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={addMember}>Add Member</button>
            </div>



            <div className="statistics">
                <h2>Project Statistics</h2>
                <div className="chart-container">
                    <Doughnut data={doughnutData} options={{ maintainAspectRatio: false }} />
                </div>
            </div>

            <div className="project-analytics">
                <h2>Project Analytics</h2>
                <div className="chart-container">
                    <h3>Best Projects of All Time</h3>
                    <Bar data={barData} />
                </div>
                    </div>
        </div>
    );
};

export default CreateProject;
