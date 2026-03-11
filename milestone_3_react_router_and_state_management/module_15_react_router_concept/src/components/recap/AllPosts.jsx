import { Suspense, useState } from "react";
import { Link } from "react-router";
import ShowInfo from "../ShowInfo";

const AllPosts = ({ user }) => {
  const { id, name, email, phone } = user;
  const [showInfo, setShowInfo] = useState(false);
  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  ).then((res) => res.json());

  return (
    <div className="p-4 bg-white border border-gray-200 space-y-4">
      <h1>{name}</h1>

      <p>Email: {email}</p>

      <p>
        <small>Phone: {phone}</small>
      </p>

      <Link
        to={`/posts/${id}`}
        className="mt-2.5 px-5 py-2.5 rounded bg-gray-200"
      >
        Show Details
      </Link>

      <button onClick={() => setShowInfo((info) => !info)} className="mt-5">
        {showInfo ? "Hide info" : "Show info"}
      </button>

      {showInfo && (
        <Suspense fallback={<span>Loading...</span>}>
          <ShowInfo userPromise={userPromise} />
        </Suspense>
      )}
    </div>
  );
};

export default AllPosts;
