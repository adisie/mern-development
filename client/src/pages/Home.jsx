import { FaBalanceScale } from "react-icons/fa";
const Home = () => {
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              officiis assumenda fuga.
            </p>
          </div>
        </div>
      </div>
      {/* second element */}
      <div className="px-[10%]">
        <div className="flex items-end justify-between gap-5 flex-col md:flex-row ">
          {/* top-left */}
          <div className="w-[100%] md:w-[35%] min-w-[250px] bg-cyan-500 relative z-50 mt-[-32px] flex-row-reverse flex md:flex-col text-white">
            <div className="w-[75%] self-start md:self-end ">
              <img
                className="h-full"
                src="https://www.freep.com/gcdn/presto/2019/05/15/USAT/63da53dd-837c-480a-bcbc-0a6f9c89d014-ALL_RISE_2.jpg?width=660&height=439&fit=crop&format=pjpg&auto=webp"
                alt=""
              />
            </div>
            <div className="w-[85%] p-[5%]">
              <p>
                Lorem ipsum dolor sit amet{" "}
                <span className="text-black font-bold">consectetur</span>{" "}
                adipisicing elit.
              </p>
              <button className=" mt-1 sm:my-7 md:my-10 px-5 py-1 rounded-sm border-2 border-gray-50 transition-all ease-in-out duration-300 hover:bg-gray-50 hover:text-cyan-700">
                join us
              </button>
            </div>
          </div>
          {/* bottom-right */}
          <div className="flex-grow h-[100%]">
            {/* top cards */}
            <div>top cards</div>
            {/* bottom cards */}
            <div className="flex items-center justify-between gap-5">
              <div className="flex-grow bg-red-400">
                <div className="h-full w-full rounded-md overflow-hidden">
                  <img className="w-full" src="https://pngtree.com/freebackground/legal-balance-3d-gavel-rests-on-book_4027381.html" alt="" />
                </div>
              </div>
              <div className="flex-grow bg-blue-600">right car</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
