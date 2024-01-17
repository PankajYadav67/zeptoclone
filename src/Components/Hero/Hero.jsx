import BigHero1 from "../Assets/BigHero/BigHero2.png";
import BigHero2 from "../Assets/BigHero/bigHero.png";

import Banner from "../Assets/BigHero/paan-corner-banner-desktop.png";
import { FetchBankOffer } from "../BankDiscount/BankFetch";
import { CarouselFetch } from "../Carousel/CarouselFetch";
import { HeroCarousel} from "./HeroCarousel";
import { HeroSmallCarousel } from "./HeroSmallCarousel";
import { ProductCategory } from "./ProductCategory";




export const HeroSection = () => {
  return (
    <div className="mx-12 md:mx-12 mt-4  space-y-6">

      <div className="bg-cover">
        <a href="/" >
          <img src={Banner} alt="Banner has a error" />
        </a>
      </div>


      <HeroCarousel />
      <HeroSmallCarousel/>


      <FetchBankOffer />


      <CarouselFetch />

      <ProductCategory />

    </div>
  );
};
