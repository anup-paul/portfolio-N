import React from 'react';
import ProjectDetails from './ProjectDetails';
import hlwNomads from '../../images/hlwNomands.png';
import paulRider from '../../images/paulrider.png';
import './Project.css'


const projectInfo = [
    {
        name: 'Hlw Nomads',
        image: hlwNomads,
        id:1,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta eos, maiores illo odio mollitia accusamus aliquam deserunt assumenda suscipit.',
        liveSiteURl: 'https://travel-service-ded51.web.app/',
        codeURL: 'https://github.com/anup-paul/TravellAgentService-Client-Site'
    },
    {
        name: 'BookShop',
        image: hlwNomads,
        id:2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta eos, maiores illo odio mollitia accusamus aliquam deserunt assumenda suscipit.',
        liveSiteURl: 'https://full-stack-client-anup-paul.web.app/',
        codeURL: 'https://github.com/anup-paul/BookShop-clientSite'
    },
    {
        name: 'BookShop',
        image: paulRider,
        id:3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta eos, maiores illo odio mollitia accusamus aliquam deserunt assumenda suscipit.',
        liveSiteURl: 'https://full-stack-client-anup-paul.web.app/',
        codeURL: 'https://github.com/anup-paul/BookShop-clientSite'
    },
    {
        name: 'BookShop',
        image: paulRider,
        id:4,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta eos, maiores illo odio mollitia accusamus aliquam deserunt assumenda suscipit.',
        liveSiteURl: 'https://full-stack-client-anup-paul.web.app/',
        codeURL: 'https://github.com/anup-paul/BookShop-clientSite'
    }

]


const Projects = () => {
    return (
        <div className="project-section" >
            <div className="d-flex justify-content-center" >
                <div className="row w-75">
                    <h1 className="text-center mt-5" style={{color:"#f9ab00"}}>This are my recent projects</h1>
                    {
                        projectInfo.map(project => <ProjectDetails key={project.id} project={project} ></ProjectDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;