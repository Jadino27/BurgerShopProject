import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      { name: "Login", path: "/login" },
      { name: "Orders", path: "/myorders" },
      { name: "Logout", path: "/login" },
    ];
    setNavLinks(navs);
  }, []);

  const dropdownButtonStyle = {
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.2rem",
    backgroundColor: "rgb(156, 0, 48)", // Change color here
    border: "none",
  };

  const dropdownItemStyle = {
    fontFamily: "Roboto, sans-serif",
    fontSize: "1rem",
    color: "#333",
    backgroundColor: "#f7f7f7",
    border: "none",
    padding: "0.5rem 1rem",
    transition: "background-color 0.3s",
  };

  const dropdownItemHoverStyle = {
    backgroundColor: "#ff3f34",
    color: "white",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">
            {/* Brand Logo */}
          </a>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
              style={dropdownButtonStyle}
            >
              Menu
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {navLinks.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button
                      className="dropdown-item"
                      type="button"
                      style={dropdownItemStyle}
                    >
                      {d.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DropdownMenu;

