// icons
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const CustomerDashboardHomeHeader = () => {
  return (
    <header className="py-2 flex items-center justify-between  shadow-headerBottomShadow">
      
      <div className="flex items-center gap-[5%] pl-[1%] w-[70%]">
        {/* icon */}
        <div className="cursor-pointer">
          <AiOutlineMenu className="text-gray-700 text-2xl"/>
        </div>
        {/* search bar */}
        <div className="pl-[3%] flex-grow">
          <div className="flex items-center bg-gray-100 p-1 rounded-sm w-[55%]">
            <CiSearch className="text-2xl mr-1 text-gray-700"/>
            <input type="text" placeholder="search" className="focus:outline-none focus:ring-0 border-none bg-transparent w-full" />
          </div>
        </div>
      </div>

      <div className="w-[30%]">right</div>
    </header>
  );
};

export default CustomerDashboardHomeHeader;
