import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="header">
        <h1>Logo</h1>
        <a href="/">
          <b>Logout</b>
        </a>
      </div>
      <div className="row">
        <div className="navbar">
          <a href="/">Sidebar 1</a>
          <a href="/">Sidebar 2</a>
          <a href="/">Sidebar 3</a>
          <a href="/">Sidebar 4</a>
          <a href="/">Sidebar 5</a>
        </div>
        <div className="contentWrapper">
          <p className="content">Sample Text</p>
        </div>
      </div>
      <div className="footer">
        <h2>Footer</h2>
      </div>
    </div>
  );
};

export default Navbar;
