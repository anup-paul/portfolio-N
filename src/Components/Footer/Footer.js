import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubSquare, faLinkedin,  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'


const Footer = () => {
    return (
        <div>
           <div className="text-center " style={{color:"white"}} >
                <footer className="align-item-center ">Copyright &copy; 2021 | <a href="" style={{textDecoration:"none",color:"#f9ab00"}} >Anup Paul</a></footer>
                <div className="d-flex justify-content-center">
                    <a href="https://www.facebook.com/anuppaul977/" target='-blank'><FontAwesomeIcon className="footer-icon" icon={faFacebookSquare} ></FontAwesomeIcon></a>
                    <a href="https://github.com/anup-paul" target='-blank'><FontAwesomeIcon className="mx-3 footer-icon" icon={faGithubSquare} ></FontAwesomeIcon></a>
                    <a href="https://www.linkedin.com/in/anup-paul-7315b2203/" target='-blank'><FontAwesomeIcon className="footer-icon" icon={faLinkedin} ></FontAwesomeIcon></a>
                    <a href="https://www.mail.com" target='-blank'><FontAwesomeIcon className="footer-icon mx-3" icon={faEnvelope} ></FontAwesomeIcon></a>
                </div>
           </div>
        </div>
    );
};

export default Footer;