import Downloader from "../ui/Downloader";
import Features from "../ui/Features";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import OfferSection from "../ui/OfferSection";
import WidthConstraint from "./WidthConstraint";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  const pathName = useLocation();
  // const routePath = pathName;
  // console.log(routePath);

  useEffect(
    function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    [pathName]
  );

  useEffect(function () {
    document.title = "Wedey Online | About us ";
  }, []);

  return (
    <div className="overflow-scroll">
      <Header about="true" />

      {/* This is about info  */}
      <WidthConstraint className="ml-5 desktop:ml-10 ">
        <div className="desktop:flex desktop:items-center desktop:flex-row desktop:justify-center mt-36 desktop:mt-10 desktop:gap-x-8">
          <div className="mt-16">
            <h3 className="w-[300px]  text-red-500 text-xl font-semibold">
              About Us
            </h3>
            <h1 className="w-[300px] desktop:w-[600px] text-3xl text-stone-800 desktop:text-4xl font-bold leading-normal mb-5">
              Making Item Delivery From The
              <br /> Market To Your Doorstep A Reality
            </h1>
            <p className="w-[340px] desktop:w-[600px] text-lg mb-8">
              As your representatives at major local markets across the country,
              <br />
              Our sole aim is to provide you with premium services from buying,
              <br />
              packaging and delivering your items from the your market to you.
              <br />
              With the WeDey App your wish will be a reality
            </p>
            <Downloader />
          </div>
          <div className="hidden desktop:inline-block desktop:mt-28 ml-">
            <img src="/assets/shot.jpg" className="w-[580px]" />
          </div>
        </div>
      </WidthConstraint>

      {/* This is about background gradient */}

      <div className="bg-aboutGradient mb-20 text-white mt-28">
        <ul className="flex flex-col items-center justify-center gap-24 desktop:flex desktop:items-center desktop:flex-row desktop:justify-center desktop:gap-56 py-16">
          <li className="text-lg font-semibold">
            <span className="text-5xl font-bold">2024</span>
            <br />
            Current Users
          </li>
          <li className="text-lg">
            <span className="text-5xl font-bold">1,320</span>
            <br />
            &nbsp;&nbsp;&nbsp; Downloads
          </li>
          <li className="lg">
            <span className="text-5xl font-bold">450</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reviews
          </li>
        </ul>
      </div>

      {/* This Is Offer Section */}
      <OfferSection />

      {/* This is features section */}
      <Features />

      {/* This is Footer section */}
      <Footer />
    </div>
  );
};

export default About;
