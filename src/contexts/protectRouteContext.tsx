import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectRouteContextData {
  isLoggedOrNot: () => void;
}

export const ProtectRouteContext = createContext({} as ProtectRouteContextData);

interface ProtectRouteProviderProps {
  children: ReactNode;
}

export function ProtectRouteProvider({ children }: ProtectRouteProviderProps) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const isLoggedOrNot = () => {
    if (token) {
      navigate("/shop");
    } else {
      navigate("/");
    }
  };

  return (
    <ProtectRouteContext.Provider value={{ isLoggedOrNot }}>
      {children}
    </ProtectRouteContext.Provider>
  );
}
