// import { currencyContext } from "./contexts/currencyContext";
import { useState } from "react";
import Routing from "./components/Routing/Routing";

function App() {
  const [currency, setCurrency] = useState("usd");
  return (
    <>
      {/* <currencyContext.Provider value={{ currency, setCurrency }}> */}
      <Routing />
      {/* </currencyContext.Provider> */}
    </>
  );
}

export default App;
