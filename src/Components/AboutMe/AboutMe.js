import React from 'react';
import profileImage from '../../images/DP3.jpg';
import './AboutMe.css';
import resume101 from '../../resume/Resume105.pdf';
import { Zoom } from "react-awesome-reveal";


const AboutMe = () => {
    return (
        <div className="aboutMe-section">
            <div className="d-flex justify-content-center" >
                <div className="row w-50  my-5 py-5">
                    <h1 className="text-center" ><b style={{ color: "#f9ab00" }}> <b style={{ color: "white" }} >About</b> Me</b></h1>
                    <div className="col-md-6 my-5" >
                        <img className="img-fluid profile-image-design me-5" src={profileImage} alt="" />
                    </div>
                    <div className="col-md-6 my-5 text-section" >
                        <p style={{ color: "white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias earum amet eaque? Totam iusto voluptate, blanditiis accusantium aperiam, sunt ea, dignissimos mollitia sed doloribus dolorum similique non ipsum officia?</p>
                        <button style={{ color: "white" }} className="btn contract-button-design mx-2 mb-1">
                            <a href={resume101} download="Anup Paul" > Resume </a>
                        </button>
                        <button style={{ color: "white" }} className="btn contract-button-design mx-2 mb-1">
                            <a href="https://www.linkedin.com/in/anup-paul-7315b2203/" target="_blank" > Hire Me </a>
                        </button>
                    </div>
                </div>
            </div>
            <Zoom>
            <div className="d-flex justify-content-center">
            
                <div className="row w-75 mb-5 pb-5">

                    
                        <h1 className="text-center mb-5" style={{ color: "#f9ab00" }} > <b><b style={{ color: "white" }}> Some Of My</b>  Skills</b></h1>
                        <div className="col-md-4  ">
                            <div className="border-end border-start p-2 border-warning border-5" style={{ height: "220px" }}>
                                <h2 className="text-center" style={{ color: "white" }} >&#9679; <b style={{ color: "#f9ab00" }} >Web</b></h2>
                                <h4 className="text-center" style={{ color: "White" }} ><b>React</b> <b>Node.js</b> <b>Express.js</b> <b>MongoDB</b> <b>Bootstrap</b> <b>Meterial-UI</b> <b>HTML</b> <b>  CSS</b></h4>
                            </div>

                        </div>
                        <div className="col-md-4 ">
                            <div className="border-end border-start p-2  border-warning border-5 " style={{ height: "220px" }} >
                                <h2 className="text-center" style={{ color: "white" }} >&#9679; <b style={{ color: "#f9ab00" }} >Tool</b></h2>
                                <h4 className="text-center" style={{ color: "White" }} ><b>Git</b> <b>FireBase</b> <b>VsCode</b> <b>Heroku</b> <b>Npm</b> <b>Netlify</b> </h4>
                            </div>
                        </div>
                        <div className="col-md-4  ">
                            <div className="border-end border-start p-2 border-warning border-5" style={{ height: "220px" }} >
                                <h2 className="text-center" style={{ color: "white" }} >&#9679; <b style={{ color: "#f9ab00" }} >Programing</b></h2>
                                <h4 className="text-center" style={{ color: "White" }} ><b>JavaScript</b> <b>Java</b> <b>C</b> <b>C++</b></h4>
                            </div>
                        </div>
                   

                </div>
                
            </div>
            </Zoom>
        </div>
    );
};

export default AboutMe;