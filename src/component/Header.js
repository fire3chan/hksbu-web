import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../css/header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="site-title col-6 col-md-3 header-item">hksbu</div>

        <nav className="nav-bar col-md-9 d-none d-md-block">
          <ul className="nav-bar-ul">
            <li className="nav-bar-ul-item active">
              <a className="nav-link" href="#Home">Home</a>
            </li>
            <li className="nav-bar-ul-item">
              <a className="nav-link" href="#Mission">Mission</a>
            </li>
            <li className="nav-bar-ul-item">
              <a className="nav-link" href="#RoadMap">Road Map</a>
            </li>
            <li className="nav-bar-ul-item">
              <a className="nav-link" href="#JoinUs">Join us</a>
            </li>
          </ul>
        </nav>
        <nav className="mobile-nav-bar col-6 d-block d-md-none">
          <FontAwesomeIcon className="header-list-icon" icon={faBars} />
        </nav>
        {/* 
            <form className="form-inline my-2 my-lg-0 col-12 col-lg-3">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
      </div>


    );
  }
}

export default Header;
