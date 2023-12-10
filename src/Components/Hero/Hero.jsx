import BigHero1 from "../Assets/BigHero/BigHero2.png";
import BigHero2 from "../Assets/BigHero/bigHero.png";
import Banner from "../Assets/BigHero/paan-corner-banner-desktop.png";
import { ProductCategory } from "../Product Category/ProductCategory";

export const HeroSection = () => {
  return (
    <div>
      
      <div className="w-4/4 mx-10 mt-2 mb-5 h-auto ">
        <a href="/" className="w-100%">
          <img src={Banner} alt="Banner has a error" />
        </a>
      </div>

      <div className="w-4/4 mx-10 mb-5 h-auto">
        <a href="/" className="w-100%">
          <img src={BigHero1} alt="BigHero1 has a error" />
        </a>
      </div>

      <div className="w-4/4 mx-10 mb-5 h-auto">
        <a href="/" className="w-100%">
          <img src={BigHero2} alt="BigHero2 has a error" />
        </a>
      </div>

      <ProductCategory />

    </div>
  );
};
