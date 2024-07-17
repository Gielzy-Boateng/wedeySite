import WidthConstraint from "../pages/WidthConstraint";
import Downloader from "./Downloader";
import TextRotator from "./TextRotator";

const Hero = () => {
  return (
    <WidthConstraint className="flex items-center mt-8">
      <div className="mb-10 ml-14 space-y-4">
        <TextRotator />
        <h1 className="text-[55px] font-semibold text-white w-[510px] leading-tight">
          WE BRINGING THE LOCAL MARKETS TO YOU
        </h1>
        <p className="text-white text-xl w-[570px]">
          No need to go to the market because WeDey there. Watch remotely as we
          shop your market list live & instantly deliver to you same day
        </p>
        <Downloader />
      </div>
      <div className="mt-16">
        <img src="/assets/hero.png" alt="hero" className="w-[550px]" />
      </div>
    </WidthConstraint>
  );
};

export default Hero;
