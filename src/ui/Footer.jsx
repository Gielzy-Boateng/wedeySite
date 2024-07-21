import WedeyLogo from "./WedeyLogo";
import NavMediaLogos from "./NavMediaLogos";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FooterLinks from "./FooterLinks";

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
    <footer
      className="bg-stone-800 h-[650px] flex items-center flex-col justify-center space-y-20"
      id="contact"
    >
      <WedeyLogo className="grayscale scale-[1.1]" />
      <FooterLinks className="text-white space-x-6" />
      <NavMediaLogos className="flex flex-row space-x-5" />

      <span className="text-white text-lg">
        &copy; All Rights Reserved 2024
      </span>
    </footer>
  );
};

export default Footer;
