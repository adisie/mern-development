import {useState} from 'react'
import { IoIosArrowDown } from "react-icons/io";
const About = () => {
    // state
    const [menu,setMenu] = useState(false)
  return (
    <div className="h-full bg-gradient-to-r from-blue-700 to-red-600">
      <div className="max-w-[720px] mx-auto p-[3%]">
        <div className="p-3 rounded-sm shadow-md bg-white text-gray-700 relative">
          <div className="flex items-center gap-x-3 cursor-pointer  w-max" onClick={()=>{
            setMenu(!menu)
          }}>
            <span>Products</span>
            <IoIosArrowDown className="text-xl" />
          </div>
          <div className={`absolute left-0 top-[100%] w-[350px] bg-white overflow-hidden rounded-sm shadow-lg transition-all ease-in-out duration-300 ${menu ? 'h-[450px]' : 'h-[0px]'}`}>here is sub menu</div>
        </div>
      </div>
    </div>
  );
};

export default About;
