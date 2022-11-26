import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Photos from "../components/Photos";
import Work from "../components/Work";
import Contact from "../components/Contact";

function Home() {
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
          <Contact/>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
