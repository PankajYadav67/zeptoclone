import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import riceCereals from "../Assets/ProductCategory/4afbcc5e-c65e-497a-8234-a30b375394fa-Rice_&_Cereals-01.png";
import poojaNeeds from "../Assets/ProductCategory/Pooja_Needs-01.png";
import cleaningAids from "../Assets/ProductCategory/Cleaning_Aids-01_(1).png";
import partyNeeds from "../Assets/ProductCategory/Party_Needs-01.png";
import honey from "../Assets/ProductCategory/Honey_&_Spreads-01.png";
import fruitsSeed from "../Assets/ProductCategory/Fruits_&_Seeds-01.png";
import cutsSprouts from "../Assets/ProductCategory/Cuts_and_Sprouts-01.png";
import oralCare from "../Assets/ProductCategory/Oral_Care-01.png";



export const ProductCategory = () => {
  let arr = [riceCereals, poojaNeeds, cleaningAids, partyNeeds, honey, fruitsSeed, cutsSprouts, oralCare];

  return (
    <div>
      <div className="my-2 flex justify-between font-medium items-center">
        <h1 className="justify-start text-roboto">Product Category</h1>
        <button className="justify-end" style={{ color: "#FB3A68" }}>
          <h1 className="gap-3"> See All
            <FontAwesomeIcon icon={faArrowRight} style={{ color: "#FB3A68" }} />
          </h1>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 justify-evenly gap-4 mx-10">

        {arr.map((src, index) => (<div key={index} className="w-11/12 mx-auto">
          <img src={src} alt={`Product ${index + 1}`} className="w-full h-auto" />
        </div>))};
        
      </div>
    </div>
  );
};
