// import { Suspense, useEffect, useState } from "react";
import { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ books_data }) => {
  //   const [allBooks, setAllBooks] = useState([]);

  //   useEffect(() => {
  //     fetch("./booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => setAllBooks(data));
  //   }, []);

  //   const booksPromise = fetch("./booksData.json").then((res) => res.json());

  return (
    <div className="mt-10">
      <h1 className="text-neutral-900 text-4xl font-bold text-center">Books</h1>

      <Suspense fallback={<span>loading...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books_data.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
