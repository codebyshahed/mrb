import React from "react";
import { useLoaderData } from "react-router";

const PostDetails = () => {
  const userDetails = useLoaderData();

  return (
    <div className="max-w-285 mx-auto px-4 py-10">
      <h1>{userDetails.name}</h1>
      <p>Phone: {userDetails.phone}</p>
    </div>
  );
};

export default PostDetails;
