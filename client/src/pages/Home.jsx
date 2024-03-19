import { useState } from "react";
// icons
import { FaBalanceScale, FaCarCrash, FaFolderOpen } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Home = () => {
  const [accordion, setAccordion] = useState(2);
  return (
    <div className="h-[calc(100vh-14.85vh)] overflow-y-auto">
      {/* slider */}
      <div className="relative w-full h-[200px] flex items-center justify-center">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden bg-black">
          <img
            className="w-full opacity-25"
            src="https://cyrilcorporateredesign.lexblogplatform.com/wp-content/uploads/sites/857/2022/03/Arbitration.png"
            alt=""
          />
        </div>
        <div className="absolute z-50 flex items-center justify-center p-[10%]">
          <div className="text-white text-center">
            <h3 className="text-xl font-bold">Legal Zoom</h3>
            <p>Lorem ipsum </p>
          </div>
        </div>
      </div>
      {/* second element */}
      <div className="px-[3%] sm:px-[10%]">
        <div className="flex items-end justify-between gap-5 flex-col md:flex-row ">
          {/* top-left */}
          <div className="w-[100%] md:w-[30%] min-w-[250px] bg-cyan-500 relative z-50 mt-[-32px] flex-row-reverse flex md:flex-col text-white">
            <div className="w-[75%] self-start md:self-end ">
              <img
                className="h-full"
                src="https://www.freep.com/gcdn/presto/2019/05/15/USAT/63da53dd-837c-480a-bcbc-0a6f9c89d014-ALL_RISE_2.jpg?width=660&height=439&fit=crop&format=pjpg&auto=webp"
                alt=""
              />
            </div>
            <div className="w-[85%] p-[5%]">
              <p>
                Lorem sit amet ethiopia
                <span className="text-black font-bold">consectetur</span>{" "}
                adipisicing
              </p>
              <button className=" mt-1 sm:my-7 md:my-10 px-5 py-1 rounded-sm border-2 border-gray-50 transition-all ease-in-out duration-300 hover:bg-gray-50 hover:text-cyan-700">
                join us
              </button>
            </div>
          </div>
          {/* bottom-right */}
          <div className="flex-grow h-[100%] flex flex-col gap-y-5">
            {/* top cards */}
            <div className="w-full flex items-center justify-evenly">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-sm shadow-md bg-white  p-3 sm:p-1 py-5">
                <div className="p-1 border-2 border-emerald-700 text-emerald-700 bg-emerald-100 rounded-full">
                  <FaCarCrash className="text-xl" />
                </div>
                <div>
                  <div>
                    <span className="text-lg text-gray-700 font-black">
                      27.64k
                    </span>
                  </div>
                  <div>
                    <span>customers</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-sm shadow-md bg-white  p-3 sm:p-1 py-5">
                <div className="p-1 border-2 border-orange-700 text-orange-700 bg-orange-100 rounded-full">
                  <FaFolderOpen className="text-xl" />
                </div>
                <div>
                  <div>
                    <span className="text-lg text-gray-700 font-black">
                      27.64k
                    </span>
                  </div>
                  <div>
                    <span>customers</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-sm shadow-md bg-white  p-3 sm:p-1 py-5">
                <div className="p-1 border-2 border-blue-700 text-blue-700 bg-blue-100 rounded-full">
                  <MdDashboard className="text-xl" />
                </div>
                <div>
                  <div>
                    <span className="text-lg text-gray-700 font-black">
                      27.64k
                    </span>
                  </div>
                  <div>
                    <span>customers</span>
                  </div>
                </div>
              </div>
            </div>
            {/* bottom cards */}
            <div className="flex items-center justify-between gap-5">
              <div className="flex-grow relative">
                <div className="h-full w-full rounded-md overflow-hidden bg-black">
                  <img
                    className="w-full max-h-[250px] opacity-25"
                    src="https://t4.ftcdn.net/jpg/05/65/10/13/360_F_565101314_erBGfTgVtC7f7D7oCSLoExtbdFuiZu7N.jpg"
                    alt=""
                  />
                </div>
                <div className="absolute left-0 top-0 w-full h-full flex items-center text-white">
                  <div className="pl-[5%]">
                    <div>
                      <button className="px-5 py-1 bg-orange-500 rounded-sm my-3 sm:my-5">
                        contact
                      </button>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">7/24</h3>
                      <span>on service</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow relative">
                <div className="h-full w-full rounded-md overflow-hidden bg-black">
                  <img
                    className="w-full max-h-[250px] opacity-25"
                    src="https://t4.ftcdn.net/jpg/05/65/10/13/360_F_565101314_erBGfTgVtC7f7D7oCSLoExtbdFuiZu7N.jpg"
                    alt=""
                  />
                </div>
                <div className="absolute left-0 top-0 w-full h-full flex items-center text-white">
                  <div className="pl-[5%]">
                    <div>
                      <button className="px-5 py-1 bg-orange-500 rounded-sm my-3 sm:my-5">
                        contact
                      </button>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">7/24</h3>
                      <span>on service</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third order  */}
      <div className="px-[3%] sm:px-[7%] py-5">
        {/* header */}
        <header>
          <p>some text over here</p>
          <h1 className="text-2xl text-gray-700 font-bold my-1">
            Find Top Tallents
          </h1>
        </header>
        {/* content */}
        <div className="flex flex-col sm:flex-row item justify-between gap-5 mt-3">
          {/* accordion */}
          <div className="w-[100%] sm:w-[55%] sm:min-w-[55%]">
            <div className="rounded-sm p-2 shadow-sm mt-3 overflow-hidden">
              <div
                className="flex items-center gap-x-2 cursor-pointer"
                onClick={() => {
                  setAccordion(1);
                }}
              >
                {accordion === 1 ? (
                  <CiCircleMinus className="text-2xl text-gray-900" />
                ) : (
                  <CiCirclePlus className="text-2xl text-gray-900" />
                )}
                <span className="font-semibold text-gray-900">
                  Ethiopia The Land Of Wisdom
                </span>
              </div>
              <div
                className={`pl-7 overflow-hidden transition-all ease-in-out duration-300  ${
                  accordion === 1
                    ? "h-[210px] py-3 mt-2 border-t border-gray-200"
                    : "h-[0px]"
                }`}
              >
                <p>
                  Lorem ipsum Et ipsa sit nihil in itaque laborum doloremque
                  reiciendis. Ad similique obcaecati facere hic consequatur,
                  voluptas nihil atque, vero pariatur tempora est officia sint
                  inventore eaque quisquam deleniti magnam optio dicta nam
                  laboriosam error perferendis facilis illo dolorum? Impedit
                  minus quae voluptates corporis nemo.
                </p>
              </div>
            </div>

            <div className="rounded-sm p-2 shadow-sm mt-3 overflow-hidden">
              <div
                className="flex items-center gap-x-2 cursor-pointer"
                onClick={() => {
                  setAccordion(2);
                }}
              >
                {accordion === 2 ? (
                  <CiCircleMinus className="text-2xl text-gray-900" />
                ) : (
                  <CiCirclePlus className="text-2xl text-gray-900" />
                )}
                <span className="font-semibold text-gray-900">
                  Gonder Adama The Green Land
                </span>
              </div>
              <div
                className={`pl-7 overflow-hidden transition-all ease-in-out duration-300 ${
                  accordion === 2
                    ? "h-[210px] py-3 mt-2 border-t border-gray-200"
                    : "h-[0px]"
                }`}
              >
                <p>
                  Lorem ipsum Et ipsa sit nihil in itaque laborum doloremque
                  reiciendis. Ad similique obcaecati facere hic consequatur,
                  voluptas nihil atque, vero pariatur tempora est officia sint
                  inventore eaque quisquam deleniti magnam optio dicta nam
                  laboriosam error perferendis facilis illo dolorum? Impedit
                  minus quae voluptates corporis nemo.
                </p>
              </div>
            </div>

            <div className="rounded-sm p-2 shadow-sm mt-3 overflow-hidden">
              <div
                className="flex items-center gap-x-2 cursor-pointer"
                onClick={() => {
                  setAccordion(3);
                }}
              >
                {accordion === 3 ? (
                  <CiCircleMinus className="text-2xl text-gray-900" />
                ) : (
                  <CiCirclePlus className="text-2xl text-gray-900" />
                )}
                <span className="font-semibold text-gray-900">
                  Hawassa The City Of Nature
                </span>
              </div>
              <div
                className={`pl-7 overflow-hidden transition-all ease-in-out duration-300 ${
                  accordion === 3
                    ? "h-[210px] py-3 mt-2 border-t border-gray-200"
                    : "h-[0px]"
                }`}
              >
                <p>
                  Lorem ipsum Et ipsa sit nihil in itaque laborum doloremque
                  reiciendis. Ad similique obcaecati facere hic consequatur,
                  voluptas nihil atque, vero pariatur tempora est officia sint
                  inventore eaque quisquam deleniti magnam optio dicta nam
                  laboriosam error perferendis facilis illo dolorum? Impedit
                  minus quae voluptates corporis nemo.
                </p>
              </div>
            </div>

            <div className="rounded-sm p-2 shadow-sm mt-3 overflow-hidden">
              <div
                className="flex items-center gap-x-2 cursor-pointer"
                onClick={() => {
                  setAccordion(4);
                }}
              >
                {accordion === 4 ? (
                  <CiCircleMinus className="text-2xl text-gray-900" />
                ) : (
                  <CiCirclePlus className="text-2xl text-gray-900" />
                )}
                <span className="font-semibold text-gray-900">
                  Bahir Dar The City Of Ligth
                </span>
              </div>
              <div
                className={`pl-7 overflow-hidden transition-all ease-in-out duration-300 ${
                  accordion === 4
                    ? "h-[210px] py-3 mt-2 border-t border-gray-200"
                    : "h-[0px]"
                }`}
              >
                <p>
                  Lorem ipsum Et ipsa sit nihil in itaque laborum doloremque
                  reiciendis. Ad similique obcaecati facere hic consequatur,
                  voluptas nihil atque, vero pariatur tempora est officia sint
                  inventore eaque quisquam deleniti magnam optio dicta nam
                  laboriosam error perferendis facilis illo dolorum? Impedit
                  minus quae voluptates corporis nemo.
                </p>
              </div>
            </div>
          </div>
          {/* cards */}
          <div className="flex-grow flex flex-col p-5 gap-5">
            {/* top card */}
            <div className="flex-grow bg-red-200 py-5 sm:py-1 rounded-sm overflow-hidden flex items-center justify-between gap-1">
              {/* text */}
              <div className="flex-grow h-full flex flex-col justify-center pl-3">
                <div>
                  <h3 className="font-bold">Bahir Dar</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                </div>
              </div>
              {/* image */}
              <div className="flex-grow h-full relative">
                <img
                  src="./public/images/img.png"
                  className="h-full relative z-20"
                  alt=""
                />
                <div className="absolute z-0 right-0 bottom-0 rounded-full w-[85%] h-[75%] bg-white"></div>
              </div>
            </div>
            {/* bottom card */}
            <div className="flex-grow bg-green-200 py-5 sm:py-1 rounded-sm overflow-hidden flex items-center justify-between gap-1">
              {/* text */}
              <div className="flex-grow h-full flex flex-col justify-center pl-3">
                <div>
                  <h3 className="font-bold">Bahir Dar</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                </div>
              </div>
              {/* image */}
              <div className="flex-grow h-full relative">
                <img
                  src="./public/images/img.png"
                  className="h-full relative z-20"
                  alt=""
                />
                <div className="absolute z-0 right-0 bottom-0 rounded-full w-[85%] h-[75%] bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* fourth order container */}
      <div className="px-[3%] sm:px-[7%] py-5 bg-gray-200 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex-grow grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="p-3 rounded-md bg-gray-100 shadow-md">
            <header className="flex items-center justify-between p-1 py-3 border-b border-gray-300">
              <div className="p-1 border border-green-700 rounded-full text-green-700 text-xl bg-green-100">
                <MdDashboard />
              </div>
              <h3 className="font-semibold">some text</h3>
            </header>
            <div className="py-3">
              <p>Lorem, ipsum Doloremque.</p>
            </div>
          </div>
          <div className="p-3 rounded-md bg-gray-100 shadow-md">
            <header className="flex items-center justify-between p-1 py-3 border-b border-gray-300">
              <div className="p-1 border border-green-700 rounded-full text-green-700 text-xl bg-green-100">
                <MdDashboard />
              </div>
              <h3 className="font-semibold">some text</h3>
            </header>
            <div className="py-3">
              <p>Lorem, ipsum Doloremque.</p>
            </div>
          </div>
          <div className="p-3 rounded-md bg-gray-100 shadow-md">
            <header className="flex items-center justify-between p-1 py-3 border-b border-gray-300">
              <div className="p-1 border border-green-700 rounded-full text-green-700 text-xl bg-green-100">
                <MdDashboard />
              </div>
              <h3 className="font-semibold">some text</h3>
            </header>
            <div className="py-3">
              <p>Lorem, ipsum Doloremque.</p>
            </div>
          </div>
          <div className="p-3 rounded-md bg-gray-100 shadow-md">
            <header className="flex items-center justify-between p-1 py-3 border-b border-gray-300">
              <div className="p-1 border border-green-700 rounded-full text-green-700 text-xl bg-green-100">
                <MdDashboard />
              </div>
              <h3 className="font-semibold">some text</h3>
            </header>
            <div className="py-3">
              <p>Lorem, ipsum Doloremque.</p>
            </div>
          </div>
          <div className="p-3 rounded-md bg-gray-100 shadow-md">
            <header className="flex items-center justify-between p-1 py-3 border-b border-gray-300">
              <div className="p-1 border border-green-700 rounded-full text-green-700 text-xl bg-green-100">
                <MdDashboard />
              </div>
              <h3 className="font-semibold">some text</h3>
            </header>
            <div className="py-3">
              <p>Lorem, ipsum Doloremque.</p>
            </div>
          </div>
          <div className="p-3 rounded-md bg-gray-100 shadow-md">
            <header className="flex items-center justify-between p-1 py-3 border-b border-gray-300">
              <div className="p-1 border border-green-700 rounded-full text-green-700 text-xl bg-green-100">
                <MdDashboard />
              </div>
              <h3 className="font-semibold">some text</h3>
            </header>
            <div className="py-3">
              <p>Lorem, ipsum Doloremque.</p>
            </div>
          </div>
        </div>
        <div className="flex-grow sm:max-w-[30%]">
          <div>
            <h3 className="text-lg font-bold my-1">Some header text</h3>
            <span className="block text-xs">some text</span>
            <button className="px-7 py-1 rounded-sm text-white bg-orange-500 my-3">
              button
            </button>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto omnis, facilis vitae beatae, accusantium, ducimus
              nostrum voluptatibus quidem repudiandae
            </p>
          </div>
        </div>
      </div>
      {/* fifth order container with-blue bg */}
      <div>
        
      </div>
    </div>
  );
};

export default Home;
