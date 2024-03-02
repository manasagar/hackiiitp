import React from 'react'
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';


export const Layout = ({token,setToken}) => {
  return (
    <div>
        <Navbar 
          token={token}
          setToken={setToken}
        />
            <Outlet />
        <Footer />
    </div>
  )
}
