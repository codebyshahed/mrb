export default function Singers({ singer }) {
  return (
    <>
      <h4>Name: {singer.name}</h4>
      <span>Age: {singer.age}</span>
      <p>Country: {singer.country}</p>
      <p>Genre: {singer.genre}</p>
      <p>Famous Song: {singer.famousSong}</p>
      <hr />
    </>
  );
}
