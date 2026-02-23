import { use } from "react";

export default function Users({ fetchData }) {
  const usersData = use(fetchData);
  console.log(usersData);

  return (
    <div className="">
      <h1>Users: {usersData.length}</h1>
    </div>
  );
}
