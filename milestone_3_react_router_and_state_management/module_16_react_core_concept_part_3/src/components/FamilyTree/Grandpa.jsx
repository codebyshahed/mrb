import React from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Aunt from "./Aunt";

const Grandpa = () => {
  return (
    <div>
      <h1>Grandpa</h1>
      <Dad />
      <Uncle />
      <Aunt />
    </div>
  );
};

export default Grandpa;
