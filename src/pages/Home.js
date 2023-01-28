import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <div className="image-container">
          <img
            src={require("../assets/personalpicture.png")}
            alt="Justin Soliman Profile Picture"
          />
        </div>

        <h2> Hi, My Name is Justin</h2>
        <div className="prompt">
          <p>
            A Full-Stack Web Development student with a passion for learning and
            creating.
          </p>
          <a href="https://www.linkedin.com/in/justin-soliman-4bb867233/">
            <LinkedInIcon />
          </a>
          <a href="mailto:justinsoliman16@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/justinsoliman16">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>HTML, CSS, ReactJS, Flutter, StyledComponents</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, MongoDB,</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Dart</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
