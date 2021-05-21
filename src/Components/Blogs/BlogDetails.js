import React from 'react';
import './BlogDetails.css';


const BlogDetails = ({ info }) => {
    return (
        
            <div className="col-lg-4 col-md-4 col-sm-12" >
                <div class="card p-3 md-mx-3 mt-sm-3 mx-sm-3 " style={{ width: "20rem", backgroundColor: "#0A192F" }}>
                    <img src={info.img} class="card-img-top img-fluid" alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title" style={{ color: "#f9ab00" }}><b>{info.title}</b></h5>
                        <p class="card-text text-white">{info.description}</p>
                        <a href={info.link} target="_blank" class="btn blog-button-design" style={{ color: "white", border: "2px solid #f9ab00" }}>Read More</a>
                    </div>
                </div>
            </div>
        
    );
};

export default BlogDetails;