import React from "react";
import "./App.css";
import Header from "./container/header/Header";
import About from "./container/about/About";
import VideoPage from "./container/videoSection/VideoPage";
import Courses from "./container/courses/Courses";
import Message from "./container/Messages/Message";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <VideoPage />
      <Courses />
      <Message />
    </div>
  );
}

export default App;
