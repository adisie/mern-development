import { Routes, Route } from "react-router-dom";

// pages
// customer dashboard pages
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import CustomerDashboardIndex from "./pages/customer/customer-sub-pages/customer-home-sub-pages/customer-dashboard-index/CustomerDashboardIndex";
import NewCase from "./pages/customer/customer-sub-pages/customer-home-sub-pages/customer-dashboard-my-charts/NewCase";
import CustomerDashboardHome from "./pages/customer/customer-sub-pages/CustomerDashboardHome";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="dashboard/customer/" element={<CustomerDashboard />}>
          <Route
            path="/dashboard/customer/"
            element={<CustomerDashboardHome />}
          >
            <Route
              path="/dashboard/customer/"
              element={<CustomerDashboardIndex />}
            ></Route>
            <Route
              path="/dashboard/customer/new-case"
              element={<NewCase />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
