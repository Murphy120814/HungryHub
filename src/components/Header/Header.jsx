import { HeaderLogo, HeaderAddressSearch, HeaderNavBar } from "./index";
function Header() {
  return (
    <div className="flex justify-between items-center mb-16">
      <div className="flex justify-between items-center">
        <HeaderLogo />
        <HeaderAddressSearch />
      </div>
      <HeaderNavBar />
    </div>
  );
}

export default Header;
