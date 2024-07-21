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
      <NavMediaLogos />
    </footer>
  );
};

export default Footer;
