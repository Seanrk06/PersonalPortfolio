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
          body="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
        />
        <Gallary />
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
