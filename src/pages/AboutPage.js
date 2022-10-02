import React from "react";
import AboutIcons from "../components/AboutIcons";
import AboutTitle from "../components/AboutTitle";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AboutPage() {
  

  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "About", href: "/about", current: true },
    { name: "Projects", href: "/projects", current: false },
  ];
  return (
    <div className="lg:grid lg:h-fit lg:place-items-center">
      <div className="lg:w-3/4 bg-customGray outline-outlineGray outline md:pl-10 md:pr-10 lg:pl-10 lg:pr-10 ">
        <Navbar navigation={navigation} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10">
          <AboutTitle/>
          <AboutIcons/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
