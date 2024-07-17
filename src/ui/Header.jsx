import { cn } from "../utils/cn";
import WedeyLogo from "./WedeyLogo";
import NavMediaLogos from "./NavMediaLogos";
import PageNav from "./PageNav";
import { useLocation } from "react-router-dom";

const Header = ({ about }) => {
  const location = useLocation();

  return (
    <header
      className={cn(
        "h-20 flex items-center justify-between fixed w-screen z-50",
        about && "bg-white"
      )}
    >
      <WedeyLogo className="z-50 ml-[15px]" />
      {location.pathname === "/about" && <PageNav className="space-x-6" />}
      <NavMediaLogos className="mr-28" />
    </header>
  );
};

export default Header;
