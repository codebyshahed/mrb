import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import Books from "./books/Books";

const Home = () => {
  const books_data = useLoaderData();
  // console.log(books_data)

  return (
    <>
      <Banner />
      <Books books_data={books_data} />
    </>
  );
};

export default Home;
