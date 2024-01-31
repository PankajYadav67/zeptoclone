import Banner1 from "../Assets/BigHero/paan-corner-banner-desktop.png";
import { FetchBankOffer } from "../BankDiscount/BankFetch";
import { CarouselFetch } from "../Carousel/CarouselFetch";
import { HeroCarousel } from "./HeroCarousel";
import { HeroSmallCarousel } from "./HeroSmallCarousel";
import { ProductCategory } from "./ProductCategory";
import { HowItWorks } from "./HowItWorks";
import delivery from "./delivery.jpg"


export const HeroSection = () => {
  return (
    <div>
      <div className="bg-cover">
        <a href="/" >
          <img src={delivery} alt="10minImg" />
        </a>
      </div>
      <div className="mx-12 md:mx-12 mt-4  space-y-6">

        <div className="bg-cover">
          <a href="/" >
            <img src={Banner1} alt="panImg" />
          </a>
        </div>




        <HeroCarousel />
        <HeroSmallCarousel />


        <FetchBankOffer />


        <CarouselFetch />

        <ProductCategory />
        <hr />

        <HowItWorks />

      </div>
    </div>
  );
};
