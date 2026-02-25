import React from "react";

const Country = ({ country }) => {
  return (
    <div className="mt-5">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h1>
        Name: {country.name.common}
        <p>Population: {country.population.population}</p>
      </h1>
    </div>
  );
};

export default Country;
