import React from "react";
import "./App.css";
import Header from "./container/header/Header";
import About from "./container/about/About";
import VideoPage from "./container/videoSection/VideoPage";
import Courses from "./container/courses/Courses";
import Message from "./container/Messages/Message";
import PhotoGallary from "./container/gallery/PhotoGallery";
import Footer from "./container/footer/Footer";

function App() {
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

export default App;
