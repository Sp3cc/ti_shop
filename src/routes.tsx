import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
// import FormRegister from "./components/Register";
import UserPage from "./pages/UserPage";
import RegisterPage from "./pages/RegisterPage";
import { useContext, useEffect } from "react";
import { ProtectRouteContext } from "./contexts/protectRouteContext";

const Router = () => {
  const { isLoggedOrNot } = useContext(ProtectRouteContext);

  useEffect(() => {
    isLoggedOrNot();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/shop" element={<UserPage />} />
    </Routes>
  );
};

export default Router;
