import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Typewriter from "typewriter-effect";
import Header from "../components/Header";
import Photos from "../components/Photos";
import About from "../components/About";
import Projects from "../components/Projects";
import Gallary from "../components/Gallary";
import Work from "../components/Work";

function Home() {
  return (
    <div className="lg:grid lg:h-fit lg:place-items-center">
      <div className="lg:w-2/3 bg-customGray outline-outlineGray outline">
        <Navbar />
        <Header/>
        <Photos/>
        <div className="lg:h-[21rem]"></div>
        <Work/>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
