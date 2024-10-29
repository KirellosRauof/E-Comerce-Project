import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="container py-6">
        <Outlet></Outlet>
      </div>

      <Footer />
    </>
  );
}
