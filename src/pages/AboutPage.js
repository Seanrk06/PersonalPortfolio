import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function AboutPage() {
    return (
      <div className="lg:grid lg:h-fit lg:place-items-center">
        <div className="lg:w-2/3 bg-customGray outline-outlineGray outline">
          <Navbar />
          <Footer />
        </div>
      </div>
    );
  }

export default AboutPage