import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { get_stored_book } from "../utils/add_to_db";
import Book from "./Book/Book";

const ReadList = () => {
  const [readList, setReadlist] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const stored_book_data = get_stored_book();
    const converted_stored_books = stored_book_data.map((id) => parseInt(id));
    const read_list = data.filter((book) =>
      converted_stored_books.includes(book.bookId),
    );
    setReadlist(read_list);
  }, []);

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>My Wishlist</Tab>
        </TabList>

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
