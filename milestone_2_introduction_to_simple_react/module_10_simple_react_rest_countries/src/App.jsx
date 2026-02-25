import { Suspense } from "react";
import Countries from "./components/Countries/Countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((response) => response.json());

function App() {
  return (
    <>
      <main className="w-full">
        <section className="max-w-[1140px] mx-auto px-4 py-10">
          <h1 className="text-2xl text-zinc-300 font-light">All Countries</h1>

          <div className="mt-10">
            <Suspense fallback={<h3>Loading...</h3>}>
              <Countries countriesPromise={countriesPromise} />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
