import Chart from "react-apexcharts";

// icons
import { IoAlarmOutline } from "react-icons/io5";

const CustomerDashboardIndex = () => {
  return (
    <div className="flex-grow">
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
      </div>
    </div>
  );
};

export default CustomerDashboardIndex;
