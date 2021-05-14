import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import resume from '../../resume/Anup Paul102.pdf'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#0A192F" }}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand mx-5 text-light navbar-logo"  ><b>ANUP PAUL</b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "white" }} ></FontAwesomeIcon>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mx-5 px-5 mb-lg-0">
                        <li className="nav-item mx-3 mt-3">
                            <Link to="/home" className="nav-link active text-light" aria-current="page" ><b>Home</b></Link>
                        </li>
                        <li className="nav-item mx-3 mt-3">
                            <Link to="about" className="nav-link active text-light" aria-current="page" ><b>About</b></Link>
                        </li>
                        <li className="nav-item mx-3 mt-3">
                            <Link to="/projects" className="nav-link active text-light" aria-current="page"  ><b>Projects</b></Link>
                        </li>
                        <li className="nav-item mx-3 mt-3">
                            <Link to="/blogs" className="nav-link active text-light" aria-current="page" ><b>Blogs</b></Link>
                        </li>
                        <li className="nav-item mx-3 mt-3">
                            <Link to="/contact" className="nav-link active text-light" aria-current="page" ><b>Contract</b></Link>
                        </li>
                        <li className="nav-item mx-3 ">
                            <button className="btn my-2 resume-button-design">
                                <a href={resume} className="nav-link active text-light" aria-current="page" download="Anup-Paul" ><b>Resume</b></a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;