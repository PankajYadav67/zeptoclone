// Rotues imports
import { Route, Routes } from "react-router-dom";

// items Which are imported
import { Home } from "../Pages/Home";
import { ZeptoNavbar } from "../Components/Navbar/MainNavbar";
import { LoginMerge } from "../Components/Login/LoginMerge";
import { Cart } from "../Components/Cart/Cart";
import { Products } from "../Components/Product/Products";
import { Product } from "../Components/Product/Product";
import { MyAccount } from "../Components/Login/MyAccount";
import { useAuth } from "../Context/AuthContext";

//Main Routes Function
export const RoutesMain = () => {
  const { isLoggedIn, username } = useAuth();
  return (
    <div>
      <ZeptoNavbar />
      <Routes>
        <Route path={isLoggedIn ? `/${username}/` : "/"} element={<Home />} />

        {isLoggedIn ? (
          <Route path={`/${username}/myaccount`} element={<MyAccount />} />
        ) : (
          <Route path="/auth/login" element={<LoginMerge />} />
        )}
        <Route
          path={isLoggedIn ? `/cart/${username}` : "/cart"}
          element={<Cart />}
        />

        <Route
          path={isLoggedIn ? `/${username}/products` : "/products"}
          element={<Products />}
        />
        <Route path="/:username/product/:id" element={<Product />} />

        <Route path="*" element={<DefaultRoute />} />
      </Routes>
    </div>
  );
};

// Default Routes
export const DefaultRoute = () => {
  return (
    <div className="min-h-screen flex bg-slate-200 overflow-hidden justify-center items-center w-full">
      <div className="text-center">
        <h2 className="font-bold text-8xl hover:underline decoration-sky-500 ">
          404 Not Found
        </h2>
        <br />
        <h5 className="text-5xl font-bold ">
          You're Entered Invaild URL. Please Enter{" "}
          <span className="hover:underline decoration-pink-500">Correct</span>{" "}
          URL.
        </h5>
      </div>
    </div>
  );
};
