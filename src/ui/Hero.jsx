import WidthConstraint from "../pages/WidthConstraint";
import Downloader from "./Downloader";
import TextRotator from "./TextRotator";

const Hero = () => {
  return (
    <WidthConstraint className="flex mt-28 flex-col laptop:flex laptop:flex-col laptop:items-center mdDesktop:flex mdDesktop:flex-row mdDesktop:items-center mdDesktop:justify-center  desktop:flex desktop:flex-row desktop:items-center desktop:mt-8">
      <div className="mb-5 ml-5 desktop:mb-10 desktop:ml-14 bgLaptop:space-y-6 space-y-4">
        <TextRotator />
        <h1 className="text-[40px] tablet:w-[400px] laptop:w-[450px] bgLaptop:w-[500px] smDesktop:w-[510px] mdDesktop:w-[450px] mdDesktop:text-[45px] bgLaptop:text-[55px] tablet:text-[45px] w-[300px] desktop:text-[55px] font-semibold text-white desktop:w-[510px] leading-tight">
          WE BRINGING THE LOCAL MARKETS TO YOU
        </h1>
        <p className="text-white text-xl w-[300px] tablet:w-[400px] laptop:w-[450px] bgLaptop:w-[500px] smDesktop:w-[530px] mdDesktop:w-[400px]  desktop:w-[570px]">
          No need to go to the market because WeDey there. Watch remotely as we
          shop your market list live & instantly deliver to you same day
        </p>
        <Downloader />
      </div>
      <div className="hidden laptop:block laptop:mt-14 desktop:block desktop:mt-16">
        <img src="/assets/hero.png" alt="hero" className="w-[550px]" />
      </div>
    </WidthConstraint>
  );
};

export default Hero;
