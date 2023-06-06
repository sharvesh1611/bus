
import React from 'react'
import logo from '../assests/logo.png';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className='container'>
        <div className='left'>
            <img src={logo} alt=""></img>
        </div>
        <div className='right'>
            <ul>
                <li> <Link to='/'>Home</Link></li>
                <li><Link to='/nav'>Contact</Link></li>
                <li><Link to='/agent'>Agent Login</Link></li>
            </ul>  
        </div>
        
    </div>
  )
}

export default Header;