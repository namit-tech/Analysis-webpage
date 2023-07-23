import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from "../assets/butterfly.png";
import { FaSearch, FaHome, FaRegNewspaper, FaRegListAlt, FaRegUser, FaBell, FaSignOutAlt } from "react-icons/fa"
export const NavBar = () => {

  return (
    <div className='container-fluid'>
        <div className='col-auto  navbar'>
          <ul className='section-1'>
            <li>
              <img src={logo} alt="" className='logo' />
            </li>
            <li><FaSearch  className='search'/></li>
          </ul>
          <ul className='section-2'>
            <li><FaHome className='home'/></li>
            <li><FaRegNewspaper className='news'/></li>
            <li><FaRegListAlt className='list' /></li>
            <li><FaRegUser className='user' /></li>
          </ul>
          <ul className='section-3'>
            <li><FaBell className='bell'/></li>
            <li><FaSignOutAlt className='signout'/></li>
          </ul>
      </div>
    </div>
  )
}
