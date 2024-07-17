import { Link } from "react-router-dom";

const Downloader = () => {
  return (
    <span className="  flex  space-x-2 mr-4 desktop:space-x-6 z-0">
      <Link
        to="/"
        className="transition duration-300 hover:transform hover:-translate-y-2 invert-0 hover:invert-[1]"
      >
        <img
          src="/assets/google-play-icon.svg"
          alt="google-play-icon"
          className="w-[190px]"
        />
      </Link>
      <Link
        to="/"
        className="  transition duration-300 hover:transform hover:-translate-y-2 invert-[1] hover:invert-0"
      >
        <img
          src="/assets/app-store-icon.svg"
          alt="app-store-icon"
          className="w-[165px]"
        />
      </Link>
    </span>
  );
};

export default Downloader;
