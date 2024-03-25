import { useState } from "react";
import Chart from "react-apexcharts";

// icons
import { IoAlarmOutline } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";
import { BiSolidUserDetail } from "react-icons/bi";
import { MdEmail, MdClose, MdPhone } from "react-icons/md";

const CustomerDashboardIndex = () => {
  // local states
  const [isMore, setIsMore] = useState(null);

  return (
    <div className="flex-grow relative">
      <div className="w-full h-[90vh] p-[1%] overflow-y-auto">
        {/* promotion area */}
        <div className="bg-sky-100 rounded-md p-[3%] flex items-center justify-between">
          {/* text */}
          <div className="flex-grow">
            <div>
              <h3 className="font-bold text-sm">
                Ma<span className="text-sky-600">ku</span>tta
              </h3>
            </div>
            <div className="my-2">
              <h3 className="font-bold">Legal Management System</h3>
              <p>
                Explore the network of{" "}
                <span className="font-semibold text-sky-600">500+</span> lawyers
                who are members of our service
              </p>
            </div>
            <div>
              <button className="px-5 py-1 rounded-md bg-gray-700 text-white">
                Get Access
              </button>
            </div>
          </div>
          {/* image */}
          <div className="w-[40%] hidden lg:flex items-center justify-center">
            <div className="h-full">
              <img
                className="h-[150px]"
                src="https://th.bing.com/th/id/R.175b3802f7c5c4c98b9bcbdf9a7b9945?rik=98ox9lTe%2FfYIwA&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
            <div className="flex items-center justify-center gap-1">
              <div className="h-[5px] w-[32px] bg-gray-50"></div>
              <div className="h-[5px] w-[32px] bg-gray-50"></div>
              <div className="h-[5px] w-[32px] bg-gray-50"></div>
            </div>
          </div>
        </div>
        {/* chart container */}
        <div className="mt-3 flex items-end justify-between gap-5">
          {/* text */}
          <div className="rounded-md shadow-md w-[30%] px-[2%] py-[2%]">
            <div>
              <h3 className="text-gray-700 font-bold">Next Appointment</h3>
            </div>
            <div className="text-sm text-gray-600 flex items-center gap-3 my-[.05rem]">
              <span>Type:</span>
              <span>Oral Litigation</span>
            </div>
            <div>
              <span className="font-black text-gray-800">5 march, 2024</span>
            </div>
            <div className="w-full flex items-center justify-end">
              <div className="relative">
                <div>
                  <IoAlarmOutline className="text-5xl text-purple-500" />
                </div>
                <div className="absolute z-30 top-1/2 -translate-y-1/2 left-[-1.5rem] -translate-x-1/2">
                  <span className="text-sm font-bold text-white px-3 py-1 rounded-full bg-purple-700">
                    14:30AM
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* chart */}
          <div className="flex-grow h-full">
            <div className="w-full rounded-md shadow-md px-[2%] py-[1%]">
              <Chart
                width={"100%"}
                height={124}
                type="bar"
                series={[
                  {
                    name: "spent",
                    data: [
                      120, 100, 145, 170, 100, 200, 125, 125, 160, 150, 130,
                      100,
                    ],
                  },
                ]}
                options={{
                  legend: {
                    show: false,
                  },
                  dataLabels: {
                    show: false,
                    formatter: (val) => ``,
                  },
                  tooltip: {
                    fillSeriesColor: true,
                  },
                  xaxis: {
                    categories: [
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                    ],
                    tickPlacement: "off",
                  },
                  yaxis: {
                    labels: {
                      show: false,
                    },
                  },
                  grid: {
                    show: false,
                  },
                  plotOptions: {
                    bar: {
                      distributed: true,
                      // colors: ["#00B136", "#B23601", "#011CB2", "#A001B2"],
                    },
                  },
                }}
              ></Chart>
            </div>
          </div>
        </div>
        {/* table container */}
        <div className="mt-5 flex items-start justify-between gap-3">
          <div className="w-[70%] bg-sky-100 p-[1%] rounded-md">
            <header className="flex items-center justify-between my-2">
              <div>
                <h3 className="text-gray-700 whitespace-nowrap font-bold">
                  Case Team
                </h3>
              </div>
              <div className="flex-grow flex items-center pl-[5%]">
                <div className="flex items-center w-[75%] bg-white rounded-md p-1">
                  <RiSearch2Line className="text-xl mr-1 text-gray-700" />
                  <input
                    type="text"
                    placeholder="search"
                    className="focus:outline-none focus:ring-0 border-none bg-transparent w-full text-sm"
                  />
                </div>
              </div>
              <div>
                <button className="text-gray-500 text-sm font-semibold">
                  view all
                </button>
              </div>
            </header>
            {/* table */}
            <div className="w-full max-h-[50vh] overflow-y-scroll">
              <table className=" w-full text-gray-700 text-sm">
                <tbody>
                  {[...Array(120)].map((item, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b-8 border-sky-100"
                    >
                      {/* user profile */}
                      <td>
                        <div className="flex items-center gap-1 px-1 py-[.13rem]">
                          <div className="w-[24px] aspect-square rounded-full overflow-hidden">
                            <img
                              className="h-full object-cover"
                              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex items-center gap-1">
                            <span>Haddis</span>
                            <span>Fanta</span>
                          </div>
                        </div>
                      </td>
                      {/* profession */}
                      <td>
                        <div>
                          <span>Lawyer</span>
                        </div>
                      </td>
                      {/* phone */}
                      <td>
                        <div>
                          <span>+251923996736</span>
                        </div>
                      </td>
                      {/* email */}
                      <td>
                        <div>
                          <span>haddisfun7@gmail.com</span>
                        </div>
                      </td>
                      {/* status */}
                      <td>
                        <div className="px-3 py-[.1rem] rounded-sm bg-yellow-500 text-white flex items-center justify-center cursor-pointer">
                          <span>active</span>
                        </div>
                      </td>
                      {/* action */}
                      <td>
                        <div className="relative">
                          <button
                            onClick={() => {
                              console.log(index);
                              if (isMore === index) {
                                setIsMore(null);
                              } else {
                                setIsMore(index);
                              }
                            }}
                          >
                            <IoMdMore className="text-xl mt-[.1rem]" />
                          </button>
                          {isMore === index ? (
                            <div className="absolute right-0 top-[100%] bg-white w-[120px] max-h-max p-1 rounded-sm shadow-lg border border-gray-200 z-50">
                              <div className="flex items-center gap-1 p-1 border-b border-gray-200 my-1 cursor-pointer">
                                <BiSolidUserDetail className="text-2xl" />
                                <span className="text-sm font-semibold">
                                  Detail
                                </span>
                              </div>
                              <div className="flex items-center gap-1 p-1 border-b border-gray-200 my-1 cursor-pointer">
                                <MdEmail className="text-2xl" />
                                <span className="text-sm font-semibold">
                                  Message
                                </span>
                              </div>
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-[30%] bg-green-400">right card container</div>
        </div>
      </div>
      {/* detail pop uo */}
      <div className="fixed w-[350px] h-[450px] bg-white rounded-md overflow-hidden shadow-lg z-[75] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col">
        <header className="p-2 bg-sky-400 text-white flex items-center justify-between shadow-headerBottomShadow">
          <div>
            <span className="text-sm font-semibold">customer detail</span>
          </div>
          <div>
            <div>
              <button className="p-1 rounded-full bg-black bg-opacity-5 transition-all ease-in-out duration-300 hover:bg-opacity-15">
                <MdClose className="text-xl" />
              </button>
            </div>
          </div>
        </header>
        {/* content */}
        <div className="p-3 flex gap-3 mb-1 border-b border-gray-100">
          <div className="flex flex-col items-center">
            <div className="w-[100px] aspect-square overflow-hidden rounded-full border-4 border-white shadow-md">
              <img
                className="h-full object-cover"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                alt=""
              />
            </div>
            <div className="flex items-center justify-center gap-1 my-1 font-medium text-gray-500">
              <span>Haddis</span>
              <span>Fanta</span>
            </div>
          </div>
          <div className="text-sm text-gray-700 p-2">
            <div className="my-2">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus id quae hic.
              </p>
            </div>
            <div className="my-2">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        </div>
        {/* contact detail */}
        <div>
          <div className="flex items-center justify-center text-gray-700 my-2 text-xl font-semibold">
            <h3>Contact</h3>
          </div>
          <div className="flex items-center justify-center text-gray-700">
            <ul>
              <li className="my-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center font-medium">
                    <MdPhone className="text-xl" />
                    <span>Phone: </span>
                  </div>
                  <div>
                    <span>+251923996736</span>
                  </div>
                </div>
              </li>
              <li className="my-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center font-medium">
                    <MdEmail className="text-xl" />
                    <span>Email: </span>
                  </div>
                  <div>
                    <span>+251923996736</span>
                  </div>
                </div>
              </li>
              <li className="my-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center font-medium">
                    <MdPhone className="text-xl" />
                    <span>Phone: </span>
                  </div>
                  <div>
                    <span>+251923996736</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <footer>footer</footer>
      </div>
    </div>
  );
};

export default CustomerDashboardIndex;
