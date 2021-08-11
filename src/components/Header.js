import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts.js/AuthContext";

const Header = (props) => {
  const { authUser, handleSignoutClick } = useContext(AuthContext);

  console.log(authUser);
  const renderLinks = () => {
    if (authUser) {
      return (
        <li className="nav-item  ">
          <Link
            onClick={handleSignoutClick}
            to="/"
            className="nav-link "
            aria-current="page"
          >
            Sign Out
          </Link>
        </li>
      );
    } else {
      return [
        <li className="nav-item  ">
          <Link to="/signin" className="nav-link ">
            Sign In
          </Link>
        </li>,
        <li className="nav-item  ">
          <Link to="/signup" className="nav-link ">
            Sign UP
          </Link>
        </li>,
      ];
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Todoist
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">{renderLinks()}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
