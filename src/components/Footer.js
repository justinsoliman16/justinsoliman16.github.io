import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/justin-soliman-4bb867233/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/justinsoliman16">
          <GithubIcon />
        </a>
      </div>
      <p> &copy; 2023 justinsoliman.dev</p>
    </div>
  );
}

export default Footer;
