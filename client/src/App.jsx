import {Routes,Route} from 'react-router-dom'
// components
import Header from "./components/Header";
// pages
import Notes from "./pages/Notes";

const App = () => {
  return <div className='w-screen h-screen flex flex-col'>
    {/* header */}
    <Header />
    {/* routes */}
    <Routes>
      <Route path='/' element={<Notes />}></Route>
    </Routes>
  </div>;
};

export default App;
