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
      <main className="w-full max-w-[1140px] mx-auto">
        <Suspense fallback={<Loading />}>
          <AvailablePlayers playersPromise={playersPromise} />
        </Suspense>
      </main>
    </>
  );
}

export default App;
