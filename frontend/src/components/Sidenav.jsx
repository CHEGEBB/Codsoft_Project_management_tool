// src/components/SideNav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidenav.scss';
import Home from '../images/home.svg';
import dropdownIcon from '../images/drop2.svg';
import DashboardIcon from '../images/ic--sharp-dashboard.svg';
import ProjectIcon from '../images/project.svg';
import TaskIcon from '../images/task.svg';
import ProgressIcon from '../images/progress.svg';
import TimelineIcon from '../images/timeline.svg';
import TeamIcon from '../images/team.svg';
import DarkModeToggle from '../components/DarkModeToggle';

const SideNav = ({ isDarkMode, toggleDarkMode }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownClick = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <nav className="side-nav">
        <div className="us-name">
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="title">
        <h1>ProjectProctor</h1>
        </div>
        <div className="para">
        <p>Project Management Tool</p>
        </div>
        </div>
        <div className="my-dashboard">
        <div className="dash">
        <img src={DashboardIcon} alt="Dashboard Icon" />
        </div>
        <div className="board">
        <h1>My Dashboard</h1>
        </div>
        </div>
            <ul>
                <li>
                    <Link to="/home">
                    <div className="navtem">
                    <div className="image">
                    <img src={Home} alt="Home Icon" />
                    </div>
                        <div className="item"> Dashboard</div>
                        </div>
                       
                    </Link>
                </li>
                <li>
                    <div onClick={() => handleDropdownClick('project')} className="dropdown-toggle">
                        <div className="navtem">
                            <div className="image">
                            <img src={ProjectIcon} alt="Project Icon" />
                            </div>
                            <div className="item">
                            Project
                            </div>
                        </div>
                     
                        <img src={dropdownIcon} alt="Dropdown Icon" className="dropdown-icon" />
                    </div>
                    {openDropdown === 'project' && (
                        <ul className="dropdown">
                        <div className="drop">
                            <li><Link to="/project/new">New Project</Link></li>
                            <li><Link to="/project/details">Details</Link></li>
                            </div>
                        </ul>
                    )}
                </li>
                <li>
                    <div onClick={() => handleDropdownClick('tasks')} className="dropdown-toggle">
                    <div className="navtem">
                        <div className="image">
                        <img src={TaskIcon} alt="Task Icon" /> 
                        </div>
                        <div className="item"> Tasks</div>
                    </div>
                       
                       
                        <img src={dropdownIcon} alt="Dropdown Icon" className="dropdown-icon" />
                    </div>
                    {openDropdown === 'tasks' && (
                        <ul className="dropdown">
                        <div className="drop">
                            <li><Link to="/tasks/assign">Assign Task</Link></li>
                            </div>
                        </ul>
                    )}
                </li>
                <li>
                    <div onClick={() => handleDropdownClick('progress')} className="dropdown-toggle">
                    <div className="navtem">
                    <div className="image">
                    <img src={ProgressIcon} alt="Progress Icon" />
                    </div>
                        <div className="item"> Progress</div>
                    </div>
                       
                        <img src={dropdownIcon} alt="Dropdown Icon" className="dropdown-icon" />
                    </div>
                    {openDropdown === 'progress' && (
                        <ul className="dropdown">
                        <div className="drop">
                            <li><Link to="/progress/track">Track Progress</Link></li>
                            </div>
                        </ul>
                    )}
                </li>
                <li>
                    <div onClick={() => handleDropdownClick('timeline')} className="dropdown-toggle">
                    <div className="navtem">
                        <div className="image">
                        <img src={TimelineIcon} alt="Timeline Icon" />
                        </div>
                        <div className="item">Timeline</div>
                    </div>
                  
                        <img src={dropdownIcon} alt="Dropdown Icon" className="dropdown-icon" />
                    </div>
                    {openDropdown === 'timeline' && (
                        <ul className="dropdown">
                        <div className="drop">
                            <li><Link to="/timeline/deadline">Deadlines</Link></li>
                            </div>
                        </ul>
                    )}
                </li>
                <li>
                    <Link to="/teams">
                        <img src={TeamIcon} alt="Team Icon" />
                        Teams
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideNav;
