import { Suspense } from "react";
import Bottles from "./components/Bottles";

// fetch API
const bottlePrimise = fetch("./data.json").then((response) => response.json());

const App = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Bottles bottlePrimise={bottlePrimise} />
      </Suspense>
    </>
  );
};

export default App;
