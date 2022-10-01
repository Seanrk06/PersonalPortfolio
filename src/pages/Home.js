import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Photos from "../components/Photos";
import Work from "../components/Work";
import ErrorAlert from "../components/errorAlert";
import LoadingAlert from "../components/loadingAlert";
import SucessAlert from "../components/sucessAlert";
import MailchimpForm from "../components/CustomForm";

function Home() {
  // For setting stae of alert (is passed to mailchimpform child then to customformchild)
  const [errorState, setErrorState] = useState(false);
  const [sucessState, setSucessState] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "About", href: "/about", current: false },
    { name: "Projects", href: "/projects", current: false },
  ];

  return (
    <div className="grid h-fit place-items-center">
      <div className="lg:w-3/4 bg-customGray outline-outlineGray outline">
        <Navbar navigation={navigation} />
        <Header />
        <Photos />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <Work />
          {/* <Contact/> */}
          <MailchimpForm
            setSucessState={setSucessState}
            setErrorState={setErrorState}
            setLoadingState={setLoadingState}
          />
        </div>
        <div className="mt-10">{errorState ? <ErrorAlert /> : null}</div>
        <div className="mt-10">{sucessState ? <SucessAlert /> : null}</div>
        <div className="mt-10">{loadingState ? <LoadingAlert /> : null}</div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
