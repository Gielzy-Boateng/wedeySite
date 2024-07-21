import { cn } from "../utils/cn";
import LinkItem from "./LinkItem";

const NavMediaLogos = ({ className, isNav = false }) => {
  const social = [
    {
      to: "/",
      src: "/assets/fb.svg",
      alt: "Fb Logo",
      bg: "blue-700",
      delay: 0,
    },
    {
      to: "/",
      src: "/assets/twitter.svg",
      alt: "Twitter Logo",
      bg: "blue-500",
      delay: 200,
    },
    {
      to: "/",
      src: "/assets/instagram.svg",
      alt: "instagram Logo",
      bg: "red-500",
      delay: 300,
    },
    {
      to: "https://api.whatsapp.com/send?phone=233557582670",
      src: "/assets/whatsapp.svg",
      alt: "whatsapp Logo",
      bg: "green-500",
      delay: 400,
    },
  ];

  return (
    <div
      className={cn(
        "desktop:flex desktop:justify-center desktop:items-center desktop:space-x-8",
        className
      )}
    >
      {social.map((social) => (
        <LinkItem social={social} key={social.alt} isNav={isNav} />
      ))}
    </div>
  );
};

export default NavMediaLogos;
