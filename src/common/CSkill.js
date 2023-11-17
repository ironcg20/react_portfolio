import React from "react";

const skills = [
  { name: "HTML5", image: "html5.svg" },
  { name: "CSS3", image: "css3.svg" },
  { name: "PHP", image: "php.svg" },
  { name: "PYTHON", image: "python.svg" },
  { name: "REACT", image: "react.svg" },
  { name: "NODEJS", image: "nodejs.svg" },
  { name: "MYSQL / PHPADMIN", image: "phpmyadmin.svg" },
  { name: "MONGODB", image: "mongodb.svg" },
  { name: "SQLITE3", image: "sqlite.svg" },
  { name: "JQUERY", image: "jquery.svg" },
  { name: "SASS", image: "sass.svg" },
  { name: "BOOTSTRAP", image: "bootstrap.svg" },
  { name: "WEBS.JS", image: "web3.svg" },
  { name: "P5.JS", image: "p5js.svg" },
  { name: "ELECTRON", image: "electron.svg" },
  { name: "SELENIUM", image: "selenium.svg" },
  { name: "EXPRESS", image: "express.svg" },
  { name: "SOCKETIO", image: "socketio.svg" },
  { name: "JSON", image: "json.svg" },
  { name: "GIT", image: "git.svg" },
  { name: "ARDUINO", image: "arduino.svg" },
  { name: "AWS", image: "aws.svg" },
  { name: "WORDPRESS", image: "wordpress.svg" },
];
const CSkill = () => {
  return (
    <section id='Skills' className='Skills'>
      <div className='container'>
        <div className='section-title' data-aos='fade-up'>
          <h2>Skills</h2>
        </div>
        <div
          className='row frame-0f1b28 p-5 rounded-4'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          {skills.map((skill, index) => (
            <div
              className={`col-lg-3 col-md-4 ${index >= 4 ? "mt-4" : ""}`}
              key={skill.name}
            >
              <div className='icon-box'>
                <img src={`./assets/img/skills/${skill.image}`} alt='' />
                <h3>
                  <a href=''>{skill.name}</a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CSkill;
