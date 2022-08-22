import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      NoName{" "}
      <a
        href="https://github.com/Noneif/react-weather-app"
        target="_blank"
        rel="noreferrer"
        className="footer-link"
      >
        <i className="fa-brands fa-github"></i>{" "}
      </a>
    </div>
  );
}

export default Footer;
