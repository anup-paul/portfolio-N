import React from 'react';
import ProjectDetails from './ProjectDetails';
import hlwNomads from '../../images/hlwNomands.png';
import hlwNomands2 from '../../images/hlwNomands2.png';
import hlwNomands3 from '../../images/hlwNomandsImg3.png';
import bookshop from '../../images/bookshop.png';
import bookshop2 from '../../images/bookShopImg2.png';
import bookshop3 from '../../images/BookShopImg3.png';
import paulRider from '../../images/paulrider.png';
import paulRider2 from '../../images/riderimg2.png';
import paulRider3 from '../../images/riderImg3.png';
import leagueHub from '../../images/leagueHub .png';
import leagueHub2 from '../../images/leaguehubImg2.png';
import './Project.css'


const projectInfo = [
    {
        name: 'Hlw Nomads',
        image: hlwNomads,
        image2: hlwNomands2,
        image3: hlwNomands3,
        id:1,
        description: 'This is a full stack Travel agent web site. On this web site, there is an admin panel and a users panel. Users can book using a Stripe payment method.And also, users can give feedback on this web site.  Admin can appoint another admin via email and also delete features.  Another thing is that the admin can see all the booking list and users can see only their individual booking which one they selected.',
        liveSiteURl: 'https://travel-service-ded51.web.app/',
        codeURL: 'https://github.com/anup-paul/TravellAgentService-Client-Site',
        tools:'React, React-Router, JavaScript, Node.js, Bootstrap, Express.js MongoDB, Firebase Authentication, Heroku.'
    },
    {
        name: 'BookShop',
        image: bookshop,
        image2: bookshop2,
        image3: bookshop3,
        id:2,
        description: 'Its a full-stack web site.Users have to login to use features of this website. If a user does not already have an account, he or she can create one using his or her email address.And also, users can login with a Google account. On the dashboard, users can add books and delete books. Finally, a user can select a book and user can see the booklist which he or she selected.',
        liveSiteURl: 'https://full-stack-client-anup-paul.web.app/',
        codeURL: 'https://github.com/anup-paul/BookShop-clientSite',
        tools:'React, React-Router, JavaScript, Node.js, Bootstrap, Express.js MongoDB, Firebase Authentication, Heroku.'
    },
    {
        name: 'Paul Rider',
        image: paulRider,
        image2: paulRider2,
        image3: paulRider3,
        id:3,
        description: 'Ride sharing website. For sharing rides, users have to login in first. There are two login options. Users can log in using a Google account as well as an email account.However, before you can login with an email account, you must first create an email account.On this web site, users can choose rides and also users can select the place where the ride starts and where the ride ends.',
        liveSiteURl: 'https://react-auth-anup-paul.web.app/',
        codeURL: 'https://github.com/anup-paul/PaulRider-AuthProject',
        tools: 'React, React-Router, React-HookForm, JavaScript, Node.js, Bootstrap,Firebase Authentication, Firebae Hosting' 
    },
    {
        name: 'League Hub',
        image: leagueHub,
        image2: leagueHub2,
        image3: leagueHub,
        id:4,
        description: 'On this web site, user can see all the details of which league he or she selected.If the selected league is a male-league, then the details page shows a male photo and if the selected league is a female, then the details page shows a female photo. In the footer, I also used some fontawsome icons.',
        liveSiteURl: ' https://leaguehub.netlify.app/',
        codeURL: 'https://github.com/anup-paul/LeagueHub',
        tools : 'React, React-Router,  JavaScript, Node.js, Bootstrap, Font AwesomeIcon, Netlify Hosting'
    }

]


const Projects = () => {
    return (
        <div className=" mb-5 pb-5" >
            <div className="d-flex justify-content-center" >
                <div className="row container">
                    <h1 className="text-center mt-5 mb-3 pt-5" style={{color:"#f9ab00"}}> <b><b style={{color:"white"}}>Some of my</b> Projects</b> </h1>
                    {
                        projectInfo.map(project => <ProjectDetails key={project.id} project={project} ></ProjectDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;