import { useLocation } from "react-router-dom";
import WidthConstraint from "../pages/WidthConstraint";
import { useEffect } from "react";

const Features = () => {
  const leftSide = [
    {
      imgSrc: "assets/list.svg",
      title: "Product Categories",
      info: " We have a wide range of items grouped into different catogories including furniture, electronics, fashion etc",
      alt: "list",
      change: "text-blue-500",
    },
    {
      imgSrc: "assets/chat.png",
      title: "Instant Messaging:",
      info: "  This feature allows you to communicate with our errand representative at the market",
      alt: "chat",
      change: "text-green-500",
    },
    {
      imgSrc: "assets/livetrack.png",
      title: "Live Tracking",
      info: " You can track your order in real-time",
      alt: "livetrack",
      change: "text-red-500",
    },
  ];

  const rightSide = [
    {
      imgSrc: "assets/cart.png",
      title: "Shopping Cart",
      info: " Keep records of items to purchase before cashing-out",
      alt: "cart",
      change: "text-blue-500",
    },
    {
      imgSrc: "assets/pay.png",
      title: "Payment:",
      info: " You can pay directly on the app with credit cards, debit cards or mobile money",
      change: "text-green-500",
    },
    {
      imgSrc: "assets/review.png",
      title: "Ratings and Review",
      info: " Find and leave reviews on products, errand representatives or services",
      alt: "Price",
      change: "text-red-500",
    },
  ];

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

  return (
    <WidthConstraint className="mb-28 mt-32">
      <div
        className="flex flex-col items-center justify-center mb-20 ml-5"
        id="features"
      >
        <h1 className="text-lg font-bold text-red-500">Features</h1>
        <h2 className="text-stone-900 text-3xl font-bold tablet:w-[400px] laptop:w-[450px] laptop:ml-3 tablet:ml-16">
          Digitizing Our Local Markets
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center laptop:mr-28 mdDesktop:flex mdDesktop:flex-row mdDesktop:items-center mdDesktop:justify-between mdDesktop:mr-2 mdDesktop:ml-10 desktop:flex desktop:flex-row desktop:items-center desktop:justify-between desktop:ml-16 desktop:mr-1">
        <div className="flex flex-col ">
          {/* left */}
          {leftSide.map((left) => (
            <div
              key={left.info}
              className="mb-8 laptop:mb-16 desktop:mb-8 w-80 mdDesktop:w-60 desktop:w-80"
            >
              <img src={left.imgSrc} alt={left.alt} className="h-12" />
              <h1 className="text-lg tablet:w-[450px] mdDesktop:w-[250px] desktop:w-[350px]">
                <span className="font-bold text-lg">{left.title}</span>
                <br />
                {left.info}
              </h1>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="hidden mdDesktop:block desktop:block">
          <img
            src="/assets/shot-3.jpg"
            alt="shot-3"
            className="h-[570px] desktop:h-[570px] mdDesktop:h-[450px]"
          />
        </div>

        {/* right */}

        <div className="flex flex-col desktop:mr-5 ">
          {rightSide.map((right) => (
            <div key={right.info} className="mb-8 laptop:mb-16 w-80">
              <img src={right.imgSrc} alt={right.alt} className="h-12" />
              <h1 className="text-lg tablet:w-[400px] mdDesktop:w-[250px] desktop:w-[350px] ">
                <span className="font-bold text-lg">{right.title}</span>
                <br />
                {right.info}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </WidthConstraint>
  );
};

export default Features;



// https://github.com/intel/haxm/wiki/Installation-Instructions-on-Windows