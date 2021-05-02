import React from 'react';
import { Link } from 'react-router-dom';
import './SayHello.css';
import { Zoom } from "react-awesome-reveal";

const SayHello = () => {
    return (
        <Zoom >
            <div className="d-flex justify-content-center">
                <div className="text-center text-white  mb-5 pb-5 w-50">
                    <div>
                        <h5> <b style={{ color: "#f9ab00" }} >What's Next?</b> </h5>
                        <h1 className=" text-center  text-white"><b>Get In <b style={{ color: "#f9ab00" }} >Touch</b></b></h1>
                        <p>I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message. I'll try my best to get back to you!</p>
                        <Link to="/contact" className="btn contact-button-design" >Say Hello</Link>
                    </div>
                </div>
            </div>
        </Zoom>
    );
};

export default SayHello;