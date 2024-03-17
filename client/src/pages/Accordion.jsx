import { useState } from "react";
// icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = () => {
  // state
  const [accordion, setAccordion] = useState(2);


  // acordion handler
  const accordionHandler = index => {
    setAccordion(index)
  }

  return (
    <div className="h-full">
      <div className="max-w-[720px] mx-auto">
        <div className="py-3">
          <h3 className="text-xl font-black">Accordion</h3>
        </div>

        <div className="m-3 p-3 rounded-md shadow-md">
          <button
            className=" w-full flex items-center justify-between text-gray-700 py-2"
            onClick={() => {
              accordionHandler(1)
            }}
          >
            <span className="text-lg font-black ">
              Ethiopia The Land Of Wisdom
            </span>
            <IoIosArrowDown className="text-xl" />
          </button>

          <div
            className={`grid overflow-hidden transition-all ease-in-out duration-500 ${
              accordion === 1
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="border-t border-gray-200 overflow-hidden">
              <p className="ml-10 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi nobis vero ullam quo dicta libero distinctio vel,
                obcaecati, eveniet aliquid et rerum enim, aspernatur natus ab
                magnam ut deserunt tenetur ratione odio doloribus. Facilis sint,
                placeat praesentium corporis voluptate, aliquam quia atque dolor
                quos quas officia in officiis et dicta?
              </p>
            </div>
          </div>
        </div>

        <div className="m-3 p-3 rounded-md shadow-md">
          <button
            className=" w-full flex items-center justify-between text-gray-700 py-2"
            onClick={() => {
              accordionHandler(2)
            }}
          >
            <span className="text-lg font-black ">
              Bahir Dar The City Of Light
            </span>
            <IoIosArrowDown className="text-xl" />
          </button>

          <div
            className={`grid overflow-hidden transition-all ease-in-out duration-500 ${
              accordion === 2
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="border-t border-gray-200 overflow-hidden">
              <p className="ml-10 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi nobis vero ullam quo dicta libero distinctio vel,
                obcaecati, eveniet aliquid et rerum enim, aspernatur natus ab
                magnam ut deserunt tenetur ratione odio doloribus. Facilis sint,
                placeat praesentium corporis voluptate, aliquam quia atque dolor
                quos quas officia in officiis et dicta?
              </p>
            </div>
          </div>
        </div>

        <div className="m-3 p-3 rounded-md shadow-md">
          <button
            className=" w-full flex items-center justify-between text-gray-700 py-2"
            onClick={() => {
              accordionHandler(3)
            }}
          >
            <span className="text-lg font-black ">
              Gonder The Origin Of History
            </span>
            <IoIosArrowDown className="text-xl" />
          </button>

          <div
            className={`grid overflow-hidden transition-all ease-in-out duration-500 ${
              accordion === 3
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="border-t border-gray-200 overflow-hidden">
              <p className="ml-10 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi nobis vero ullam quo dicta libero distinctio vel,
                obcaecati, eveniet aliquid et rerum enim, aspernatur natus ab
                magnam ut deserunt tenetur ratione odio doloribus. Facilis sint,
                placeat praesentium corporis voluptate, aliquam quia atque dolor
                quos quas officia in officiis et dicta?
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Accordion;
