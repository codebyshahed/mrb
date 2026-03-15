import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { get_stored_book } from "../utils/add_to_db";
import Book from "./Book/Book";

const ReadList = () => {
  const [readList, setReadlist] = useState([]);
  const data = useLoaderData();
  const [sort, setSort] = useState("");

  useEffect(() => {
    const stored_book_data = get_stored_book();
    const converted_stored_books = stored_book_data.map((id) => parseInt(id));
    const read_list = data.filter((book) =>
      converted_stored_books.includes(book.bookId),
    );
    setReadlist(read_list);
  }, [data]);

  const handle_sort = (type) => {
    setSort(type);

    if (type === "pages") {
      const sorted_by_pages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setSort(sorted_by_pages);
    }
    if (type === "ratings") {
      const sorted_by_ratings = [...readList].sort(
        (a, b) => a.rating - b.rating,
      );
      setSort(sorted_by_ratings);
    }
  };

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>My Wishlist</Tab>
        </TabList>

        <details className="dropdown">
          <summary className="btn m-1">Sort By {sort ? sort : ""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handle_sort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handle_sort("ratings")}>Ratings</a>
            </li>
          </ul>
        </details>

        <TabPanel>
          <h2>Book lists {readList.length}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readList.map((book, index) => (
              <Book key={index} book={book} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>All wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
