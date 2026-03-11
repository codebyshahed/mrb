import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const userDetails = useLoaderData();
  const navigate = useNavigate();

  const handleNevigate = () => {
    navigate("/");
  };

  return (
    <div className="max-w-285 mx-auto px-4 py-10">
      <h1>{userDetails.name}</h1>
      <p>Phone: {userDetails.phone}</p>

      <button onClick={handleNevigate}>Back</button>
      <br />
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default PostDetails;
