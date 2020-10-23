import React from "react";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import Header from "./container/header/Header";
import About from "./container/about/About";
import VideoPage from "./container/videoSection/VideoPage";
import Courses from "./container/courses/Courses";
import Message from "./container/Messages/Message";
import PhotoGallary from "./container/gallery/PhotoGallery";
import Footer from "./container/footer/Footer";

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
      <div className="App">
        <Header />
        <About />
        <Message />
        <VideoPage />
        <Courses />
        <PhotoGallary />
        <Footer />
      </div>
    );
  }
}

export default App;
