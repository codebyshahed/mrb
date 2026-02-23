import { useEffect, useState } from "react";

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  // console.log(players);

  return (
    <div className="">
      <h1>Players: {players.length}</h1>

      <div className="">
        {players.map((player, index) => (
          <h3 key={index}>Name: {player.name}</h3>
        ))}
      </div>
    </div>
  );
}
