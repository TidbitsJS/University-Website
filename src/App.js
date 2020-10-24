import React from "react";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./container/header/Topbar";
import About from "./container/about/About";
import VideoPage from "./container/videoSection/VideoPage";
import Courses from "./container/courses/Courses";
import Message from "./container/Messages/Message";
import PhotoGallary from "./container/gallery/PhotoGallery";
import Footer from "./container/footer/Footer";
import Slider from "./container/header/Slider";
import FullGallery from "./container/gallery/FullGallery";
import Contact from "./components/contact/Contact";
import AboutPage from "./container/about/AboutPage";
import FacultyPage from "./components/Faculty/FacultyPage";
import Event from "./components/Events/Event";
import Notify from "./components/Notification/Notify";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AOS.init({
      duration: 900,
    });
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Topbar />
          <Switch>
            <Route exact path="/">
              <Slider />
              <About />
              <Message />
              <VideoPage />
              <Courses />
              <PhotoGallary />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/gallery">
              <FullGallery />
            </Route>
            <Route exact path="/courses">
              <Courses />
            </Route>
            <Route exact path="/events">
              <Event />
            </Route>
            <Route exact path="/notification">
              <Notify />
            </Route>
            <Route exact path="/faculty">
              <FacultyPage />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
