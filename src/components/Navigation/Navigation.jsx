import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {

  // lorsqu'on recharge la page on affect la valeur initial
  const[ width, setWidth] = useState(window.innerWidth);
  
  useEffect(()=>{
    // la fonction qu'on va lancer a chaque changement 
const handleResize = ()=>{
  setWidth(window.innerWidth);
}
// quand le composant est monté 
window.addEventListener('resize', handleResize);
// quand le composant est détruit 
return ()=>{
  window.removeEventListener('resize', handleResize);
};

  },[])
  console.log(width)
  return (
    <nav className='nav'>
      <div className='nav-box'>
     
        <div className='div-brand'>
          <Link to={'/'} className='title-logo'>{
             width <= 1155 ? <span className="material-symbols-outlined title-logo">
            home
            </span> : <h3>MovieHub</h3>
          } </Link>
        </div>
        <div>
          {
             width >= 1155 && <h3 className='movie-title-nav'>CATEGORIES</h3>
          }
          
          <ul className='ul-nav'>
            <li>
              <NavLink to={"/nowplaying"} className={({ isActive }) => (isActive ? 'active-link link-nav' : ' link-nav')}>{
               width >= 1155 ?
              "Now playing" : "" }<span className="material-symbols-outlined"> live_tv</span></NavLink>
              </li> 

            <li><NavLink to={"/popular"} className={({ isActive }) => (isActive ? 'active-link link-nav' : ' link-nav')}>{
               width >= 1155 ?
              "Popular " : "" }
            <span className="material-symbols-outlined">thumb_up</span></NavLink></li>

            <li><NavLink to={"/toprated"} className={({ isActive }) => (isActive ? 'active-link link-nav' : ' link-nav')}>{
               width >= 1155 ?
              "Top Rated" : "" } <span className="material-symbols-outlined">trending_up</span></NavLink></li>

            <li><NavLink to={"/upcoming"} className={({ isActive }) => (isActive ? 'active-link link-nav' : ' link-nav')}>{
               width >= 1155 ?
              "Upcoming" : "" } <span className="material-symbols-outlined">event_upcoming</span></NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
