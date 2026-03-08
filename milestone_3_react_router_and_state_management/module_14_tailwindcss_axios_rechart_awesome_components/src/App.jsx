import { Suspense } from "react";
import DaisyNav from "./components/DaisyNav";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ResultsChart from "./components/ResultsChart";
import axios from "axios";
import MarksChart from "./components/MarksCharts/MarksChart";

const pricingPromise = fetch("./pricing_data.json").then((res) => res.json());
/**
 * fetch data using axios
 */
const marksPromise = axios.get("./marks_data.json");

function App() {
  return (
    <>
      {/* <DaisyNav /> */}
      <Navbar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <MarksChart marksPromise={marksPromise} />
      </Suspense>

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
