import { useLoaderData } from "react-router";
import AllPosts from "./AllPosts";

const Posts = () => {
  const users = useLoaderData();

  return (
    <div className="max-w-285 mx-auto px-4 py-10">
      <h1>All Posts: {users.length}</h1>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {users.map((user) => (
          <AllPosts key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
