import {Routes,Route} from 'react-router-dom'

// pages
import CustomerDashboard from "./pages/customer/CustomerDashboard";

const App = () => {
  return <div className="w-screen h-screen">
    <Routes>
      <Route path='dashboard/customer' element={<CustomerDashboard />}></Route>
    </Routes>
  </div>;
};

export default App;
