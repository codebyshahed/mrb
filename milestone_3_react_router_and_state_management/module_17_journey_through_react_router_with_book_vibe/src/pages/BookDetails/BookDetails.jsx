import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const allBook = useLoaderData();
  const singleBook = allBook.find((book) => book.bookId === parseInt(id));

  const { bookName, image, review } = singleBook;

  return (
    <div>
      <img width={100} src={image} alt="book image" />
      <h1>{bookName}</h1>
      <p>{review}</p>
      <div className="">
        <button className="btn btn-lg">Read</button>
        <button className="btn btn-lg">Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
