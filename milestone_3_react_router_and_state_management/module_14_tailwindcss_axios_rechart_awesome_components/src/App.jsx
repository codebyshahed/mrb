import { Suspense } from "react";
import DaisyNav from "./components/DaisyNav";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ResultsChart from "./components/ResultsChart";

const pricingPromise = fetch("./pricing_data.json").then((res) => res.json());

function App() {
  return (
    <>
      {/* <DaisyNav /> */}
      <Navbar />

      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <Pricing pricingPromise={pricingPromise} />
      </Suspense>

      <ResultsChart />
    </>
  );
}

export default App;
