import { useState } from "react";

import TrophyComponent from "./component/TrophyComponent";
import ProductComponent from "./component/ProductComponent";
import FooterComponent from "./component/FooterComponent";

// rgb(255, 255, 254)
// rgb(255, 250, 193)
function App() {
  return (
    <>
      <div
      className=""
        style={{
          background:
            "linear-gradient(to bottom, rgb(255, 255, 254), rgb(255, 250, 193))",
            
        }}
        // className="h-screen"
      >
        <TrophyComponent />

        <ProductComponent />

        <FooterComponent />
      </div>
    </>
  );
}

export default App;
