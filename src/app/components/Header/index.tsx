import React from "react";
import "./header.css";

const Index = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-items">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="logo mx-auto">logo</div>
        <div className="social-icons">social</div>
      </div>
    </div>
  );
};

export default Index;
