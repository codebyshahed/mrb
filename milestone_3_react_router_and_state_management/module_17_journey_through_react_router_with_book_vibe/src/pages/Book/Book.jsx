// import { use } from "react";

import { Link } from "react-router";

const Book = ({ book }) => {
  //   const booksData = use(booksPromise);
  //   console.log(book);
  const { image, bookName, bookId } = book;

  return (
    <Link to={`/book-details/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm border">
        <figure className="bg-gray-100">
          <img className="h-41.5" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
