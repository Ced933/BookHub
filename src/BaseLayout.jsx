import React from 'react'
import Navigation from './components/Navigation/Navigation';
import {Outlet} from 'react-router-dom';

export default function BaseLayout() {
  return (
    <>
    <Navigation/>
    <Outlet/>
    </>
  )
}
