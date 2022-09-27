import React from "react";
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
      <div className="lg:w-3/4 bg-customGray outline-outlineGray outline">
        <Navbar navigation={navigation} />
        <Title heading="Hello" body="body" />
        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
