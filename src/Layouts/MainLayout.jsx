import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Navbar/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto max-w-[1200px] w-[90%] lg-w[86%]">
        <Nav></Nav>
      </div>
      <div className="container mx-auto max-w-[1200px] w-[90%] lg-w[86%]">
        <Outlet></Outlet>
        <ToastContainer />
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
