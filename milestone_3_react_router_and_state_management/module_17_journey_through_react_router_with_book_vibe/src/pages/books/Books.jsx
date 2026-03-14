import { useEffect, useState } from "react";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  return (
    <div>
      <h1>Hey, ami books</h1>
    </div>
  );
};

export default Books;
