import React, { useState } from "react";

const Country = ({ country }) => {
  const [isVisited, setIsVisited] = useState(false);

  const handleVisited = () => {
    setIsVisited(true);
  };

  return (
    <div className="p-4 bg-zinc-800/50 space-y-2">
      <img
        className="w-full object-contain"
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <div className="space-y-1">
        <h1>{country.name.common}</h1>
        <p>Population: {country?.population?.population}</p>
        <p>Area: {country?.area?.area}</p>
        <p>
          <small>
            {country?.area?.area >= 300000 ? "Big Country" : "Small Country"}
          </small>
        </p>

        <button
          onClick={handleVisited}
          disabled={isVisited}
          className="px-5 py-2 bg-white text-zinc-800 rounded-sm hover:bg-zinc-300 disabled:bg-zinc-500 disabled:text-zinc-300 disabled:cursor-not-allowed"
        >
          {isVisited ? "Visited" : "Not Visited"}
        </button>
      </div>
    </div>
  );
};

export default Country;
