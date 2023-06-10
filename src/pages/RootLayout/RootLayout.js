import React from 'react';
import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Navbar from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function RootLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop smooth style={{ marginTop: "150vh" , display: "flex", justifyContent: "center", alignItems: 'center', backgroundColor: "rgb(233 213 255)", zIndex: "30"}} color='#ffffff' component={< KeyboardDoubleArrowUpIcon/>}/>
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout