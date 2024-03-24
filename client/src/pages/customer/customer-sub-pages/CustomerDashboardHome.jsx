// components
import CustomerDashboardHomeHeader from "./customer-home-sub-pages/CustomerDashboardHomeHeader";
import CustomerDashboardRightSideBar from "./customer-home-sub-pages/CustomerDashboardRightSideBar";

const CustomerDashboardHome = () => {
  return <div className="flex-grow flex flex-col">
    <CustomerDashboardHomeHeader />
    <div className="flex-grow flex">
      <div className="flex-grow bg-red-300">Left</div>
      <CustomerDashboardRightSideBar />
    </div>
  </div>;
};

export default CustomerDashboardHome;
