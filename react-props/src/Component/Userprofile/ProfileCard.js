import React from 'react';
import Profile from './Profile';
import p1 from '../../assets/p1.jpg';
import p2 from '../../assets/p2.jpg';
import p3 from '../../assets/p3.jpg';
import p4 from '../../assets/p4.jpg';
import p5 from '../../assets/p5.jpg';
import p6 from '../../assets/p6.jpg';

const ProfileCard = () => {
    return (
        <div className='ProfileCardContainer'>
             <h1>Team Members</h1>
           <div className='card'>
             <div className='c1'>
                <Profile image={p1} name="Semi" role="Software Developer" />
                <Profile image={p2} name="Oreo" role="UI/UX Designer" />
                <Profile image={p3} name="Alex" role="DevOps Engineer" />
            </div>
            <div className='c1'>
                <Profile image={p4} name="George" role="Software Developer" />
                <Profile image={p5} name="Camil" role="Fullstack Developer" />
                <Profile image={p6} name="Stemi" role="Software Developer" />
            </div>

            <div className='c1'>
                <Profile image={p2} name="Liam" role="Software Developer" />
                <Profile image={p3} name="Sophia" role="UI/UX Designer" />
                <Profile image={p1} name="Ethan" role="DevOps Engineer" />
            </div>
           </div>
        </div>
    );
};

export default ProfileCard;
