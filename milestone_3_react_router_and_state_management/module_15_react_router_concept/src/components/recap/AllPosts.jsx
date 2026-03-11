import { Link } from "react-router";

const AllPosts = ({ user }) => {
  const { id, name, email, phone } = user;

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
    </div>
  );
};

export default AllPosts;
