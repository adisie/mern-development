
const Header = () => {

    // handler
    const userProfileDropDownHandler = () => {
        let dropdown = document.getElementById('user-profile-dropdown')
        if(dropdown?.classList.contains('h-[0px]')){
            dropdown?.classList.remove('h-[0px]')
            dropdown?.classList.add('h-[350px]')
        }else{
            dropdown?.classList.add('h-[0px]')
            dropdown?.classList.remove('h-[350px]')
        }
    }
  return (
    <header className="w-full shadow-md py-1">
        <div className="max-w-[1020px] mx-auto px-[5%] flex items-center justify-between">
            {/* site logo */}
            <div>
                <h3 className="text-lg font-black cursor-pointer">
                    <span className="text-sm">high</span>
                    <span className="text-gray-500">Land</span>
                </h3>
            </div>
            {/* user profile */}
            <div className="relative">
                <div className="flex items-center justify-between gap-1 cursor-pointer px-5 py-[.1rem] border border-gray-200 rounded-sm" onClick={()=>{
                    userProfileDropDownHandler()
                }}>
                    <span className="text-xs italic text-gray-500">Haddis</span>
                    <div className="w-[26px] aspect-square rounded-full overflow-hidden">
                        <img className="h-full object-cover" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1711152000&semt=sph" alt="" />
                    </div>
                </div>
                <div className="absolute top-[120%] right-0 overflow-hidden h-[0px] bg-transparent transition-all ease-in-out duration-300" id="user-profile-dropdown">
                    <div className="w-[250px] h-[300px] mt-5 relative bg-gray-100 border border-gray-100 rounded-md before:content-[''] before:absolute before:right-7 before:top-[-12px] before:w-[24px] before:h-[24px] before:bg-gray-100 before:border-t before:border-l before:border-gray-100  before:rotate-45"></div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header