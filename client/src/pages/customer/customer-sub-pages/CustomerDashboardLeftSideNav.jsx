// icons
import { AiOutlineClose } from "react-icons/ai";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosExit } from "react-icons/io";

const CustomerDashboardLeftSideNav = () => {
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
              src="./images/site-logo/final-logo.png"
              alt=""
            />
          </div>
        </div>
      </header>
      {/* nav */}
      <div className="flex-grow">nav</div>
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
