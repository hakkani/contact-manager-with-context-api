import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container main-content">
        <a className="navbar-brand logo" href="/">
          {branding}
        </a>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact/add">
              <i className="fas fa-plus"></i> Add
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              <i className="fas fa-question"></i> About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
