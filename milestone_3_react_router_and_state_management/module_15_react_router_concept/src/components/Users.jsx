import { useLoaderData } from "react-router";
import User from "./User";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h1>All Users</h1>

      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Users;
