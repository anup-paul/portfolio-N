import React from 'react';
import ReactTyped from 'react-typed';
import './Header.css';
import dp from '../../images/DP2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import bubble from '../../images/bubble.png';



const Header = () => {
    return (
        <div className="header-wraper">
           
            <div className="main-info">
            <div className="bubbles" >
                    <img className="mx-lg-5 mx-md-3 mx-2 img-fluid" src={bubble} alt=""/>
                    <img className="mx-lg-5 mx-md-3 mx-2  img-fluid" src={bubble} alt=""/>
                    <img className="mx-lg-5 mx-md-3 mx-2 img-fluid" src={bubble} alt=""/>
                    <img className="mx-lg-5 mx-md-3 mx-2 img-fluid" src={bubble} alt=""/>
                    <img className="mx-lg-5 mx-md-3 mx-2 img-fluid" src={bubble} alt=""/>
                    <img className="mx-lg-5 mx-md-3 mx-2 img-fluid" src={bubble} alt=""/>
                    <img className="mx-lg-5 mx-md-3 mx-2 img-fluid" src={bubble} alt=""/>
                    <img className="mx-lg-5 mx-md-3 mx-2 img-fluid" src={bubble} alt=""/>
                </div>
                <img className=" img-fluid my-3 dp-design " src={dp} alt="" />
                <h3><b style={{ color: "#f9ab00" }}>Hello, This is</b></h3>
                <h1><b>Anup Paul</b></h1>
                <div className="d-flex icon-design">
                    <a href="https://www.facebook.com/anuppaul977/" target='-blank'><FontAwesomeIcon className="icon" icon={faFacebookSquare} ></FontAwesomeIcon></a>
                    <a href="https://github.com/anup-paul" target='-blank'><FontAwesomeIcon className="mx-3 icon" icon={faGithubSquare} ></FontAwesomeIcon></a>
                    <a href="https://www.linkedin.com/in/anup-paul-7315b2203/" target='-blank'><FontAwesomeIcon className="icon" icon={faLinkedin} ></FontAwesomeIcon></a>
                </div>
                <ReactTyped
                    className="typed-text"
                    strings={['Web Developer', 'Quick Learner', 'Heard-Working']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />

                
            </div>
        </div>
    );
};

export default Header;