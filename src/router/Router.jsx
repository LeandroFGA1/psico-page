import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home"
import Consultancy from '../pages/Consultancy';
import Contact from '../pages/Contact';
import Profile from "../pages/Profile"
import Therapy from "../pages/Therapy"
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function RouterMain() {
  return (
    <Routes>
      <Route path='/' element={
      <><ScrollToTop/><Home /></>} />
      <Route path='/consultancy' element={
      <><ScrollToTop/><Consultancy/></>}/>
      <Route path='/contact' element={<><ScrollToTop/><Contact/></>}/>
      <Route path='/profile' element={<><ScrollToTop/><Profile/></>}/>
      <Route path='/therapy' element={<><ScrollToTop/><Therapy/></>}/>
      </Routes>
  )
}

export default RouterMain