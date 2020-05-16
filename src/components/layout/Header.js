import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { branding } = props;
  return (
    <nav
      className="navbar navbar-expand-sm
    navbar-dark bg-primary mb-3 py-0"
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" />
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
Header.defaultProps = {
  branding: "My App",
};
Header.propTypes = {
  branding: propTypes.string.isRequired,
};

export default Header;

// const headingStyle = {
//   color: "red",
//   fontSize: "50px",
// };
//<h1 style={headingStyle}>{branding}</h1>

//We can also Add CSS like this usin <style={{ }}>
//<h1 style={{ color: "red", fontSize: "50px" }}>{branding}</h1>
