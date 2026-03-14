import Header from "../components/Header";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <Header />
      <main className="max-w-360 mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
