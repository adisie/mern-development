import {Routes,Route} from 'react-router-dom'
// components
// Header
import Header from "./components/Header";

// pages
// Home
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blogging from './pages/Blogging';

// sub-pages
import OurServiceOne from './pages/sub-pages/our-services/OurServiceOne';

const App = () => {
  return <div className="h-screen font-workSans ">
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='our-service-i' element={<OurServiceOne />}></Route>
      <Route path='blogging' element={<Blogging />}></Route>
      <Route path='contact' element={<Contact />}></Route>
    </Routes>
  </div>;
};

export default App;
