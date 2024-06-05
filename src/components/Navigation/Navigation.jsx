import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav className='nav'>
      <div className='nav-box'>
     
        <div className='div-brand'>
          <Link to={'/'} className='title-logo'><h3>MovieHub</h3> </Link>
      
        </div>
        <div>
        <h3 className='movie-title-nav'>CATEGORIES</h3>
          <ul className='ul-nav'>
          <li><NavLink to={"/"} className="link-nav">Now playing <span className="material-symbols-outlined">
live_tv
</span></NavLink></li> 
          <li><NavLink to={"/about"} className="link-nav">Popular <span className="material-symbols-outlined">
thumb_up
</span></NavLink></li>
          <li><NavLink to={"/about"} className="link-nav">Top Rated <span className="material-symbols-outlined">
trending_up
</span></NavLink></li>
          <li><NavLink to={"/about"} className="link-nav">Upcoming <span className="material-symbols-outlined">
event_upcoming
</span></NavLink></li>
          </ul>
        </div>

      </div>
    </nav>
  )
}
