import React from "react";
import Home from "components/Home.js";
import Portfolio from "components/Portfolio";
import Services from "components/Services";
import Milestones from "components/Milestones";
import Blog from "components/Blog";

function App() {
  return (
    <div>
      <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
    </div>
  );
}

export default App;
