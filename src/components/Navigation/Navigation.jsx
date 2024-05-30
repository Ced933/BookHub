import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav className='nav'>
      <div className='nav-box'>
     
      <div className='div-brand'>
        <img src="./logo.png" className='img-logo' alt="" />
        <h2 className='title-logo'>BookHub</h2>
    
      </div>
      <div>
        <ul className='ul-nav'>
         <li><NavLink to={"/"} className="link-nav">Home</NavLink></li> 
         <li><NavLink to={"/about"} className="link-nav">About</NavLink></li> 
        </ul>
      </div>

      </div>
    </nav>
  )
}
