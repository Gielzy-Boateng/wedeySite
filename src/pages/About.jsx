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
    <main className="overflow-scroll ">
      <Header about="true" />

      {/* This is about info  */}
      <WidthConstraint className="">
        <div className="laptop:flex laptop:items-center laptop:flex-col mdDesktop:flex mdDesktop:flex-row mdDesktop:items-center mdDesktop:justify-center desktop:flex desktop:items-center desktop:flex-row desktop:justify-center mt-36 desktop:mt-10 desktop:gap-x-8">
          <section className="mt-16">
            <h3 className="  text-red-500 text-xl font-semibold">About Us</h3>
            <h1 className="w-[300px] tablet:w-[400px] laptop:w-[450px] laptop:text-3xl tablet:text-4xl bgLaptop:w-[510px] bgLaptop:text-4xl mdDesktop:text-3xl mdDesktop:w-[400px] desktop:w-[600px] text-3xl text-stone-800 desktop:text-4xl font-bold leading-normal mb-5">
              Making Item Delivery From The
              <br /> Market To Your Doorstep A Reality
            </h1>
            <p className="w-[340px] tablet:w-[430px] laptop:w-[500px] bgLaptop:w-[600px] bgLaptop:leading-relaxed mdDesktop:w-[400px] mdDesktop:leading-normal desktop:w-[600px] text-lg mb-8">
              As your representatives at major local markets across the country,
              <br />
              Our sole aim is to provide you with premium services from buying,
              <br />
              packaging and delivering your items from the your market to you.
              <br />
              With the WeDey App your wish will be a reality
            </p>
            <Downloader />
          </section>
          <section className="hidden laptop:block laptop:mt-20 desktop:inline-block desktop:mt-28 ml-">
            <img
              src="/assets/shot.jpg"
              className="w-[580px] smDesktop:w-[600px] laptop:w-[550px]"
            />
          </section>
        </div>
      </WidthConstraint>

      {/* This is about background gradient */}

      <section className="bg-aboutGradient mb-20 text-white mt-28">
        <ul
          className="flex flex-col items-center justify-center gap-24
        laptop:flex laptop:flex-row laptop:items laptop:gap-14 smDesktop:gap-20 desktop:flex desktop:items-center desktop:flex-row desktop:justify-center desktop:gap-56 py-16"
        >
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
      </section>

      {/* This Is Offer Section */}
      <OfferSection />

      {/* This is features section */}
      <Features />

      {/* This is Footer section */}
      <Footer />
    </main>
  );
};

export default About;
