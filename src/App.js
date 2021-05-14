import MessengerCustomerChat from 'react-messenger-customer-chat';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutMe from './Components/AboutMe/AboutMe';

import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import SayHello from './Components/SayHello/SayHello';

function App() {

  return (
    <div>
     
      
      <Router>
        <Navbar></Navbar>

        <Switch>
          <Route path="/home" >
            <Header></Header>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Blogs></Blogs>
            <SayHello></SayHello>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/about">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Blogs></Blogs>
            <SayHello></SayHello>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

     


    </div>
  );
}

export default App;
