import React from 'react';
import { Outlet } from "react-router-dom";
// import Navbar from '../../components/Navbar/Navbar';
import Navbar from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout