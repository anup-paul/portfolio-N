import React from 'react';
import './ProjectDetails.css'
import { Zoom } from "react-awesome-reveal";


const ProjectDetails = ({ project }) => {
    return (
        <div className="col-lg-6 col-md-12 col-sm-12">

            <Zoom >
                <div className="card card-design m-4 text-center" style={{ border: " 2px solid #f9ab00" }}>
                    <div className=" p-3" style={{ backgroundColor: "#0A192F" }}>
                


                        <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active ">
                                    <img src={project.image} className=" card-img-top d-block w-100 image-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project.image2} className="card-img-top d-block w-100 image-design" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={project.image3} className="card-img-top d-block w-100 image-design" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>



                        <div className="card-body">
                            <h5 className="card-title" style={{ color: "#f9ab00" }} ><b>{project.name}</b></h5>
                            <p className="card-text" style={{ color: "white" }}>{project.description}</p>
                            <h5 className="card-title" style={{ color: "#f9ab00" }} ><b>Technology</b></h5>
                            <div className="d-flex justify-content-center" >
                                <p><b style={{ color: "white" }}>{project.tools}</b></p>
                            </div>
                            <a href={project.codeURL} className="btn mx-2 link-button-design" target='_blank' rel="noopener noreferrer" style={{ textDecoration: "none", color: "white", border: "2px solid #f9ab00" }} >  Github</a>
                            <a href={project.liveSiteURl} className="btn link-button-design" target='_blank' rel="noopener noreferrer" style={{ textDecoration: "none", color: "white", border: "2px solid #f9ab00" }} >Live Site</a>

                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default ProjectDetails;