// icons
import { VscVerifiedFilled } from "react-icons/vsc";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { AiOutlineClose, AiFillClockCircle } from "react-icons/ai";

const CustomerDashboardRightSideBar = () => {

   // right side bar toggler
   const rightSideBarToggler = () => {
    let rightSideBar = document.getElementById('customer-dashboard-right-side-bar') 
    if(rightSideBar?.classList.contains('absolute')){
      rightSideBar?.classList.add('right-[-100vw]')
      rightSideBar?.classList.remove('right-0')
    }
  }
  return (
    <div
      className="p-[1%] pb-0 pr-0 min-w-[250px] absolute top-0 right-[-100vw] transition-all ease-in-out duration-150 xl:relative xl:right-0 xl:top-0"
      id="customer-dashboard-right-side-bar"
    >
      <div className="w-full h-full bg-white xl:rounded-md shadow-lg px-[5%]">
        {/* user profile container */}
        <div className="relative">
          <div className="w-full flex items-center justify-center">
            <div className="p-2 border-4 rounded-full border-l-sky-500 border-t-sky-300 border-r-sky-100 border-b-transparent">
              <img
                className="w-[100px] aspect-square object-cover rounded-full"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="w-full flex items-center justify-center">
              <h3 className="font-bold text-sky-500">Welcome</h3>
            </div>
          </div>
          <div>
            <div className="w-full flex items-center justify-center gap-x-2 font-semibold">
              <div className="flex items-center justify-center gap-1">
                <span>Haddis</span>
                <span>Fanta</span>
              </div>
              <div>
                <VscVerifiedFilled className="text-lg text-sky-500" />
              </div>
            </div>
          </div>
          <div>
            <div className="w-full flex items-center justify-center gap-x-1 text-gray-500">
              <span>Customer Account</span>
            </div>
          </div>
          <div className="absolute top-1 left-0 flex xl:hidden">
            <button className="text-xl text-gray-500" onClick={()=>{
              rightSideBarToggler()
            }}>
              <AiOutlineClose/>
            </button>
          </div>
        </div>
        {/* calendar */}
        <div className="px-[5%]">
          <div className="bg-gray-200 rounded-md p-[5%] mt-3">
            <header className="flex items-center justify-between gap-3 my-2">
              <div className="cursor-pointer text-lg">
                <MdOutlineKeyboardArrowLeft />
              </div>
              <div>
                <h3 className="text-gray-700 font-semibold">December</h3>
              </div>
              <div className="cursor-pointer text-lg">
                <MdOutlineKeyboardArrowRight />
              </div>
            </header>
            <div className="grid grid-cols-7 gap-0">
              <div className="flex flex-col items-center gap-y-3">
                <div>
                  <h3>M</h3>
                </div>
                <div>
                  <span className="font-bold text-gray-600">12</span>
                </div>
              </div>
              <div className="flex flex-col items-center rounded-full text-white gap-y-3 bg-blue-950">
                <div>
                  <h3>T</h3>
                </div>
                <div className="bg-emerald-700 mb-1 px-1 rounded-full">
                  <span className="font-medium text-sm">13</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-y-3">
                <div>
                  <h3>W</h3>
                </div>
                <div>
                  <span className="font-bold text-gray-600">14</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-y-3">
                <div>
                  <h3>T</h3>
                </div>
                <div>
                  <span className="font-bold text-gray-600">15</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-y-3">
                <div>
                  <h3>F</h3>
                </div>
                <div>
                  <span className="font-bold text-gray-600">16</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-y-3">
                <div>
                  <h3>S</h3>
                </div>
                <div>
                  <span className="font-bold text-gray-600">17</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-y-3">
                <div>
                  <h3>S</h3>
                </div>
                <div>
                  <span className="font-bold text-gray-600">18</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* balance summary */}
        <div className="mt-5 border border-black border-opacity-15 rounded-md border-r-transparent border-b-transparent">
          <div className="p-2">
            <div>
              <h3 className="text-gray-500">Total Balance</h3>
            </div>
            <div>
              <h3 className="text-xl font-bold ">$21,328.00</h3>
            </div>
            <div className="flex items-center justify-between mt-2 pb-3 border-b border-gray-200">
              <button className="px-[10%] py-[.13rem] rounded-sm text-white bg-yellow-600">
                Request
              </button>
              <button className="px-[10%] py-[.13rem] rounded-sm text-white bg-yellow-600">
                Transfer
              </button>
            </div>
          </div>
          <div>
            <div className="p-2">
              <header className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-gray-700">
                    Expense Analysis
                  </h3>
                </div>
                <div>
                  <button className="text-xs p-1 rounded-full flex items-center justify-between gap-3 border border-gray-200">
                    <span className="text-gray-500">August</span>
                    <MdOutlineKeyboardArrowDown className="text-lg" />
                  </button>
                </div>
              </header>
              <div>
                <h3 className="font-medium text-gray-500 text-sm">Total</h3>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex-grow text-sm text-gray-500 pb-1 border-b-4 border-purple-800">
                  <div>
                    <span>Total Spent</span>
                  </div>
                  <div className="text-xs font-semibold text-gray-700">
                    $23,100.00
                  </div>
                </div>
                <div className="flex-grow text-sm text-gray-500 pb-1 border-b-4 border-purple-500">
                  <div>
                    <span>Utility</span>
                  </div>
                  <div className="text-xs font-semibold text-gray-700">
                    $23,100.00
                  </div>
                </div>
                <div className="flex-grow text-sm text-gray-500 pb-1 border-b-4 border-purple-200">
                  <div>
                    <span>Refund</span>
                  </div>
                  <div className="text-xs font-semibold text-gray-700">
                    $23,100.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboardRightSideBar;
