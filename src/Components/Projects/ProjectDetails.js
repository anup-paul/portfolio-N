import React from 'react';
import './ProductDetails.css';
import { Zoom } from "react-awesome-reveal";


const ProjectDetails = ({ project }) => {
    return (
        <div className="col-md-6">

            <Zoom >
                <div className="card card-design m-4 text-center" style={{ border: " 2px solid #f9ab00" }}>
                    <div className=" p-3" style={{ backgroundColor: "#0A192F" }}>
                        <img src={project.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title" style={{ color: "#f9ab00" }} ><b>{project.name}</b></h5>
                            <p className="card-text" style={{ color: "white" }}>{project.description}</p>
                            <h5 className="card-title" style={{ color: "#f9ab00" }} ><b>Technology</b></h5>
                            <div className="d-flex justify-content-center" >
                                <p><b style={{ color: "white" }}>{project.tools}</b></p>
                            </div>
                            <a href={project.codeURL} className="btn mx-2 link-button-design" target='_blank' style={{ textDecoration: "none", color: "white", border: "2px solid #f9ab00" }} >  Github</a>
                            <a href={project.liveSiteURl} className="btn link-button-design" target='_blank' style={{ textDecoration: "none", color: "white", border: "2px solid #f9ab00" }} >Live Site</a>
                         </div>
                    </div>
                 </div>
            </Zoom>
         </div>
    );
};

export default ProjectDetails;