import { useState } from "react";
import { NavLink } from "react-router-dom";

// icons
import { FiPhone } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { MdOutlineClose, MdMenu } from "react-icons/md";
import { RiUserShared2Fill } from "react-icons/ri";

const Header = () => {
  // states
  const [isPhone, setIsPhone] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNav, setIsNav] = useState(null);

  // nav
  const nav = [
    {
      navText: "Civil",
    },
    {
      navText: "Criminal",
    },
    {
      navText: "Commercial",
    },
    {
      navText: "Other Services",
    },
  ];

  // nav drawer
  const mainNavDrawer = () => {
    const mainNav = document.getElementById('main-nav-container') 
    if(mainNav?.classList.contains('right-[-100vw]')){
      mainNav?.classList.remove('right-[-100vw]')
      mainNav?.classList.add('right-0')
    }else {
      mainNav?.classList.add('right-[-100vw]')
      mainNav?.classList.remove('right-0')
    }
  }
  return (
    <header className="shadow-headerBottomShadow fixed left-0 top-0 z-[1000] w-full bg-white text-black">
      <div className="px-[5%] flex items-center justify-between">
        {/* logo container */}
        <div
          className="
        relative"
        >
          <div className="absolute left-0 p-1 shadow-lg bg-white mt-[-36px]">
            <NavLink>
              <div className="w-[110px] aspect-square overflow-hidden">
                <img
                  className="h-[90px] w-full"
                  src="/images/site-logo/final-logo.png"
                  alt=""
                />
              </div>
            </NavLink>
          </div>
        </div>
        {/* header content */}
        <div className="flex-grow flex items-center justify-between relative">
          {/* nav container */}
          <div className="flex-grow flex items-center justify-center">
            <div className="fixed w-full sm:w-[75%] md:w-[50%] h-[calc(100vh-9vh)] bg-gray-50 shadow-lg lg:shadow-none  right-[-100vw] transition-all ease-in-out duration-300 top-[9vh] lg:relative lg:bg-transparent lg:right-auto lg:top-auto lg:w-auto lg:h-auto" id="main-nav-container">
              <div className="w-full md:hidden flex items-center py-3 px-[5%]">
                <div className="flex-grow flex items-center">
                  <div className="flex-grow flex items-center bg-white rounded-full py-1 border-2 border-black ">
                    <FiSearch className="mx-2 text-lg"/>
                    <input type="text" placeholder="search" className="w-full focus:ring-0 focus:outline-none border-none bg-transparent"/>
                  </div>
                </div>
              </div>
              <ul className=" w-[90%] sm:w-[75%] mx-[5%] lg:mx-auto lg:w-full lg:flex lg:items-center lg:justify-center lg:gap-[5%]">
                {nav.map((item, index) => (
                  <li key={index} className="relative">
                    <NavLink
                      className={`flex items-center justify-between gap-3 py-2 md:py-5 font-[600] text-[.875rem] transition-colors ease-in-out duration-300 hover:text-gray-500 relative after:absolute after:left-0 after:bottom-0 after:h-[6px] after:bg-black after:transition-all after:ease-in-out after:duration-300 hover:after:w-full whitespace-nowrap ${
                        isNav?.navText === item.navText
                          ? "after:w-full"
                          : "after:w-0"
                      }`}
                      onClick={() => {
                        if (isNav?.navText === item.navText) {
                          setIsNav(null);
                        } else {
                          setIsNav(item);
                        }
                      }}
                    >
                      <span>{item.navText}</span>
                      <IoIosArrowDown
                        className={`text-xl transition-transform ease-in-out duration-300 ${
                          isNav?.navText === item.navText
                            ? "rotate-[-180deg]"
                            : "rotate-0"
                        }`}
                      />
                    </NavLink>
                    {/* sub list pop up */}
                    <div className={`absolute left-0 top-[100%] w-[350px] h-[200px] bg-red-300 transition-all ease-in-out duration-300 ${isNav?.navText === item.navText ? ' scale-100 opacity-100 ' : 'scale-0 opacity-0'}`}></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* action container */}
          <div className="flex items-center justify-between gap-3">
            {/* phone */}
            <div className="relative py-[.75rem]">
              {/* button */}
              <div
                className={`flex items-center justify-center gap-1 p-[.35rem] md:py-[.35rem] border-2 border-black rounded-full md:px-5 cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-500 hover:border-gray-500 hover:text-white`}
                onClick={() => {
                  setIsPhone(!isPhone);
                }}
              >
                <FiPhone className="text-xl" />
                <IoIosArrowDown
                  className={`hidden md:flex text-lg transition-transform ease-in-out duration-300 ${
                    isPhone ? "rotate-[-180deg]" : "rotate-0"
                  }`}
                />
              </div>
              {/* pop-up */}
              <div
                className={`absolute left-0 top-[100%] bg-white w-max whitespace-nowrap text-[.975rem] shadow-lg p-5 overflow-hidden transition-all ease-in-out duration-300 ${
                  isPhone ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                <div className="font-medium">
                  <h3>Talk to Makutta</h3>
                  <h3>(+2519) 239-96736</h3>
                </div>
                <div className="my-3 font-medium">
                  <h3>Customer Care hours</h3>
                </div>
                <div>
                  <p>Mon-Fri 5 a.m. - 7 p.m. PT</p>
                  <p>Weekends 7 a.m. - 4 p.m. PT</p>
                </div>
              </div>
            </div>
            {/* search */}
            <div className=" hidden md:flex">
              <div
                className="border-2 border-black rounded-full p-[.35rem] text-xl cursor-pointer transition-all ease-in-out duration-300 hover:border-gray-500 hover:bg-gray-500 hover:text-white"
                onClick={() => {
                  setIsSearch(true);
                }}
              >
                <FiSearch />
              </div>
            </div>
            {/* sign in */}
            <div>
              <NavLink className="md:px-5 p-[.35rem] md:py-[.35rem] bg-black rounded-full text-white transition-all ease-in-out duration-300 hover:bg-gray-500 cursor-pointer flex items-center justify-center whitespace-nowrap">
                {/* text */}
                <div className="hidden md:flex">
                  <span className="font-medium">sign in</span>
                </div>
                {/* icon for small screen */}
                <RiUserShared2Fill className="md:hidden text-xl"/>
              </NavLink>
            </div>
            {/* menu drawer */}
            <div className="lg:hidden">
              <div className="mx-2 text-3xl cursor-pointer" onClick={()=>{
                mainNavDrawer()
              }}>
                <MdMenu />
              </div>
            </div>
          </div>
          {/* search bar */}
          {isSearch ? (
            <div className="absolute right-0 top-0 h-full w-full overflow-hidden  bg-white z-50 pr-[5%] pl-[15%] flex items-center">
              <div className="flex-grow flex items-center gap-3">
                {/* input */}
                <div className="flex-grow flex items-center px-3 py-1 border-2 border-black rounded-full">
                  <FiSearch className="text-xl mr-1" />
                  <input
                    type="text"
                    placeholder="search"
                    className="w-full focus:outline-none focus:ring-0 border-none bg-transparent"
                  />
                </div>
                {/* close btn */}
                <div>
                  <button
                    onClick={() => {
                      setIsSearch(!isSearch);
                    }}
                  >
                    <MdOutlineClose className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
