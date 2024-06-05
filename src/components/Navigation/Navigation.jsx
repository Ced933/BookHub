import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav className='nav'>
      <div className='nav-box'>
     
      <div className='div-brand'>
        {/* <img src="./logo.png" className='img-logo' alt="" /> */}
        <Link to={'/'} className='title-logo'>MovieHub</Link>
    
      </div>
      {/* <div>
        <ul className='ul-nav'>
         <li><NavLink to={"/"} className="link-nav">Home</NavLink></li> 
         <li><NavLink to={"/about"} className="link-nav">About</NavLink></li> 
        </ul>
      </div> */}

      </div>
    </nav>
  )
}
