import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Loading from "./components/Loading";

const playersFetch = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playersPromise = playersFetch();

  return (
    <>
      <Navbar />
      <div className="mb-9 max-w-[1140px] mx-auto px-4 flex items-center justify-between">
        <div className="">
          <h1 className="text-neutral-900 text-3xl font-bold">
            Available Players
          </h1>
        </div>

        <div className="flex flex-row items-center gap-x-0">
          <button className="common_btn">
            Available
          </button>
          <button className="common_btn">
            Selected (<span>0</span>)
          </button>
        </div>
      </div>
      <main className="w-full max-w-[1140px] mx-auto">
        <Suspense fallback={<Loading />}>
          <AvailablePlayers playersPromise={playersPromise} />
        </Suspense>
      </main>
    </>
  );
}

export default App;
