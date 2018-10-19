import React from "react";

const Footer = props => {
  return (
    <footer>
      <div>
        <p>
          OvalTable is a single-page web application built on Ruby on Rails with
          React.js
          <br />
          It is inspired by the popular OpenTable website.
        </p>
      </div>
      <div className="my-link-icon-holder">
        <p>About Me:</p>
        <ul className="my-link-icons">
          <li>
            <a href="https://github.com/hereserin">
              <i className="fab fa-github" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/erin-e-m/">
              <i className="fab fa-linkedin-in" />
            </a>
          </li>

          <li>
            <a href="https://angel.co/erin-marshall-1">
              <i className="fab fa-angellist" />
            </a>
          </li>

          <li>
            <a href="http://erin-e-marshall.com/">
              <i className="fas fa-user-circle" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
