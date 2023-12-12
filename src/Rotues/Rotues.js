import { Route, Routes } from "react-router-dom";
import { LoginMain } from "../Pages/LoginMain";
import { Home } from "../Pages/Home";


export const RoutesMain = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginMain />} />
        <Route path="*" element={<DefaultRoute/>}/>
      </Routes>
    </div>
  );
};


export const DefaultRoute = () => {
  return (
    <div className="min-h-screen flex bg-slate-200 justify-center items-center w-full">
      <div className="text-center">
        <h2 className="font-bold text-8xl hover:underline decoration-sky-500 ">404 Not Found</h2>
         <br/>
        <h5 className="text-5xl font-bold ">You're Entered Invaild URL. Please Enter <span className="hover:underline decoration-pink-500">Correct</span> URL.</h5>
      </div>
    </div>
  );
}
























