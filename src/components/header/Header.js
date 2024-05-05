import React from 'react'
import "./header.css"
import logo from '../../assets/icons/navbar/navbar-logo.svg'
import {NAV_ITEMS} from "../../static/index"


let navItems = NAV_ITEMS?.map((item,index) => (
    <li key={index}>
        <a href="">{item}</a>
    </li>
))

const Header = () => {
  return (
    <nav className='navbar container '>
        <div className="navbar__logo">
            <img src={logo} alt="" />
            <ul className='row'>
                {navItems}
            </ul>
        </div>
        <button className='navbar__btn'>Booking Now</button>
    </nav>
  )
}

export default Header

