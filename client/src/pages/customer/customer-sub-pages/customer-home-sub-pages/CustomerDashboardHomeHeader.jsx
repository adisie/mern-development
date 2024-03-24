import { useState } from "react";
// icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoNotifications } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdDelete,
} from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import {
  IoMdStar,
  IoIosStarHalf,
  IoIosStarOutline,
  IoIosExit,
} from "react-icons/io";

const CustomerDashboardHomeHeader = () => {
  // local states
  const [dropdown, setDropdown] = useState(false);

  // right side bar toggler
  const rightSideBarToggler = () => {
    let rightSideBar = document.getElementById('customer-dashboard-right-side-bar') 
    if(rightSideBar?.classList.contains('right-[-100vw]')){
      rightSideBar?.classList.remove('right-[-100vw]')
      rightSideBar?.classList.add('right-0')
    }else{
      rightSideBar?.classList.add('right-[-100vw]')
      rightSideBar?.classList.remove('right-0')
    }
  }

  return (
    <header className="py-2 flex items-center justify-between  shadow-headerBottomShadow">
      <div className="flex items-center gap-[5%] pl-[1%] w-[70%]">
        {/* icon */}
        <div className="cursor-pointer">
          <AiOutlineMenu className="text-gray-700 text-2xl" />
        </div>
        {/* search bar */}
        <div className="pl-[3%] flex-grow">
          <div className="flex items-center bg-gray-100 p-1 rounded-sm w-[55%]">
            <CiSearch className="text-2xl mr-1 text-gray-700" />
            <input
              type="text"
              placeholder="search"
              className="focus:outline-none focus:ring-0 border-none bg-transparent w-full"
            />
          </div>
        </div>
      </div>

      <div className="w-[30%] pr-[1%] flex items-center justify-end gap-[3%]">
        <div className="relative flex items-center justify-center">
          <IoNotifications className="text-xl text-gray-500 cursor-pointer transition-all ease-in-out duration-300 hover:text-gray-700" />
          <div className="absolute top-[.05rem] right-[.05rem] w-[7px] h-[7px] bg-red-500 rounded-full"></div>
        </div>
        {/* user name and profile */}
        <div className="ml-2 relative">
          <div
            className="flex items-center justify-center gap-[5px] cursor-pointer border border-gray-100 px-[.75rem] py-[.15rem] rounded-sm transition-all ease-in-out duration-300 hover:border-gray-300"
            onClick={() => {
              setDropdown(!dropdown);
            }}
          >
            {/* image */}
            <div className="w-[24px] h-[24px] rounded-sm overflow-hidden">
              <img
                className="h-full aspect-square object-cover"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                alt=""
              />
            </div>
            {/* username */}
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>Haddis</span>
              <span>Fanta</span>
            </div>
            {/* icon */}
            <div className="text-gray-500 text-lg">
              {dropdown ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </div>
          </div>
          {/* drop down */}
          <div className={`absolute top-[110%] right-[5%] z-[1000] px-[12%] bg-transparent overflow-hidden transition-all ease-in-out duration-300 ${dropdown ? 'h-[80vh]' : 'h-[0vh]'}`}>
            <div className="min-w-max bg-gray-100 mt-3 p-[3%] rounded-md relative border border-gray-200 before:content-[''] before:absolute before:top-[-10px] before:w-[20px] before:h-[20px] before:rotate-45 before:bg-gray-100 before:border-l before:border-t before:border-gray-200 before:left-[65%]">
              {/* image container */}
              <div className="relative flex items-center justify-center">
                <div className="w-[130px] aspect-square rounded-md overflow-hidden relative">
                  <img
                    className="h-full aspect-square object-cover"
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                    alt=""
                  />
                  <div className="absolute top-[.1rem] right-[.1rem]">
                    <button className="p-[.075rem] text-lg flex items-center justify-center bg-gray-300 text-gray-500 rounded-full transition-all ease-in-out duration-300 hover:bg-gray-400 hover:text-gray-700">
                      <MdDelete />
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-[-.85rem] left-1/2 -translate-x-1/2">
                  <input
                    type="file"
                    name="profile"
                    id="profile"
                    accept="image/*"
                    hidden
                  />
                  <label
                    htmlFor="profile"
                    className="cursor-pointer p-[.25rem] flex items-center justify-center rounded-full bg-gray-100 text-gray-700 text-lg"
                  >
                    <FaCamera />
                  </label>
                </div>
              </div>
              {/* username container */}
              <div className="flex items-center justify-center gap-3 mt-3">
                <div className="font-medium text-gray-700 flex items-center justify-center gap-1">
                  <span>Haddis</span>
                  <span>Fanta</span>
                </div>
                <div>
                  <VscVerifiedFilled className="text-xl text-sky-500" />
                </div>
              </div>
              {/* rating */}
              <div className="flex items-center justify-center mt-3">
                <div className="flex items-center justify-center gap-1 bg-emerald-500 rounded-sm text-white px-3 py-[.1rem]">
                  <div className="flex items-center text-lg">
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoIosStarHalf />
                    <IoIosStarOutline />
                  </div>
                  <div className="font-bold">
                    <span>4.35</span>
                  </div>
                </div>
              </div>
              {/* bio */}
              <div>
                <div className="max-w-[250px] my-3 text-center text-sm text-gray-700 py-2 border-y border-gray-200">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Inventore unde facere illo animi excepturi
                  </p>
                </div>
              </div>
              {/* logout btn */}
              <div className="flex items-center justify-center my-2">
                <button className="flex items-center justify-center gap-1 py-[.075rem] px-3 text-gray-700 border border-gray-300 rounded-sm transition-all ease-in-out duration-300 hover:border-gray-400 hover:text-gray-900">
                  <IoIosExit className="text-2xl" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* icon */}
        <div className="flex xl:hidden">
          <BiDotsVerticalRounded className="text-xl text-gray-500 cursor-pointer transition-all ease-in-out duration-300 hover:text-gray-700" onClick={()=>{
            rightSideBarToggler()
          }}/>
        </div>
      </div>
    </header>
  );
};

export default CustomerDashboardHomeHeader;
