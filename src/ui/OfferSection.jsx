import WidthConstraint from "../pages/WidthConstraint";

const OfferSection = () => {
  const offers = [
    {
      imgSrc: "assets/payment-2.svg",
      title: "Unbeatable Prices:",
      info: " With our agents at various markets, we do not just buy but we bargain on your behalf to get your item at an affordable price",
      alt: "Payment",
      change: "text-blue-500",
    },
    {
      imgSrc: "assets/delivery.svg",
      title: "Secured Payment:",
      info: " Transactions made on the app are fast and secured. Also, our app supports multiple payments options",
      alt: "Delivery",
      change: "text-green-500",
    },
    {
      imgSrc: "assets/price.svg",
      title: "Instant Delivery:",
      info: " This feature allows you to communicate with our errand representative at the market",
      alt: "Price",
      change: "text-red-500",
    },
  ];

  return (
    <WidthConstraint>
      <div className="mdDesktop:flex mdDesktop:flex-row mdDesktop:flex-items mdDesktop:justify-center mdDesktop: desktop:flex desktop:items-center desktop:justify-center desktop:gap-x-20 ">
        <div className="hidden mdDesktop:block desktop:inline-block">
          <img src="/assets/shot-2.jpg" alt="shot-2" className="h-[600px]" />
        </div>
        <div className="flex flex-col items-center mdDesktop:w-[500px] w-[650px] desktop:w-[650px] mb-12">
          <div className="mr-80 mdDesktop:mr-0 bgLaptop:mr-48 desktop:mr-44 mb-5">
            <h1 className="text-xl text-red-500 font-bold capitalize w-[300px] tablet:w-[400px] bgLaptop:w-[500px] tablet:ml-36 desktop:w-[600px]">
              What we offer
              <br />
              <span className="desktop:text-4xl font-semibold bgLaptop:text-nowrap mdDesktop:text-wrap desktop:text-nowrap text-3xl text-stone-800">
                Our Services Are Beyond Compare
              </span>
            </h1>
          </div>
          {offers.map((offer) => (
            <div
              className="bg-stone-100 mb-3 mr-72 tablet:mr-48 laptop:mr-28 bgLaptop:mr-12 smDesktop:-mr-10 desktop:mr-1 desktop:flex desktop:items-center p-5 rounded-lg"
              key={offer.info}
            >
              <img src={offer.imgSrc} alt={offer.alt} className="h-12 mr-5" />
              <p className="w-[300px] tablet:w-[350px] laptop:w-[410px] bgLaptop:w-[480px] smDesktop:w-[570px] mdDesktop:w-[350px] text-lg desktop:w-[620px]">
                <span className={`font-bold ${offer.change}`}>
                  {offer.title}
                </span>
                {offer.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </WidthConstraint>
  );
};

export default OfferSection;
