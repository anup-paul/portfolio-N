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

function App() {

  return (
    <div>
      <Router>
        <Navbar></Navbar>

        <Switch>
          <Route path="/home" >
            <Header></Header>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <Contact></Contact>
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
          <Route path="/contract">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <Contact></Contact>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>




    </div>
  );
}

export default App;
