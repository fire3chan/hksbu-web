import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../css/header.css';
import logo from '../img/hksbu logo.png';
import fbIcon from '../img/facebook-icon.png';

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
                <li className="nav-bar-ul-item active">
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
                <li className="nav-bar-ul-item">
                  <a className="nav-link" href="#FB"><img className="fb-logo" src={fbIcon} /></a>
                </li>
              </ul>
            </nav>
            <div className="mobile-nav-bar col-6 d-block d-md-none">
              <FontAwesomeIcon onClick={() => this.openNavList()}
                className="header-list-icon" icon={faBars} />
            </div>


            <div id="mobile-overlay-nav" className="overlay-nav">
              <a href="javascript:void(0)" className="closebtn"
                onClick={() => this.closeNav()}>&times;</a>

              <ul className="mobile-overlay-nav-content">
                <li className="mobile-nav-bar-ul-item active">
                  <a className="mobile-nav-link" href="#Home">Home</a>
                </li>
                <li className="mobile-nav-bar-ul-item">
                  <a className="mobile-nav-link" href="#AboutUs">About Us</a>
                </li>
                <li className="mobile-nav-bar-ul-item">
                  <a className="mobile-nav-link" href="#RoadMap">Road Map</a>
                </li>
                <li className="mobile-nav-bar-ul-item">
                  <a className="mobile-nav-link" href="#JoinUs">Join us</a>
                </li>
              </ul>
            </div>
            {/* <form className="form-inline my-2 my-lg-0 col-12 col-lg-3">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
          </div>

        </div>

      </header>


    );
  }
}

export default Header;
