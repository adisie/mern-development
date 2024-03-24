
const CustomerDashboardIndex = () => {
  return (
    <div className="flex-grow">
        <div className="w-full h-[90vh] p-[1%] overflow-y-auto">
            {/* promotion area */}
            <div className="bg-sky-100 rounded-md p-[3%] flex items-center justify-between">
                {/* text */}
                <div className="flex-grow">
                    <div>
                        <h3 className="font-bold text-sm">Ma<span className="text-sky-600">ku</span>tta</h3>
                    </div>
                    <div className="my-2">
                        <h3 className="font-bold">Legal Management System</h3>
                        <p>Explore the network of <span className="font-semibold text-sky-600">500+</span> lawyers who are members of our service</p>
                    </div>
                    <div>
                        <button className="px-5 py-1 rounded-md bg-gray-700 text-white">Get Access</button>
                    </div>
                </div>
                {/* image */}
                <div className="w-[40%] hidden lg:flex items-center justify-center">
                    <div className="h-full">
                        <img className="h-[150px]" src="https://th.bing.com/th/id/R.175b3802f7c5c4c98b9bcbdf9a7b9945?rik=98ox9lTe%2FfYIwA&pid=ImgRaw&r=0" alt="" />
                    </div>
                    <div className="flex items-center justify-center gap-1">
                        <div className="h-[5px] w-[32px] bg-gray-50"></div>
                        <div className="h-[5px] w-[32px] bg-gray-50"></div>
                        <div className="h-[5px] w-[32px] bg-gray-50"></div>
                    </div>
                </div>
            </div>
            {/* chart container */}
            <div className="mt-1">chart container</div>
        </div>
    </div>
  )
}

export default CustomerDashboardIndex