import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebookF, faLinkedinIn, faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons'


export const Footer2 = () => {
    return (
        <div className="mx-10 space-y-5 grid grid-cols-3  mt-5 font-lota justify-evenly">

            <div>
                <div className="w-24 mb-8 cursor-pointer">
                    <img className="w-full h-auto object-contain" src="https://www.zeptonow.com/images/logo.svg" alt="logo" />
                </div>

                <div className="flex w-64 h-[40px] gap-8 cursor-pointer">
                   <a target="_blank" href="https://www.instagram.com/zeptonow/"><FontAwesomeIcon icon={faInstagram} style={{ color: "#878787", fontSize: "1.7rem" }} /></a> 
                   <a target="_blank" href="https://twitter.com/ZeptoNow"><FontAwesomeIcon icon={faTwitter} style={{ color: "#878787", fontSize: "1.7rem" }} /></a> 
                    <a target="_blank" href="https://www.facebook.com/Zeptonow/"><FontAwesomeIcon icon={faFacebookF} style={{ color: "#878787", fontSize: "1.5em" }} /></a>
                    <a target="_blank" href="https://www.linkedin.com/company/zeptonow/"><FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#878787", fontSize: "1.7rem" }} /></a>
                </div>

                <p className="text-[#878787]">© KiranaKart Technologies Private Limited</p>

            </div>

            <div className="grid grid-cols-2 cursor-pointer" >
                <p>Home</p>
                <p>Privacy Policy</p>

                <p>Delivery Areas</p>
                <p>Terms of Use</p>

                <p>Careers</p>
                <p>Responsible Disclosure Policy</p>


                <p>Customer Support</p>
                <p>Mojo - a Zepto Blog</p>

                <p>Press</p>

            </div>

            <div className="flex cursor-default flex-col items-center space-y-5  ">

                <p >Download APP</p>
                

                <button className="bg-white border-gray-400 hover:bg-gray-100 border hover:border-gray-500 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"><FontAwesomeIcon icon={faGooglePlay} />     Get it on play store</button>
                <button className="bg-white  border-gray-400 hover:bg-gray-100 border hover:border-gray-500 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out"><FontAwesomeIcon icon={faApple} />    Get it on app store</button>
            </div>

        </div>
    )
}

