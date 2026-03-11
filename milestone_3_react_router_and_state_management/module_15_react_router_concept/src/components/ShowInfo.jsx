import React, { use } from "react";

const ShowInfo = ({ userPromise }) => {
  const { name, username } = use(userPromise);

  return (
    <div className="">
      <h1>{name}</h1>
      <h3>{username}</h3>
    </div>
  );
};

export default ShowInfo;
