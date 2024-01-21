

import Banner1 from "../Assets/BigHero/paan-corner-banner-desktop.png";
import { FetchBankOffer } from "../BankDiscount/BankFetch";
import { CarouselFetch } from "../Carousel/CarouselFetch";
import { HeroCarousel} from "./HeroCarousel";
import { HeroSmallCarousel } from "./HeroSmallCarousel";
import { Banner } from "./Banner";
import { ProductCategory } from "./ProductCategory";
import { HowItWorks } from "./HowItWorks";




export const HeroSection = () => {
  return (
    <div className="mx-12 md:mx-12 mt-4  space-y-6">
      <Banner/>

      <div className="bg-cover">
        <a href="/" >
          <img src={Banner1} alt="Banner has a error" />
        </a>
      </div>


      <HeroCarousel />
      <HeroSmallCarousel/>


      <FetchBankOffer />


      <CarouselFetch />

      <ProductCategory />
      <hr />

      <HowItWorks/>

    </div>
  );
};