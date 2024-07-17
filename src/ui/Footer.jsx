import WedeyLogo from "./WedeyLogo";
import NavMediaLogos from "./NavMediaLogos";
import { useLocation } from "react-router-dom";
import HomeNav from "./HomeNav";
import { useEffect } from "react";
import FooterMediaLogos from "./FooterMediaLogos";

const Footer = () => {
  const pathName = useLocation();

  useEffect(
    function () {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        // left: 0,
        behavior: "smooth",
      });
    },
    [pathName]
  );

  return (
    <div
      className="bg-stone-800 h-[650px] flex items-center flex-col justify-center space-y-20"
      id="contact"
    >
      <WedeyLogo className="grayscale scale-[1.1]" />
      <HomeNav className="text-white space-x-6" />
      <FooterMediaLogos />
    </div>
  );
};

export default Footer;
