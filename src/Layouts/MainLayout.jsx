import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";

const MainLayout = () => {
  return (
    <div>
      <div className="container mx-auto max-w-[1200px] w-[90%] lg-w[86%]">
        <Nav></Nav>
      </div>
      <div className="container mx-auto max-w-[1200px] w-[90%] lg-w[86%]">
        <Outlet></Outlet>
      </div>
      {/* footer */}
    </div>
  );
};

export default MainLayout;
