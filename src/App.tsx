// import { useState } from "react";

import { ProductProvider } from "./contexts/productContext";
import { ProtectRouteProvider } from "./contexts/protectRouteContext";
import { GlobalStyles } from "./globalStyle";
import Router from "./routes";
import "react-toastify/dist/ReactToastify.css";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <ProductProvider>
        <ProtectRouteProvider>
          <GlobalStyles />
          <Router />
        </ProtectRouteProvider>
      </ProductProvider>
    </>
  );
}

export default App;
