import {Routes,Route} from 'react-router-dom'
// components
// Header
import Header from "./components/Header";

// pages
// Home
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const App = () => {
  return <div className="h-screen font-workSans ">
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='portfolio' element={<Portfolio />}></Route>
      <Route path='contact' element={<Contact />}></Route>
    </Routes>
  </div>;
};

export default App;
