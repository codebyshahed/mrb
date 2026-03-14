import { useLoaderData, useParams } from "react-router";
import { add_to_stored_db } from "../../utils/add_to_db";

const BookDetails = () => {
  const { id } = useParams();
  const allBook = useLoaderData();
  const singleBook = allBook.find((book) => book.bookId === parseInt(id));

  const { bookName, image, review } = singleBook;

  const handle_mark_as_read = (id) => {
    add_to_stored_db(id);
  };

  return (
    <div>
      <img width={100} src={image} alt="book image" />
      <h1>{bookName}</h1>
      <p>{review}</p>
      <div className="">
        <button onClick={() => handle_mark_as_read(id)} className="btn btn-lg">
          Read
        </button>
        <button className="btn btn-lg">Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
