import React from "react";

const Footer = props => {
  return (
    <footer>
      <div className="my-link-icon-holder">
        <p>About Me:</p>
        <ul className="my-link-icons">
          <li>
            <a href="https://github.com/hereserin">
              <i class="fab fa-github" />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/erin-e-m/">
              <i class="fab fa-linkedin-in" />
            </a>
          </li>

          <li>
            <a href="https://angel.co/erin-marshall-1">
              <i class="fab fa-angellist" />
            </a>
          </li>

          <li>
            <a href="http://erin-e-marshall.com/">
              <i class="fas fa-user-circle" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
