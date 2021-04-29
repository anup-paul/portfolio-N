import React from 'react';
import ReactTyped from 'react-typed';

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Anup Paul</h1>
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