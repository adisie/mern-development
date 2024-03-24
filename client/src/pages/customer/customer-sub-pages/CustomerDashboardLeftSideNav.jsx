import { useState } from "react";
import { NavLink } from "react-router-dom";
// icons
import { AiOutlineClose, AiFillClockCircle } from "react-icons/ai";
import { BiSolidPhoneCall, BiSolidMessageRounded } from "react-icons/bi";
import { IoIosExit } from "react-icons/io";
import {
  MdDashboard,
  MdPieChart,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdHomeRepairService,
} from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { HiCurrencyDollar } from "react-icons/hi2";

const CustomerDashboardLeftSideNav = () => {
  // states
  const [nav, setNav] = useState({
    headerText: null,
    subLinkText: null,
    isHeight: false,
  });
  // main nav list
  const mainNavList = [
    {
      navHeaderText: "Dashboard",
      icon: MdDashboard,
      path: "#",
    },
    {
      navHeaderText: "Compliance",
      icon: GrCompliance,
      subNavLinks: [
        {
          subNavLinkHeaderText: "New Case",
          path: "#",
        },
      ],
    },
    {
      navHeaderText: "My Chart",
      icon: MdPieChart,
      subNavLinks: [
        {
          subNavLinkHeaderText: "Case Team",
          path: "#",
        },
        {
          subNavLinkHeaderText: "Active Case",
          path: "#",
        },
        {
          subNavLinkHeaderText: "Closed Case",
          path: "#",
        },
      ],
    },
    {
      navHeaderText: "Message",
      icon: BiSolidMessageRounded,
      path: "#",
    },
    {
      navHeaderText: "Appointment",
      icon: AiFillClockCircle,
      path: "#",
    },
    {
      navHeaderText: "Finance",
      icon: HiCurrencyDollar,
      subNavLinks: [
        {
          subNavLinkHeaderText: "Add Funds",
          path: "#",
        },
        {
          subNavLinkHeaderText: "Requested Payment",
          path: "#",
        },
        {
          subNavLinkHeaderText: "Refund Funds",
          path: "#",
        },
        {
          subNavLinkHeaderText: "Recent Transaction",
          path: "#",
        },
      ],
    },
    {
      navHeaderText: "Other Services",
      icon: MdHomeRepairService,
      subNavLinks: [
        {
          subNavLinkHeaderText: "Training",
          path: "#",
        },
        {
          subNavLinkHeaderText: "Consulting",
          path: "#",
        },
        {
          subNavLinkHeaderText: "Researches",
          path: "#",
        },
      ],
    },
  ];

  return (
    <div className="h-screen bg-gray-50 py-[.75%] px-[1%] min-w-[180px] w-[18%] flex flex-col">
      {/* header */}
      <header>
        <div className="w-full flex h-[5vh] items-center justify-end">
          <div className="cursor-pointer">
            <AiOutlineClose className="text-gray-700 text-2xl" />
          </div>
        </div>
        {/* logo */}
        <div className="flex items-center justify-center">
          <div className="w-[64px] aspect-square overflow-hidden">
            <img
              className="h-full object-cover aspect-square"
              src="./public/images/site-logo/final-logo.png"
              alt=""
            />
          </div>
        </div>
      </header>
      {/* nav */}
      <div className="flex-grow pr-[5%]">
        <ul className="">
          {mainNavList?.map((mainNav, index) => (
            <li key={index} className="my-[.35rem]">
              <NavLink className="pl-1 flex items-center gap-x-[3%]">
                <mainNav.icon />
                <span>{mainNav.navHeaderText}</span>
              </NavLink>
              {mainNav.subNavLinks ? (
                <div
                  className={`bg-gray-50 w-full overflow-hidden transition-all ease-in-out duration-300 ${
                    nav.headerText === "My Chart" && nav.isHeight
                      ? "max-h-[150px]"
                      : "max-h-0"
                  }`}
                >
                  <ul>
                    <li className="flex items-center">
                      <NavLink
                        className={`${
                          nav.subLinkText === "Ethiopia"
                            ? "border-l-4"
                            : "border-l"
                        } transition-all ease-in-out duration-300 border-orange-400 w-full pl-[25%]`}
                        onClick={() => {
                          console.log("Ethiopia");
                          setNav((prev) => {
                            return {
                              ...prev,
                              subLinkText: "Ethiopia",
                            };
                          });
                        }}
                      >
                        Ethiopia
                      </NavLink>
                    </li>
                    <li className="flex items-center">
                      <NavLink
                        className={`${
                          nav.subLinkText === "Russia"
                            ? "border-l-4"
                            : "border-l"
                        } transition-all ease-in-out duration-300 border-orange-400 w-full pl-[25%]`}
                        onClick={() => {
                          console.log("Russia");
                          setNav((prev) => {
                            return {
                              ...prev,
                              subLinkText: "Russia",
                            };
                          });
                        }}
                      >
                        Russia
                      </NavLink>
                    </li>
                    <li className="flex items-center">
                      <NavLink
                        className={`${
                          nav.subLinkText === "China"
                            ? "border-l-4"
                            : "border-l"
                        } transition-all ease-in-out duration-300 border-orange-400 w-full pl-[25%]`}
                        onClick={() => {
                          console.log("China");
                          setNav((prev) => {
                            return {
                              ...prev,
                              subLinkText: "China",
                            };
                          });
                        }}
                      >
                        China
                      </NavLink>
                    </li>
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </li>
          ))}
          <li className="my-[.25rem]">
            <NavLink
              className="pl-1 flex items-center gap-x-[3%]"
              onClick={() => {
                setNav((prev) => {
                  return {
                    ...prev,
                    headerText: "Dashboard",
                    isHeight: false,
                  };
                });
              }}
            >
              <MdDashboard
                className={`${
                  nav.headerText === "Dashboard" ? "text-orange-400" : ""
                }`}
              />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="my-[.25rem]">
            <NavLink
              className={`pl-1 flex items-center justify-between gap-x-[3%] transition-all ease-in-out duration-300 ${
                nav.headerText === "My Chart"
                  ? nav.subLinkText
                    ? "border-l border-orange-400"
                    : "border-l-4 border-orange-400"
                  : ""
              }`}
              onClick={() => {
                setNav((prev) => {
                  return {
                    ...prev,
                    headerText: "My Chart",
                    isHeight: !prev.isHeight,
                  };
                });
              }}
            >
              <div className="flex items-center gap-x-[3%] flex-grow">
                <MdPieChart
                  className={`${
                    nav.headerText === "My Chart" ? "text-orange-400" : ""
                  }`}
                />
                <span>My Chart</span>
              </div>
              {nav.headerText === "My Chart" && nav.isHeight ? (
                <MdKeyboardArrowUp
                  className={`text-lg ${
                    nav.headerText === "My Chart" ? "text-orange-400" : ""
                  }`}
                />
              ) : (
                <MdKeyboardArrowDown
                  className={`text-lg ${
                    nav.headerText === "My Chart" ? "text-orange-400" : ""
                  }`}
                />
              )}
            </NavLink>
            <div
              className={`bg-gray-50 w-full overflow-hidden transition-all ease-in-out duration-300 ${
                nav.headerText === "My Chart" && nav.isHeight
                  ? "max-h-[150px]"
                  : "max-h-0"
              }`}
            >
              <ul>
                <li className="flex items-center">
                  <NavLink
                    className={`${
                      nav.subLinkText === "Ethiopia" ? "border-l-4" : "border-l"
                    } transition-all ease-in-out duration-300 border-orange-400 w-full pl-[25%]`}
                    onClick={() => {
                      console.log("Ethiopia");
                      setNav((prev) => {
                        return {
                          ...prev,
                          subLinkText: "Ethiopia",
                        };
                      });
                    }}
                  >
                    Ethiopia
                  </NavLink>
                </li>
                <li className="flex items-center">
                  <NavLink
                    className={`${
                      nav.subLinkText === "Russia" ? "border-l-4" : "border-l"
                    } transition-all ease-in-out duration-300 border-orange-400 w-full pl-[25%]`}
                    onClick={() => {
                      console.log("Russia");
                      setNav((prev) => {
                        return {
                          ...prev,
                          subLinkText: "Russia",
                        };
                      });
                    }}
                  >
                    Russia
                  </NavLink>
                </li>
                <li className="flex items-center">
                  <NavLink
                    className={`${
                      nav.subLinkText === "China" ? "border-l-4" : "border-l"
                    } transition-all ease-in-out duration-300 border-orange-400 w-full pl-[25%]`}
                    onClick={() => {
                      console.log("China");
                      setNav((prev) => {
                        return {
                          ...prev,
                          subLinkText: "China",
                        };
                      });
                    }}
                  >
                    China
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink>Services</NavLink>
          </li>
        </ul>
      </div>
      <footer>
        <div className="bg-sky-100 rounded-md px-[3%] py-[1.5%] mx-[3%]">
          <div>
            <div>
              <p className="font-medium text-center">
                Please get in touch with your service provider
              </p>
            </div>
            <div className="flex items-center justify-center">
              <img
                className="h-[92px]"
                src="https://cdn.marketing.dixa.com/app/uploads/2023/06/15103251/Best-Call-Center-Software.png"
                alt=""
              />
              {/* <BiSolidPhoneCall className="text-xl"/> */}
            </div>
            <div className="flex items-center justify-center mb-1">
              <button className="flex items-center justify-center rounded-full px-3 py-1 font-bold bg-emerald-600 text-white">
                <BiSolidPhoneCall className="text-xl mr-1" />
                <span>6464</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-1 flex items-center justify-center">
            <button className="flex items-center justify-center gap-1 py-[.075rem] px-3 text-gray-700 border border-gray-300 rounded-sm transition-all ease-in-out duration-300 hover:border-gray-400 hover:text-gray-900">
              <IoIosExit className="text-xl" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomerDashboardLeftSideNav;
