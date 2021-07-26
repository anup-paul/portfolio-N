import React from 'react';
import profileImage from '../../images/DP3.jpg';
import './AboutMe.css';
import resume101 from '../../resume/anupPaul106.pdf';
import { Zoom } from "react-awesome-reveal";



const AboutMe = () => {
    return (
        <div>
            <Zoom>
                <div className="d-flex justify-content-center" >
                    <div className="row w-50  my-5 py-5">
                        <h1 className="text-center" ><b style={{ color: "#f9ab00" }}> <b style={{ color: "white" }} >About</b> Me</b></h1>
                        <div className="col-md-6 my-5" >
                            <img className="img-fluid profile-image-design me-5" src={profileImage} alt="" />
                        </div>
                        <div className="col-md-6 my-5 text-section" >
                            <p style={{ color: "white" }}>I'm Anup Paul. I am a Font-End Web Developer. And I'm also learning Back-End-Development and looking forward to being a Full Stack Web Developer. I always focus on learning new technology.
                                    I like to solve challenges and learn from them. Recently I have developed some full-stack project. </p>
                            <button style={{ color: "white" }} className="btn contract-button-design mx-2 mb-1">
                                <a href={resume101} download="Anup Paul" > Resume </a>
                            </button>
                            <button style={{ color: "white" }} className="btn contract-button-design mx-2 mb-1">
                                <a href="https://www.linkedin.com/in/anup-paul-7315b2203/" target="_blank" rel="noopener noreferrer" > Hire Me </a>
                            </button>
                        </div>
                    </div>
                </div>
            </Zoom>
            <Zoom>
                <div className="d-flex justify-content-center">

                    <div className="row w-75 mb-5 pb-5">


                        <h1 className="text-center mb-5" style={{ color: "#f9ab00" }} > <b><b style={{ color: "white" }}> Some Of My</b>  Skills</b></h1>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="border-end border-start p-2 border-warning border-5" style={{ height: "280px" }}>
                                <h2 className="text-center" style={{ color: "white" }} >&#9679; <b style={{ color: "#f9ab00" }} >Web</b></h2>

                                <p className="skill-design">
                                    <button className="btn btn-secondary m-1">React</button>
                                    <button className="btn btn-secondary m-1 ">Node,js</button>
                                    <button className="btn btn-secondary m-1">Express.js</button>
                                    <button className="btn btn-secondary m-1 ">MongoDB</button>
                                    <button className="btn btn-secondary m-1">Bootstrap</button>
                                    <button className="btn btn-secondary m-1 ">Meterial-UI</button>
                                    <button className="btn btn-secondary m-1">HTML</button>
                                    <button className="btn btn-secondary m-1 ">CSS</button>
                                </p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="border-end border-start p-2  border-warning border-5 " style={{ height: "280px" }} >
                                <h2 className="text-center" style={{ color: "white" }} >&#9679; <b style={{ color: "#f9ab00" }} >Tool</b></h2>

                                <p className="skill-design">
                                    <button className="btn btn-secondary m-1">Git</button>
                                    <button className="btn btn-secondary m-1 ">FireBase</button>
                                    <button className="btn btn-secondary m-1">VsCode</button>
                                    <button className="btn btn-secondary m-1 ">Heroku</button>
                                    <button className="btn btn-secondary m-1">Npm</button>
                                    <button className="btn btn-secondary m-1 ">Netlify</button>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="border-end border-start p-2 border-warning border-5" style={{ height: "280px" }} >
                                <h2 className="text-center" style={{ color: "white" }} >&#9679; <b style={{ color: "#f9ab00" }} >Programing</b></h2>
                                <p className="skill-design">
                                    <button className="btn btn-secondary m-1">JavaScript</button>
                                    <button className="btn btn-secondary m-1 ">Java</button>
                                    <button className="btn btn-secondary m-1">C</button>
                                    <button className="btn btn-secondary m-1 ">C++</button>

                                </p>
                            </div>
                        </div>


                    </div>

                </div>
            </Zoom>
        </div>
    );
};

export default AboutMe;