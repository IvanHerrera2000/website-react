import React from "react";
import Home from "components/Home.js";
import Portfolio from "components/Portfolio";
import Services from "components/Services";
import Milestones from "components/Milestones";
import Blog from "components/Blog";
import Video from "components/Video";
import Pricing from "components/Pricing";
import Testimonials from "components/Testimonials";

function App() {
  return (
    <div>
      <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      <Video />
      <Pricing />
      <Testimonials />
    </div>
  );
}

export default App;
