import {Outlet} from 'react-router-dom'

// customer sub pages
import CustomerDashboardLeftSideNav from "./customer-sub-pages/CustomerDashboardLeftSideNav"

const CustomerDashboard = () => {
  return (
    <div className="w-screen h-screen flex">
        <CustomerDashboardLeftSideNav />
        <Outlet />
    </div>
  )
}

export default CustomerDashboard