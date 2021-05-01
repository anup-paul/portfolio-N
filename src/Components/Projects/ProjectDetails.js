import React from 'react';
import './ProductDetails.css';


const ProjectDetails = ({ project }) => {
    return (
        <div className="col-md-6">
            <div className="m-5 text-center">
                <div className="card-design p-3">
                    <img className="img-fluid" style={{ height: "300px", width: "400px" }} src={project.image} alt="" />
                    <p className="mt-2" style={{color:"white"}} >{project.description}</p>
                    <button className="btn  mx-3">
                        <a href={project.codeURL} target='_blank' style={{textDecoration:"none", color:"white"}} >  Github</a>
                    </button>
                    <button className="btn ">
                        <a href={project.liveSiteURl} target='_blank' style={{textDecoration:"none", color:"white"}} >Live Site</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;