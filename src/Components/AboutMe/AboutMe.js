import React from 'react';
import profileImage from '../../images/DP3.jpg';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="aboutMe-section">
            <div className="d-flex justify-content-center" >
                <div className="row w-50  my-5 py-5">
                    <h2 className="text-center" ><b style={{color:"#f9ab00"}}>About Me</b></h2>
                    <div className="col-md-6 my-5" >
                        <img className="img-fluid profile-image-design me-5" src={profileImage} alt=""/>
                    </div>
                    <div className="col-md-6 my-5 text-section" >
                        <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias earum amet eaque? Totam iusto voluptate, blanditiis accusantium aperiam, sunt ea, dignissimos mollitia sed doloribus dolorum similique non ipsum officia?</p>
                        <button style={{color:"white"}} className="btn contract-button-design">Contract Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;