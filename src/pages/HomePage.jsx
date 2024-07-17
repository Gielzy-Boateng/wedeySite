import { useLocation } from "react-router-dom";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Hero from "../ui/Hero";
import { useEffect } from "react";

const HomePage = () => {
  const pathName = useLocation();

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
    document.title = "Wedey Online";
  }, []);

  return (
    <div className=" grid grid-rows-[auto_1fr_auto] bg-size-200 w-screen bg-linearGradient animate-gradient z-40 overflow-clip transition duration-300 mt-0 mb-0 overflow-x-hidden">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default HomePage;
