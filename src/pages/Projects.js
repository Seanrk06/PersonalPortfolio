import React from "react";
import Footer from "../components/Footer";
import Gallary from "../components/Gallary";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

function Projects() {
  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "About", href: "/about", current: false },
    { name: "Projects", href: "/projects", current: true },
  ];
  return (
    <div className="lg:grid lg:h-fit lg:place-items-center">
      <div className="lg:w-3/4 bg-customGray outline-outlineGray outline">
        <Navbar navigation={navigation} />
        <Title
          heading="My Projects"
          body="I have worked on lots of different projects and websites since I began learning in 2020 and below are just a few of them. Feel free to click on them and go to the webpage or the competition submission they're associated with. If inclined, please visit the source code, I am always open to improvments."
        />
        <Gallary />
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
