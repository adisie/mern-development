import { FaBalanceScale } from "react-icons/fa";
const Home = () => {
  return (
    <div className="h-[84vh] overflow-y-auto">
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

      {/* second order */}
      <div className="px-[15%]">
        <div className="flex justify-between items-end">
          <div>left</div>
          <div className="w-[65%]">
            <div className="flex items-center justify-evenly py-1 mb-3">

              <div className="flex items-center justify-center gap-x-3 rounded-sm shadow-lg p-2 bg-white">
                <div className="p-2 border-2 rounded-full border-green-700 bg-green-100 text-green-700">
                  <FaBalanceScale className="text-xl" />
                </div>
                <div className="text-center">
                  <div>
                    <span className="text-lg font-bold">27.5k</span>
                  </div>
                  <div>customers</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-x-3 rounded-sm shadow-lg p-2 bg-white">
                <div className="p-2 border-2 rounded-full border-green-700 bg-green-100 text-green-700">
                  <FaBalanceScale className="text-xl" />
                </div>
                <div className="text-center">
                  <div>
                    <span className="text-lg font-bold">27.5k</span>
                  </div>
                  <div>customers</div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-x-3 rounded-sm shadow-lg p-2 bg-white">
                <div className="p-2 border-2 rounded-full border-green-700 bg-green-100 text-green-700">
                  <FaBalanceScale className="text-xl" />
                </div>
                <div className="text-center">
                  <div>
                    <span className="text-lg font-bold">27.5k</span>
                  </div>
                  <div>customers</div>
                </div>
              </div>

            </div>
            <div className="flex justify-between gap-x-3 items-end">
              <div className="flex-grow rounded-md overflow-hidden relative flex items-center justify-center">
                <div className="w-full h-full bg-black">
                  <img
                    src="https://www.austinchronicle.com/binary/fa07/pols_feature27.jpg"
                    className="w-full opacity-[.25]"
                    alt=""
                  />
                </div>
                <div className="absolute z-50 text-white">
                  <p>hello world</p>
                  <p>ethiopia the land of wisdom</p>
                </div>
              </div>
              <div className="flex-grow rounded-md overflow-hidden relative flex items-center justify-center">
                <div className="w-full h-full bg-black">
                  <img
                    src="https://www.austinchronicle.com/binary/fa07/pols_feature27.jpg"
                    className="w-full opacity-[.25]"
                    alt=""
                  />
                </div>
                <div className="absolute z-50 text-white">
                  <p>hello world</p>
                  <p>ethiopia the land of wisdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
