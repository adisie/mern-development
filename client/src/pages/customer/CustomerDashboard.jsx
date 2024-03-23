
// customer sub pages
import CustomerDashboardLeftSideNav from "./customer-sub-pages/CustomerDashboardLeftSideNav"
import CustomerDashboardHome from "./customer-sub-pages/CustomerDashboardHome"

const CustomerDashboard = () => {
  return (
    <div className="w-screen h-screen flex">
        <CustomerDashboardLeftSideNav />
        <CustomerDashboardHome />
    </div>
  )
}

export default CustomerDashboard