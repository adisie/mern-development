import { Outlet } from "react-router-dom";
// components
import CustomerDashboardHomeHeader from "./customer-home-sub-pages/CustomerDashboardHomeHeader";
import CustomerDashboardRightSideBar from "./customer-home-sub-pages/CustomerDashboardRightSideBar";

const CustomerDashboardHome = () => {
  return (
    <div className="flex-grow flex flex-col overflow-hidden relative pt-[8vh] h-screen overflow-y-auto">
      <CustomerDashboardHomeHeader />
      <div className="flex-grow flex relative">
        <Outlet />
        <CustomerDashboardRightSideBar />
      </div>
    </div>
  );
};

export default CustomerDashboardHome;
