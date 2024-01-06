import { Footer1 } from "./Footer1"
import { Footer2 } from "./Footer2"


export const FooterMerge = () => {
    return(
        <div className=" ">
         <Footer1/>
         <div className="w-full border-t-2 my-10 border-gray-300 "></div>
         <Footer2/>
         <div className="h-[80px]"></div>
        </div>
    )
}