import React from 'react';
import './navbar.css';
import invertedLogo from '../../assets/invertedLogo.png'
import contactImg from '../../assets/contact.png'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={invertedLogo} alt='logo' className='logo'/>
            <div className='desktopMenu'>
                <Link className='desktopMenuListItem'>Home</Link>
                <Link className='desktopMenuListItem'>About</Link>
                <Link className='desktopMenuListItem'>Projects</Link>
                <Link className='desktopMenuListItem'>Resume</Link>
                <Link className='desktopMenuListItem'>Cover Letter</Link>
                <Link className='desktopMenuListItem'>Contact</Link>
            </div>
            <button className='desktopMenuBtn'>
                <img src={contactImg} alt='' className='desktopMenuImg' />Contact Me
            </button>
        </nav>
    )
}

export default Navbar