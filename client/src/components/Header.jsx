import { FaPenAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
      <header className="py-[1%] border-b border-emerald-700 border-opacity-25">
          {/* nav container */}
          <div className="main-container-max-width flex items-center justify-between">
              {/* site logo */}
              <div className="flex items-center text-emerald-700 cursor-pointer font-black">
                  <FaPenAlt className="text-2xl"/>
                  <span className="font-medium bg-opacity-50">my</span>
                  <span className="text-xl">Note</span>
              </div>
              {/* search bar */}
              <div>
                  <div className="flex items-center bg-black bg-opacity-15 rounded-full py-[.05rem]">
                      <CiSearch className="m-1 text-2xl"/>
                      <input type="text" placeholder="search here" className="focus:outline-none focus:ring-0 bg-transparent border-none"/>
                  </div>
              </div>

              {/* user credentials */}
              <div className="flex items-center justify-end gap-x-2">
                  <span>Haddis</span>

                  <div className="w-[28px] h-[28px] rounded-full overflow-hidden">
                      <img className="w-[100%] h-[100%] object-cover object-center" src="https://st.depositphotos.com/1008939/1316/i/450/depositphotos_13163725-stock-photo-young-man.jpg" alt="" />
                  </div>

                  <button className="px-3 py-[.13rem] rounded-sm text-gray-200 bg-emerald-700">logout</button>
              </div>
          </div>
    </header>
  )
}

export default Header