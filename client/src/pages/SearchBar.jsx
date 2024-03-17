import { useState } from "react";

import { RiSearch2Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

const SearchBar = () => {
  // states
  const [search, setSearch] = useState(false);
  return (
    <div className="h-full bg-gradient-to-r from-blue-700 to-red-600">
      <div className="max-w-[820px] mx-auto p-[1%]">
        <div className="bg-white rounded-sm shadow-lg p-3 text-gray-500">
          <div className="w-full flex items-center justify-end">
            <div
              className={`overflow-hidden flex items-center transition-all ease-in-out duration-300 ${
                search ? "w-full" : "w-[0px]"
              }`}
            >
              <div className="w-full  flex items-center border-2 border-gray-500 rounded-full">
                <RiSearch2Line className="text-lg mx-1" />
                <input
                  type="text"
                  className="w-full focus:outline-none focus:ring-0 bg-transparent"
                />
              </div>
              <button
                onClick={() => {
                  setSearch(false);
                }}
              ></button>
            </div>

            <button
              className={`p-1 rounded-full transition-all ease-in-out duration-300 ${search ? '' : 'border border-gray-500 '}`}
              onClick={() => {
                setSearch(!search);
              }}
            >
              {search ? (
                <GrClose className="text-lg" />
              ) : (
                <RiSearch2Line className="text-lg" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
