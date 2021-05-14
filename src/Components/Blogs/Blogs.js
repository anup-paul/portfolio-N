import React from 'react';
import javaScript from '../../images/JsMethod.png';
import ES6 from '../../images/ES6.jpeg';
import react from '../../images/React.png';
import BlogDetails from './BlogDetails';


const blogInfo = [
    {
        img:javaScript,
        title:'10 Important JavaScript methods.',
        description:'JavaScript methods are actions that can be performed on objects. A JavaScript method is a property containing a function definition.',
        link:'https://anuppaul1845.medium.com/10-important-javascript-methods-616727413c16'
    },
    {
        img:ES6,
        title:'LET’S LEARN ES6!',
        description:'ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript',
        link:'https://anuppaul1845.medium.com/lets-learn-es6-39f97e77068d'
    },
    {
        img:react,
        title:'10 Most Important Topics In React',
        description:'All we know that react is JavaScript library for user interface.React is a JavaScript library its not a frame work.',
        link:'https://anuppaul1845.medium.com/10-most-important-topics-in-react-228ce4dcac21'
    }
]

const Blogs = () => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="row container">
                    {
                        blogInfo.map(info=><BlogDetails info={info} ></BlogDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;