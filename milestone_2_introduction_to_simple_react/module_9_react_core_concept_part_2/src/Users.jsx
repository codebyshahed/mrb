import { use } from "react";
import User from "./User";

export default function Users({ fetchData }) {
  const usersData = use(fetchData);
  // console.log(usersData);

  return (
    <div className="">
      <h1>Users: {usersData.length}</h1>

      <div className="">
        {usersData.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </div>
  );
}
