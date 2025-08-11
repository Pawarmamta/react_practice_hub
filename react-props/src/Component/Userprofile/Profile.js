import React from 'react'
import './Profile.css';



const Profile = (props) => {
  return (
    <div className='profile'>
        
        <div className= 'profile-card'>
         
        <img src = {props.image}
        alt='picture'/>
        <h1>{props.name}</h1>
        <p> {props.role}</p>
           
        </div>


    </div>
  )
}

export default Profile