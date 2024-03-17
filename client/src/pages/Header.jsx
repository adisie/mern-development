import {useState} from 'react'

// icons
import { FaPenAlt } from "react-icons/fa";

const Header = () => {
    // state 
    const [menu,setMenu] = useState(false)

  return (
    <header className="py-[1%] border-b border-gray-200">
      <div className="max-w-[920px] mx-auto px-[1%] flex items-center justify-between">
        <div className="flex items-center text-gray-500 cursor-pointer">
          <FaPenAlt className="text-3xl" />
          <span className="text-gray-400 font-medium">my</span>
          <span className="text-xl font-black">Note</span>
        </div>

        <div className="text-gray-500">
          <ul className="flex items-center justify-end gap-x-3 [&>li]:cursor-pointer [&>li]:relative">
            <li>Home</li>
            <li onClick={(e)=>{
                e.stopPropagation()
                setMenu(!menu)
            }}>
              Products
              <div className={`absolute left-1/2 -translate-x-1/2 top-[100%] overflow-hidden grid transition-all ease-in-out duration-350 ${menu ? 'grid-cols-[1fr] opacity-100' : 'grid-cols-[0fr] opacity-0'}`}>
                <ul className="p-3 rounded-sm bg-gray-100 shadow-md">
                  <li className='w-[150px] border-b border-gray-300 pl-1'>T-Shirts</li>
                  <li className='w-[150px] border-b border-gray-300 pl-1'>Sweeters</li>
                  <li className='w-[150px] border-b border-gray-300 pl-1'>Trousers</li>
                  <li className='w-[150px] border-b border-gray-300 pl-1'>Jackets</li>
                </ul>
              </div>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
