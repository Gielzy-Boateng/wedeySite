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
      <div className="desktop:flex desktop:items-center desktop:justify-center desktop:gap-x-20 ">
        <div className="hidden desktop:inline-block">
          <img src="/assets/shot-2.jpg" alt="shot-2" className="h-[600px]" />
        </div>
        <div className="flex flex-col items-center w-[650px] mb-12">
          <div className="mr-80 desktop:mr-20 mb-5">
            <h1 className="text-xl text-red-500 font-bold capitalize w-[300px] desktop:w-[600px]">
              What we offer
              <br />
              <span className="desktop:text-4xl font-semibold desktop:text-nowrap text-3xl text-stone-800">
                Our Services Are Beyond Compare
              </span>
            </h1>
          </div>
          {offers.map((offer) => (
            <div
              className="bg-stone-100 mb-3 mr-72 desktop:mr-1 desktop:flex desktop:items-center p-5 rounded-lg"
              key={offer.info}
            >
              <img src={offer.imgSrc} alt={offer.alt} className="h-12 mr-5" />
              <p className="w-[300px] text-lg desktop:w-[620px]">
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
