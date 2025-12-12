import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './navbar.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: 'home'
    };
  }

  setActiveLink = (link) => {
    this.setState({ activeLink: link });
  };

  render() {
    const { activeLink } = this.state;

    return (
      <header className='header'>
        <div className='main'>
          {/* Left Side - Logo */}
          <Link to="/" className="logo-link">
            <img className='mimg' src={logo} alt="Recipe Book Logo" />
            <div className="logo-text">
              <span className="logo-main">Recipe Book</span>
            </div>
          </Link>

          {/* Right Side - Navigation Links */}
          <div className='nav-right'>
            <ul className="nav-links">
              <li className="nav-link-item">
                <Link 
                  to="/" 
                  className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                  onClick={() => this.setActiveLink('home')}
                >
                  <span className="menu-icon">🏠</span>
                  <div>
                    <span className="menu-title">Home</span>
                    <span className="menu-subtitle">Browse recipes</span>
                  </div>
                </Link>
              </li>
              
              <li className="nav-link-item">
                <Link 
                  to="/about" 
                  className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                  onClick={() => this.setActiveLink('about')}
                >
                  <span className="menu-icon">ℹ️</span>
                  <div>
                    <span className="menu-title">About</span>
                    <span className="menu-subtitle">Our story</span>
                  </div>
                </Link>
              </li>
              
              <li className="nav-link-item">
                <Link 
                  to="/contact" 
                  className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                  onClick={() => this.setActiveLink('contact')}
                >
                  <span className="menu-icon">📞</span>
                  <div>
                    <span className="menu-title">Contact</span>
                    <span className="menu-subtitle">Get in touch</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}