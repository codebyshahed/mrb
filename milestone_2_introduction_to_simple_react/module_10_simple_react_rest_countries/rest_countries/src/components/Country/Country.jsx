import React, { useState } from "react";

const Country = ({ country, handleVisitedCountry }) => {
  const [isVisited, setIsVisited] = useState(false);

  const handleVisited = () => {
    setIsVisited(true);
    handleVisitedCountry(country);
  };

  return (
    <>
      <div
        className={`p-4 ${isVisited ? "bg-zinc-500/30" : "bg-zinc-800/50"} flex flex-col justify-between space-y-2`}
      >
        <img
          className="w-full object-contain"
          src={country.flags.flags.png}
          alt={country.flags.flags.alt}
          loading="lazy"
        />
        <div className="">
          <h1>{country.name.common}</h1>
          <p>Population: {country?.population?.population}</p>
          <p>Area: {country?.area?.area}</p>
          <p>
            <small>
              {country?.area?.area >= 300000 ? "Big Country" : "Small Country"}
            </small>
          </p>
        </div>
        <button
          onClick={handleVisited}
          disabled={isVisited}
          className={`px-5 py-2 rounded-sm font-normal ${isVisited ? "visited" : "not_visited"}`}
        >
          {isVisited ? "Visited" : "Not Visited"}
        </button>
      </div>
    </>
  );
};

export default Country;
