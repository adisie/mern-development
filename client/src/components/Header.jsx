// sub header components
import HeaderTop from "./sub-headers/HeaderTop";
import HeaderBottom from "./sub-headers/HeaderBottom";

const Header = () => {
  return (
    <header className="h-[14.85vh]">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
