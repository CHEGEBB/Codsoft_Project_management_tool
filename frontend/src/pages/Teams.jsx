import React from 'react';
import './Teams.scss';
import { useState } from 'react';
import SarahSmith from '../images/sarah.jpg';
import JohnDoe from '../images/john.jpg';
import EmilyJohnson from '../images/ash.jpg';
import MichaelBrown from '../images/mike.jpg';
import JessicaMiller from '../images/jessica.avif';
import DavidWilson from '../images/david.jpg';
import JenniferTaylor from '../images/jenni.jpg';
import ChristopherMartinez from '../images/martinez.jpg';
import EvaAdams from '../images/emily.jpg';

const TeamMember = ({ name, role, rating, description, address, phone, email }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
   
    const imageName = eval(name.replace(/\s+/g, ''));

    return (
        <div className="team-member">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="profile-picture">
                            <img src={imageName} alt={name} />
                        </div>
                        <div className="pers">
                        <div className="info-pers">
                        <h2>{name}</h2>
                        <p className="role">{role}</p>
                        </div>
                        <div className="rating">
                                <span>⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                                <span>⭐</span>
                                </div>
                                </div>
                    </div>
                    <div className="flip-card-back">
                        <div className="un">
                        <p className='unique'>{description}</p>
                        </div>
                        <div className="address">
                        <p>{address}</p>
                        </div>
                        <div className="contact-info">
                            <p>{phone}</p>
                            <p>{email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Teams = () => {
    const teamMembers = [
        { name: 'Sarah Smith', role: 'UI/UX Designer', rating: '4', description: 'Experienced designer with a focus on user interface and user experience design.', address: '123 Main St, Anytown, USA', phone: '123-456-7890', email: 'sarah@example.com' },
        { name: 'John Doe', role: 'Software Engineer', rating: '4', description: 'Skilled software engineer with expertise in web development and cloud computing.', address: '456 Elm St, Othertown, USA', phone: '987-654-3210', email: 'johnD@gmail.com' },
        { name: 'Emily Johnson', role: 'Project Manager', rating: '5', description: 'Seasoned project manager with a proven track record of delivering successful projects on time and within budget.', address: '789 Oak St, Anothertown, USA', phone: '555-123-4567', email: 'emily@example.com' },
        { name: 'Michael Brown', role: 'Marketing Specialist', rating: '5', description: 'Strategic marketing specialist with experience in digital marketing and branding.', address: '101 Pine St, Somewhere, USA', phone: '444-567-8901', email: 'michael@example.com' },
        { name: 'Jessica Miller', role: 'Data Scientist', rating: '4', description: 'Analytical data scientist with expertise in machine learning and data-driven decision-making.', address: '222 Maple St, Nowhere, USA', phone: '777-890-1234', email: 'jessica@example.com' },
        { name: 'David Wilson', role: 'Financial Analyst', rating: '4', description: 'Detail-oriented financial analyst with strong analytical skills and a background in finance.', address: '333 Birch St, Anywhere, USA', phone: '222-345-6789', email: 'david@example.com' },
        { name: 'Jennifer Taylor', role: 'Network Engineer', rating: '5', description: 'Skilled network engineer with experience in designing and implementing complex network infrastructures.', address: '444 Cedar St, Overthere, USA', phone: '111-222-3333', email: 'jennifer@example.com' },
        { name: 'Christopher Martinez', role: 'Business Analyst', rating: '4', description: 'Experienced business analyst with expertise in gathering and analyzing business requirements.', address: '555 Walnut St, Underwhere, USA', phone: '666-777-8888', email: 'christopher@example.com' },
        { name: 'Eva Adams', role: 'Graphic Designer', rating: '4', description: 'Creative graphic designer with a passion for visual storytelling and branding.', address: '777 Oak St, Newcity, USA', phone: '333-444-5555', email: 'eva@example.com' },
    ];

    return (
        <div className="teams-page">
            <h1>My Team</h1>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <TeamMember key={index} {...member} />
                ))}
            </div>
        </div>
    );
};

export default Teams;
