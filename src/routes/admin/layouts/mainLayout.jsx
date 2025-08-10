import LeftBar from "../../../components/admin/leftBar/leftBar";
import TopBar from "../../../components/admin/topBar/topBar";
import { Outlet } from "react-router";
import "./mainLayout.css";

const MainLayout = () => {
  return (
    <div className="app">
      <div className="header">
        <TopBar />
      </div>
      <div className="content">
        <div className="left-bar">
          <LeftBar />
        </div>
        <div className="right-bar">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
