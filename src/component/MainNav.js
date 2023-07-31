import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainNav = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default MainNav;
