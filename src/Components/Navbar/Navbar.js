import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand mx-5 text-light" href="#"><b>Paul Brothers</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color:"white"}} ></FontAwesomeIcon>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mx-5 px-5 mb-lg-0">
                        <li className="nav-item mx-3">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link active text-light" aria-current="page" href="#">About me</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link active text-light" aria-current="page" href="#">Services</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link active text-light" aria-current="page" href="#">Experience</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link active text-light" aria-current="page" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link active text-light" aria-current="page" href="#">Contract</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;