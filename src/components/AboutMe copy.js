import React from "react";
import square from "../img/shapes/square.png";
import circle from "../img/shapes/circle.png";
import halfCircle from "../img/shapes/half-circle.png";
import x from "../img/shapes/x.png";
import wave from "../img/shapes/wave.png";
import triangle from "../img/shapes/triangle.png";
import my from "../img/2.png";
import point2 from "../img/shapes/points2.png";
import myResume from "../docs/Elham Bazazzadeh.pdf";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="header-wraper">
      <div className="main-info">
        {/* <h1 className="header-title">Elham Bazazzadeh</h1> */}
        <div class="overlay overlay-lg">
          <img src={square} className="shape square" alt="" />
          <img src={circle} className="shape circle" alt="" />
          <img src={halfCircle} className="shape half-circle1" alt="" />
          <img src={halfCircle} className="shape half-circle2" alt="" />
          <img src={x} className="shape xshape" alt="" />
          <img src={wave} className="shape wave wave1" alt="" />
          <img src={wave} className="shape wave wave2" alt="" />
          <img src={triangle} className="shape triangle" alt="" />
        </div>
      </div>

      <div className="header-content">
        <div className="container grid-2">
          <div className="column-1">
            <h1 className="header-title">Elham Bazazzadeh</h1>
            <p className="text">
              I am living in Washington state right now. After high school, I
              got my B.S. in Computer Software Engineering at Islamic Azad
              University Najaf Abad Branch. Right now, I am studying MIS at
              University of Phoenix. Also, I am studing Full Stack Developer in
              bootcam at the university of washington. For almost ten years, I
              worked as a web developer and created applications for eLearning,
              eForm, Workflow, Salary Management tool for Payam Noor University,
              and knowledge management. Also, I have experience in management
              and research for knowledge management. I am a member of NSLS. The
              technologies I enjoy working with include HTML, JavaScript , CSS,
              MYSQL, Node.js (Express.js, Inquirer.js, File System, Sequelize,
              MVC).
            </p>
            <a href={myResume} className="btn">
              My Resume
            </a>
          </div>

          <div className="column-2 image">
            <img src={point2} className="points points2" alt="" />
            <img src={my} className="img-element z-index" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
