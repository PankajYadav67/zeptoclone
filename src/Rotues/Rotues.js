// Rotues imports
import { Route, Routes } from "react-router-dom";

// items Which are imported
import { Home } from "../Pages/Home";
import { ZeptoNavbar } from "../Components/Navbar/MainNavbar";
import { LoginMerge } from "../Components/Login/LoginMerge";
import { Product } from "../Components/Product/Product";

//Main Routes Function
export const RoutesMain = () => {
  return (
    <div>
      <ZeptoNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginMerge />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<DefaultRoute/>}/>
      </Routes>
    </div>
  );
};

// Default Routes
export const DefaultRoute = () => {
  return (
    <div className="min-h-screen flex bg-slate-200 overflow-hidden justify-center items-center w-full">
      <div className="text-center">
        <h2 className="font-bold text-8xl hover:underline decoration-sky-500 ">404 Not Found</h2>
         <br/>
        <h5 className="text-5xl font-bold ">You're Entered Invaild URL. Please Enter <span className="hover:underline decoration-pink-500">Correct</span> URL.</h5>
      </div>
    </div>
  );
}
























