import React from 'react'
import Navigation from './components/Navigation/Navigation';
import {Outlet} from 'react-router-dom';

export default function BaseLayout() {
  return (
    // on a mit flex end car lorsqu'on fait un postion:fixed l'élement sort de son moule et les elements restant se collent à gauche 
    < div style={{ display:'flex', justifyContent:'flex-end'}}>
    <Navigation/>
    <Outlet/>
    </div>
  )
}
