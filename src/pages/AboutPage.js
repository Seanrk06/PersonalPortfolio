import React from "react";
import AboutIcons from "../components/AboutIcons";
import AboutTitle from "../components/AboutTitle";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title";

function AboutPage() {
  

  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "About", href: "/about", current: true },
    { name: "Projects", href: "/projects", current: false },
  ];
  return (
    <div className="lg:grid lg:h-fit lg:place-items-center">
      <div className="lg:w-2/3 bg-customGray outline-outlineGray outline h-screen">
        <Navbar navigation={navigation} />
        <div className="grid grid-cols-2">
          <AboutTitle/>
          <AboutIcons/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;

{/* <h1
id="Header"
className="m-12 animate-fadein text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl"
>
About Me
</h1>
<p className="m-12 text-base text-1xl text-zinc-600 ">
My name is Sean Klein, I started to learn how to program in 2020 and
from there on I've gone from writing rock paper sicorrers in Python to
building websites like the one you looking at right now. Im currently
interested
</p> */}