import { NavLink } from "react-router-dom";

// icons
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const NavMenuItem = ({ nav }) => {
  return (
    <>
      {nav.subMenus ? (
        <>
          <li className="cursor-pointer w-max sm:w-auto flex items-center justify-between gap-x-2 main-link-hover-effect">
            <span>{nav.navText}</span>
            {!true ? (
              <MdKeyboardArrowUp className="text-xl" />
            ) : (
              <MdKeyboardArrowDown className="text-xl" />
            )}
          </li>
        </>
      ) : (
        <li className="main-link-hover-effect w-max sm:w-auto">
          <NavLink>{nav.navText}</NavLink>
        </li>
      )}
    </>
  );
};

export default NavMenuItem;
