import React, { use } from 'react'
import LogoImg from '../assets/logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './css/Header.css'

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  
  return (
    <header>
      <nav className="container grid nav-bar">
        <Link to="/" className="nav-bar-logo">
          <img src={LogoImg} />
        </Link>
        <button onClick={() => setIsNavExpanded(!isNavExpanded)} className="nav-bar-hamburger" >
          {isNavExpanded ? (
            <FontAwesomeIcon icon={faXmark} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </button>

        <ul className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'} 
          onClick={() => setIsNavExpanded(!isNavExpanded)}>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/'>ABOUT</Link>
          </li>
          <li>
            <Link href="#">MENU</Link>
          </li>
          <li>
            <Link to="/booking">RESERVATIONS</Link>
          </li>
          <li>
            <Link to="/">ORDER ONLINE</Link>
          </li>
          <li>
            <Link to="/">LOGIN</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
