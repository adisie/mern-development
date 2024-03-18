import { useState } from "react";
import { NavLink } from "react-router-dom";

// icons
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosHelpCircleOutline } from "react-icons/io";

const HeaderBottom = () => {
  const [navTag, setNavTag] = useState("Home");
  const [subMenu, setSubMenu] = useState(false);
  const [toggleSideNav, setToggleSideNav] = useState(false);

  // small screen
  const [smallScreenNav, setSmallScreenNav] = useState("Home");

  return (
    <div className="w-full px-[.75%] flex items-center justify-between relative z-[150]">
      <div className="h-[100%]">
        {/* menu icon */}
        <div className=" h-full">
          <button
            className="sm:hidden my-2"
            onClick={() => {
              setToggleSideNav(!toggleSideNav);
            }}
          >
            {toggleSideNav ? (
              <AiOutlineClose className="text-2xl text-gray-700" />
            ) : (
              <AiOutlineMenu className="text-2xl text-gray-700" />
            )}
          </button>
        </div>
      </div>

      <div>
        {/* menu list */}
        <div>
          <ul className="hidden sm:flex items-center justify-center gap-x-5">
            <li
              className={`main-link-hover-effect flex items-center justify-center ${
                navTag === "Home" ? "after:w-full" : ""
              }`}
            >
              <NavLink
                to={"/"}
                className={"h-full py-2"}
                onClick={() => {
                  setNavTag("Home");
                  setSubMenu(false);
                }}
              >
                Home
              </NavLink>
            </li>

            <li
              className={`main-link-hover-effect flex items-center justify-center ${
                navTag === "Our Services" ? "after:w-full" : ""
              }`}
            >
              <NavLink
                className={
                  "h-full py-2 flex items-center justify-between gap-x-2"
                }
                onClick={() => {
                  setSubMenu(!subMenu);
                  setNavTag("Our Services");
                }}
              >
                <span>Our Services</span>
                {navTag === "Our Services" && subMenu ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </NavLink>
              {/* portfolio sub menu list */}
              <div
                className={`absolute top-[100%] left-1/2 -translate-x-1/2 bg-white shadow-lg w-max overflow-hidden transition-all ease-in-out duration-300 ${
                  navTag === "Our Services" && subMenu ? "h-[200px]" : "h-[0px]"
                }`}
              >
                <ul className="[&>li]:py-1 py-[10%] px-[25%] w-[300px] overflow-hidden">
                  <li>
                    <NavLink>Portfolio 1</NavLink>
                  </li>
                  <li>
                    <NavLink>Portfolio 2</NavLink>
                  </li>
                  <li>
                    <NavLink>Portfolio 3</NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li
              className={`main-link-hover-effect flex items-center justify-center ${
                navTag === "Blogging" ? "after:w-full" : ""
              }`}
            >
              <NavLink
                className={"h-full py-2"}
                onClick={() => {
                  setNavTag("Blogging");
                  setSubMenu(false);
                }}
              >
                Blogging
              </NavLink>
            </li>

            <li
              className={`main-link-hover-effect flex items-center justify-center ${
                navTag === "Tutorial" ? "after:w-full" : ""
              }`}
            >
              <NavLink
                className={
                  "h-full py-2 flex items-center justify-between gap-x-2"
                }
                onClick={() => {
                  setSubMenu(!subMenu);
                  setNavTag("Tutorial");
                }}
              >
                <span>Tutorial</span>
                {navTag === "Tutorial" && subMenu ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </NavLink>
              {/* portfolio sub menu list */}
              <div
                className={`absolute top-[100%] left-1/2 -translate-x-1/2 bg-white shadow-lg w-max overflow-hidden transition-all ease-in-out duration-300 ${
                  navTag === "Tutorial" && subMenu ? "h-[200px]" : "h-[0px]"
                }`}
              >
                <ul className="[&>li]:py-1 py-[10%] px-[25%] w-[300px] overflow-hidden">
                  <li>
                    <NavLink>Portfolio 1</NavLink>
                  </li>
                  <li>
                    <NavLink>Portfolio 2</NavLink>
                  </li>
                  <li>
                    <NavLink>Portfolio 3</NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li
              className={`main-link-hover-effect flex items-center justify-center ${
                navTag === "Portfolios" ? "after:w-full" : ""
              }`}
            >
              <NavLink
                className={
                  "h-full py-2 flex items-center justify-between gap-x-2"
                }
                onClick={() => {
                  setSubMenu(!subMenu);
                  setNavTag("Portfolios");
                }}
              >
                <span>Portfolios</span>
                {navTag === "Portfolios" && subMenu ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </NavLink>
              {/* portfolio sub menu list */}
              <div
                className={`absolute top-[100%] left-1/2 -translate-x-1/2 bg-white shadow-lg w-max overflow-hidden transition-all ease-in-out duration-300 ${
                  navTag === "Portfolios" && subMenu ? "h-[200px]" : "h-[0px]"
                }`}
              >
                <ul className="[&>li]:py-1 py-[10%] px-[25%] w-[300px] overflow-hidden">
                  <li>
                    <NavLink
                      to={"/portfolio"}
                      onClick={() => {
                        setSubMenu(false);
                      }}
                    >
                      Portfolio 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink>Portfolio 2</NavLink>
                  </li>
                  <li>
                    <NavLink>Portfolio 3</NavLink>
                  </li>
                </ul>
              </div>
            </li>

            <li
              className={`main-link-hover-effect flex items-center justify-center ${
                navTag === "Contact Us" ? "after:w-full" : ""
              }`}
            >
              <NavLink
                to={"/contact"}
                className={"h-full py-2"}
                onClick={() => {
                  setNavTag("Contact Us");
                  setSubMenu(false);
                }}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        {/* menu for small screen */}
        <div
          className={`absolute left-0 top-[100%] bg-white z-[150] h-[85.3vh] sm:hidden overflow-hidden transition-all ease-in-out duration-300 ${
            toggleSideNav ? "w-[100vw]" : "w-[0vw]"
          }`}
        >
          <div className="pl-[2%]">
            <ul className="[&>li]:my-2 [&>li]:relative [&>li]:w-[50%] [&>li]:border-b [&>li]:border-gray-200 [&>li]:py-1">
              <li>
                <NavLink
                  onClick={() => {
                    setSmallScreenNav("Home");
                  }}
                  className={`${smallScreenNav === "Home" ? "font-bold" : ""}`}
                >
                  Home
                </NavLink>
              </li>

              <li className="flex flex-col">
                <NavLink
                  className={`w-full flex items-center justify-between gap-x-[5%] ${
                    smallScreenNav === "Our Services" ? "font-bold" : ""
                  }`}
                  onClick={() => {
                    setSmallScreenNav("Our Services");
                  }}
                >
                  <span>Our Services</span>
                  {smallScreenNav === "Our Services" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </NavLink>
                <div
                  className={`ml-[15%] overflow-hidden transition-all ease-in-out duration-300 ${
                    smallScreenNav === "Our Services" ? "h-[150px]" : "h-[0px]"
                  }`}
                >
                  <ul className="[&>li]:my-1">
                    <li>
                      <NavLink>#list</NavLink>
                    </li>
                    <li>
                      <NavLink>#list</NavLink>
                    </li>
                    <li>
                      <NavLink>#list</NavLink>
                    </li>
                    <li>
                      <NavLink>#list</NavLink>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <NavLink
                  className={`${
                    smallScreenNav === "Blogging" ? "font-bold" : ""
                  }`}
                  onClick={() => {
                    setSmallScreenNav("Blogging");
                  }}
                >
                  Blogging
                </NavLink>
              </li>

              <li className="flex flex-col">
                <NavLink
                  className={`w-full flex items-center justify-between gap-x-[5%] ${
                    smallScreenNav === "Tutorial" ? "font-bold" : ""
                  }`}
                  onClick={() => {
                    setSmallScreenNav("Tutorial");
                  }}
                >
                  <span>Tutorial</span>
                  {smallScreenNav === "Tutorial" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </NavLink>
                <div
                  className={`ml-[15%] overflow-hidden transition-all ease-in-out duration-300 ${
                    smallScreenNav === "Tutorial" ? "h-[150px]" : "h-[0px]"
                  }`}
                >
                  <ul className="[&>li]:my-1">
                    <li>
                      <NavLink>#list</NavLink>
                    </li>
                    <li>
                      <NavLink>#list</NavLink>
                    </li>
                    <li>
                      <NavLink>#list</NavLink>
                    </li>
                    <li>
                      <NavLink>#list</NavLink>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="flex flex-col">
                <NavLink
                  className={`w-full flex items-center justify-between gap-x-[5%] ${
                    smallScreenNav === "Portfolio" ? "font-bold" : ""
                  }`}
                  onClick={() => {
                    setSmallScreenNav("Portfolio");
                  }}
                >
                  <span>Portfolio</span>
                  {smallScreenNav === "Portfolio" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </NavLink>
                <div
                  className={`ml-[15%] overflow-hidden transition-all ease-in-out duration-300 ${
                    smallScreenNav === "Portfolio" ? "h-[150px]" : "h-[0px]"
                  }`}
                >
                  <ul className="[&>li]:my-1">
                    <li>
                      <NavLink>#list</NavLink>
                    </li>
                    <li>
                      <NavLink>#list</NavLink>
                    </li>
                    <li>
                      <NavLink>#list</NavLink>
                    </li>
                    <li>
                      <NavLink>#list</NavLink>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="flex flex-col">
                <NavLink
                  className={`w-full flex items-center justify-between gap-x-[5%] ${
                    smallScreenNav === "Our Team" ? "font-bold" : ""
                  }`}
                  onClick={() => {
                    setSmallScreenNav("Our Team");
                  }}
                >
                  <span>Our Team</span>
                  {smallScreenNav === "Our Team" ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </NavLink>
                <div
                  className={`ml-[15%] overflow-hidden transition-all ease-in-out duration-300 ${
                    smallScreenNav === "Our Team" ? "h-[150px]" : "h-[0px]"
                  }`}
                >
                  <ul className="[&>li]:my-1">
                    <li>
                      <NavLink>#list</NavLink>
                    </li>
                    <li>
                      <NavLink>#list</NavLink>
                    </li>
                    <li>
                      <NavLink>#list</NavLink>
                    </li>
                    <li>
                      <NavLink>#list</NavLink>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <NavLink
                  className={`${
                    smallScreenNav === "Contact Us" ? "font-bold" : ""
                  }`}
                  onClick={() => {
                    setSmallScreenNav("Contact Us");
                  }}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-[100%]">
        {/* menu icon */}
        <div className=" h-full">
          <NavLink className="sm:hidden my-2 ">
            <IoIosHelpCircleOutline className="text-3xl text-gray-700" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
