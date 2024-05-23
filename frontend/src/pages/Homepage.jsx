import React, { useEffect, useRef, useState } from 'react';
import './Home.scss';
import EmailIcon from '../images/em.svg';
import NotificationIcon from '../images/bell.svg';
import SearchIcon from '../images/fluent--search-32-filled.svg';
import user from '../images/john.jpg';
import CalendarIcon from '../images/calendar.svg';
import Chart from 'chart.js/auto';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Project1Icon from '../images/game-icons--coffee-cup.svg';
import Project2Icon from '../images/zondicons--shopping-cart.svg';
import Project3Icon from '../images/fluent-mdl2--task-manager-mirrored.svg';
import Project4Icon from '../images/streamline--computer-logo-twitter-media-twitter-social.svg';
import { Line } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';


const Home = ({ darkMode }) => {
    const lineBarChartRef = useRef(null);
    const doughnutChartRef = useRef(null);
    const [percentageCompleted, setPercentageCompleted] = useState(0);
    const [percentageInProgress, setPercentageInProgress] = useState(0);
    const [percentageDelayed, setPercentageDelayed] = useState(0);
    const [todos, setTodos] = useState([
        { text: 'Complete project report', completed: false },
        { text: 'Attend team meeting', completed: false },
        { text: 'Review code submissions', completed: false },
        { text: 'Create a project', completed: false },
        { text: 'Work on client project', completed: false },
        { text: 'Consult the UI/UX team', completed: false },
    ]);
    const [projectProgress, setProjectProgress] = useState([
        { name: 'DeluxJavaHouse', description: 'Responsive website', progress: 70 ,Icon: Project1Icon},
        { name: 'E-Commerce', description: 'Online store', progress: 50 ,Icon: Project2Icon},
        { name: 'Task Manager', description: 'Organize your tasks', progress: 75 ,Icon: Project3Icon},
        { name: 'Social Media App', description: 'Connect with friends', progress: 60 ,Icon: Project4Icon},
    ]);

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    useEffect(() => {
        // Simulate an API call to get project status
        setTimeout(() => {
            setPercentageCompleted(75);
            setPercentageInProgress(50);
            setPercentageDelayed(20);
        }, 500);

        if (lineBarChartRef.current) {
            lineBarChartRef.current.destroy();
        }
        if (doughnutChartRef.current) {
            doughnutChartRef.current.destroy();
        }

        const lineBarCtx = document.getElementById('lineBarChart');
        if (lineBarCtx) {
            const newLineBarChart = new Chart(lineBarCtx, {
                type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets: [{
                        type: 'line',
                        label: 'Task Completion Rate',
                        data: [25, 65, 35, 65, 85, 55, 45, 55, 75, 75, 95, 55], // Sample data
                        borderColor: darkMode ? 'rgba(0, 0, 139, 1)' : '#483D8B',
                        tension: 0.1,
                        borderWidth: 5,
                        fill: false,
                    },
                    {
                        label: 'Contribution to Projects',
                        data: [65, 59, 80, 51, 56, 45, 40, 55, 60, 75, 45, 50],
                        backgroundColor: darkMode ? 'rgba(72, 61, 139, 0.5)' : 'rgba(255, 99, 132, 0.5)',
                        borderColor: darkMode ? 'rgba(72, 61, 139, 1)' : 'rgba(255, 99, 132, 1)',
                        borderWidth: 1,
                    },
                    {
                        label: 'Contribution to Team-Projects',
                        data: [35, 45, 85, 70, 45, 40, 30, 50, 45, 40, 60, 35],
                        backgroundColor: darkMode ? '#C71585' : '#00CED1',
                        borderColor: darkMode ? '#C71585' : '#00CED1',
                        borderWidth: 1,
                    }]
                },
                options: {
                    animation: {
                        duration: 2000,
                        easing: 'easeInOutQuart'
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            beginAtZero: true,
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });

            lineBarChartRef.current = newLineBarChart;
        }

        const doughnutCtx = document.getElementById('doughnutChart');
        if (doughnutCtx) {
            const newDoughnutChart = new Chart(doughnutCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Contribution to Projects', 'Contribution to Team-Projects', 'Task Completion Rate'],
                    datasets: [{
                        data: [65, 59, 80], // Change this to reflect actual data
                        backgroundColor: [
                            darkMode ? 'rgba(72, 61, 139, 0.5)' : 'rgba(255, 99, 132, 0.5)',
                            darkMode ? '#C71585' : '#00CED1',
                            darkMode ? 'rgba(0, 0, 139, 1)' : '#23CE6B'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    cutout: '70%',
                    plugins: {
                        legend: {
                            position: 'top',
                        }
                    }
                }
            });

            doughnutChartRef.current = newDoughnutChart;
        }
    }, [darkMode, percentageCompleted, percentageInProgress, percentageDelayed]);

    const iconStyle = {
        filter: darkMode
            ? 'invert(35%) sepia(64%) saturate(5000%) hue-rotate(320deg) brightness(100%) contrast(100%)'
            : 'invert(15%) sepia(100%) saturate(5000%) hue-rotate(330deg) brightness(90%) contrast(85%)'
    };

    const headerTextStyle = {
        color: darkMode ? '#fff' : '#333'
    };

    const circularProgressStyle = (percentage) => buildStyles({
        pathColor: darkMode ? '#48c774' : '#8B008B',
        trailColor: darkMode ? '#aaa' : '#c0c0c0',
        textColor: darkMode ? '#fff' : '#c0c0c0'
    });

    const projectProgressStyle = (percentage) => ({
        width: `${percentage}%`,
        backgroundColor: darkMode ? '#48c774' : '#8B008B',
        transition: 'width 1s ease-in-out'
    });

    
    const waveChartData = {
        labels: ['Completed', 'In Progress', 'Delayed'],
        datasets: [
            {
                label: 'Project Status',
                data: [percentageCompleted, percentageInProgress, percentageDelayed],
                borderColor: darkMode ? '#48c774' : '#8B008B',
                backgroundColor: darkMode ? 'rgba(72, 199, 116, 0.2)' : 'rgba(139, 0, 139, 0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const waveChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const navigate = useNavigate();

    const handleCreateProject = () => {
        navigate('/project/new');
    }

    return (
        <div className={`home ${darkMode ? 'dark-mode' : ''}`}>
            <div className="header" style={headerTextStyle}>
                <div className="intro">
                    <h1>Dashboard</h1>
                </div>
                <div className="search">
                    <img src={SearchIcon} alt="Search" style={iconStyle} />
                    <input type="text" placeholder="Search here..." />
                </div>
                <div className="reach">
                    <div className="emails">
                        <img src={EmailIcon} alt="Email" style={iconStyle} />
                        <p>My Emails</p>
                    </div>
                    <div className="notifications">
                        <img src={NotificationIcon} alt="Notification" style={iconStyle} />
                        <p>Notifications</p>
                    </div>
                    <div className="calendar">
                        <img src={CalendarIcon} alt="Calendar" style={iconStyle} />
                        <p>Schedule</p>
                    </div>
                </div>
                <div className="user-logged-in">
                    <div className="profile-picture">
                        <img src={user} alt="User" />
                    </div>
                    <div className="user-info">
                        <div className="name">
                            <p>John Doe</p>
                        </div>
                        <div className="email">
                            <p>Johndoe@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="us">
                <div className="project-management">
                    <h2>Manage Your Project</h2>
                    <p>At ProjectProctor we manage your project automatically with our best AI systems</p>
                </div>
                <div className="project-creation">
                    <h2>Create a Project</h2>
                    <p>Start creating your project by clicking the button below</p>
                    <button onClick={handleCreateProject}>Create Project</button>
                </div>
            </div>
            <div className="manage">
                <div className="charts">
                    <div className="my-project-statistics">
                        <h2>My Project Statistics</h2>
                        <canvas id="lineBarChart"></canvas>
                    </div>
                    <div className="doughnut-chart-container">
                        <h2>Project Contribution Breakdown</h2>
                        <canvas id="doughnutChart"></canvas>
                    </div>
                </div>
                <div className="project-status">
                    <div className="proj-status">
                        <h2>Project Status</h2>
                    </div>
                    <div className="facts">
                    <div className="p-stats">
                        <div className="status">
                            <div className="stat">
                                <h3>Completed</h3>
                                <CircularProgressbar
                                    value={percentageCompleted}
                                    text={`${percentageCompleted}%`}
                                    styles={circularProgressStyle(percentageCompleted)}
                                    className="percentage-text"
                                />
                            </div>
                            <div className="stat">
                                <h3>On Progress</h3>
                                <CircularProgressbar
                                    value={percentageInProgress}
                                    text={`${percentageInProgress}%`}
                                    styles={circularProgressStyle(percentageInProgress)}
                                    className="percentage-text"
                                />
                            </div>
                            <div className="stat">
                                <h3>Delayed</h3>
                                <CircularProgressbar
                                    value={percentageDelayed}
                                    text={`${percentageDelayed}%`}
                                    styles={circularProgressStyle(percentageDelayed)}
                                    className="percentage-text"
                                />
                            </div>
                        </div>
                        <div className="wave-chart">
                    <Line data={waveChartData} options={waveChartOptions} />
                </div>
                </div>
                        <div className="to-do-list">
                            <h2>To-Do List</h2>
                            <ul>
                                {todos.map((todo, index) => (
                                    <li key={index} className={todo.completed ? 'completed' : ''}>
                                        <input
                                            type="checkbox"
                                            checked={todo.completed}
                                            onChange={() => toggleTodo(index)}
                                        />
                                        <span>{todo.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="important-projects">
            <div className="important-projects">
    <h2>Important Projects</h2>
    <div className="projects">
        {projectProgress.map((project, index) => (
            <div key={index} className={`project${index + 1}`}>

                <div className="project-icon">
                    <img src={project.Icon} alt="Project Icon" />
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${project.progress}%` }}></div>
                </div>
            </div>
        ))}
    </div>
</div>

            <div className="competence">
                <div className="total-income">
                    <h2>Total Income</h2>
                    <p>Amount</p>
                    <p className='para'>$7k</p>
                    <h4>This Month: 22% increase</h4>
                </div>
                <div className="total-expense">
                    <h2>Total Expense</h2>
                    <p>Amount</p>
                    <p className='para'>$3k</p>
                    <h4>This Month: 10% increase</h4>
                </div>
                <div className="total-meetings">
                    <h2>Total Meetings Attended</h2>
                    <p>Number</p>
                    <p className='para'>25</p>
                    <h4>This Month: 5% decrease</h4>
                </div>
                <div className="total-projects">
                    <h2>Total Projects</h2>
                    <p>Number</p>
                    <p className='para'>40</p>
                    <h4>This Month: 15% increase</h4>
                </div>
                <div className="total-clients">
                    <h2>Total Clients</h2>
                    <p>Number</p>
                    <p className='para'>15</p>
                    <h4>This Month: 10% decrease</h4>
                </div>
            </div>
            <div className="testimonials">
                <h2>What Clients Say</h2>
                <div className="test">
                <div className="testimonial">
                    <div className="testimonial-text">
                        <p>"ProjectProctor has been a great help in managing my projects. I can now focus on other things while my projects are being managed automatically."</p>
                    </div>
                    <div className="testimonial-user">
                        <div className="user-picture">
                            <img src={user} alt="User" />
                        </div>
                        <div className="user-info">
                            <p>John Doe</p>
                            <div className="rating">
                                <span>⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="testimonial-text">
                        <p>"I have been using ProjectProctor for a while now and I must say that it has been a great experience. It has helped me manage my projects efficiently."</p>
                    </div>
                    <div className="testimonial-user">
                        <div className="user-picture">
                            <img src={user} alt="User" />
                        </div>
                        <div className="user-info">
                            <p>Cole Daniels</p>
                            <div className="rating">
                                <span>⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="testimonial-text">
                        <p>"ProjectProctor is the best project management tool I have ever used. It has helped me manage my projects efficiently and has saved me a lot of time."</p>
                    </div>
                    <div className="testimonial-user">
                        <div className="user-picture">
                            <img src={user} alt="User" />
                        </div>
                        <div className="user-info">
                            <p>John Rick</p>
                            <div className="rating">
                                <span>⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Home;
