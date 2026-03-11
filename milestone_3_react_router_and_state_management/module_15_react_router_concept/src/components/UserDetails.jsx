import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { title, body } = user;

  return (
    <div>
      <h1>User Details</h1>

      <h4>{title}</h4>

      <p>{body}</p>
    </div>
  );
};

export default UserDetails;
