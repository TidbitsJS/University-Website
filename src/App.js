import React from "react";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }
  render() {
    return (
      <Router>
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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/gallery">
              <FullGallery />
            </Route>
            <Route>
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
