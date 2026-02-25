import { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  const [visitedCountry, setVisitedCountry] = useState([]);

  const handleVisitedCountry = (country) => {
    console.log(country);
  };

  return (
    <div>
      <h1 className="text-xl font-light text-zinc-300">
        Countries: {countries.length}
      </h1>

      <h2 className="text-base text-zinc-300 font-thin my-2">
        Total Country Visited:
      </h2>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {countries.map((country, index) => (
          <Country
            key={index}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
