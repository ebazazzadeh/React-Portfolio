import React from "react";

import PasswordGenerator from "../img/Passwoed-Generator.png";
import CodeQuiz from "../img/Code-Quiz2.png";
import ReadMeGenerator from "../img/code-icon.png"



const projects = () => {
    return (
        <div className="projects">
            <div className="py-5">
                <div className="container">
                    <div className="row">
                    {/* <div class="container"> */}
                        <div class="section-header">
                            <h3 className="title" data-title="What I Do">Projects</h3>
                            <p className="text">              
                            These projects develop an end-to-end application independently by handling all the work of coding, databases, servers and platforms. 
                            The technologies I used in my projects are HTML, JavaScript , CSS, MYSQL, Node.js (Express.js, Inquirer.js, File System, Sequelize, MVC).
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <div className="box">
                            <img src={PasswordGenerator} alt="" className="icon" /> 
                            
                                <h3>Password Genertor</h3>
                                <p>
                                This code enables employees to generate random passwords based on criteria that they’ve selected. 
                                This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that I write.
                                </p>
                                <a href="https://ebazazzadeh.github.io/passwordGenerator/" class="btn small">Read more</a>

                                {/* <Link 
                                    to={{pathname:"https://ebazazzadeh.github.io/passwordGenerator/"}} target="_blank"
                                /> */}                          
                                {/* <a href={PasswordGeneratorLink} class="btn small">Read more</a> */}
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <div className="box">
                            <img src={CodeQuiz} class="icon" alt="" />
                                <h3>Code-Quiz</h3>
                                <p>
                                    This app is built a timed coding quiz with multiple-choice questions.
                                    This app runs in the browser and features dynamically updated HTML and CSS powered by JavaScript code that I wrote.
                                </p>
                                <a href="https://ebazazzadeh.github.io/Code-Quiz/" class="btn small" target="_blank">Read more</a>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-4">
                            <div className="box">
                            <img src={ReadMeGenerator} class="icon" alt="" />
                                <h3>README_GENERATOR</h3>
                                <p>
                                This is a readme generator using command prompts from node.js to create a file and write to all the parts.
                                </p>
                                <a href="https://ebazazzadeh.github.io/README_GENERATOR/" class="btn small" target="_blank">Read more</a>
                            </div>
                        </div>

                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default projects;