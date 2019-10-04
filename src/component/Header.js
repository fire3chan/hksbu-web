import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../css/header.css';
import logo from '../img/hksbu logo-white.png';
import SocialMedia from './SocialMedia.js';

class Header extends React.Component {
  openNavList() {
    document.getElementById("mobile-overlay-nav").style.width = "100%";
  }
  closeNav() {
    document.getElementById("mobile-overlay-nav").style.width = "0%";
  }

  render() {
    return (
      <header className="header sticky-top">
        <div className="container">
          <div className="row">
            <div className="site-title col-6 col-md-3 header-item">
              <a href="/">
                <img className="header-logo" src={logo} alt="The logo of HK Student Blockchain Union" />
              </a>
            </div>

            <nav className="nav-bar col-md-9 d-none d-md-flex">
              <ul className="nav-bar-ul">
                <li className="nav-bar-ul-item">
                  <a className="nav-link" href="#Home">Home</a>
                </li>
                <li className="nav-bar-ul-item">
                  <a className="nav-link" href="#AboutUs">About Us</a>
                </li>
                <li className="nav-bar-ul-item">
                  <a className="nav-link" href="#RoadMap">Road Map</a>
                </li>
                <li className="nav-bar-ul-item">
                  <a className="nav-link" href="#JoinUs">Join us</a>
                </li>
              </ul>
            </nav>
            <div className="mobile-nav-bar col-6 d-flex d-md-none">
              <ul className="nav-bar-ul">
                <li className="mobile-nav-ul-item active">
                  <FontAwesomeIcon onClick={() => this.openNavList()}
                    className="header-list-icon" icon={faBars} />
                </li>
              </ul>
            </div>


            <div id="mobile-overlay-nav" className="overlay-nav">
              <span className="closebtn"
                onClick={() => this.closeNav()}>&times;</span>

              <ul className="mobile-overlay-nav-content">
                <li><SocialMedia /></li>
                <li className="mobile-nav-bar-ul-item">
                  <a className="mobile-nav-link" href="#Home" onClick={() => this.closeNav()}>Home</a>
                </li>
                <li className="mobile-nav-bar-ul-item">
                  <a className="mobile-nav-link" href="#AboutUs" onClick={() => this.closeNav()}>About Us</a>
                </li>
                <li className="mobile-nav-bar-ul-item">
                  <a className="mobile-nav-link" href="#RoadMap" onClick={() => this.closeNav()}>Road Map</a>
                </li>
                <li className="mobile-nav-bar-ul-item">
                  <a className="mobile-nav-link" href="#JoinUs" onClick={() => this.closeNav()}>Join us</a>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </header>


    );
  }
}

export default Header;
