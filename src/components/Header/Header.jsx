import { HeaderLogo, HeaderAddressSearch, HeaderNavBar } from "./index";

function Header() {
  return (
    <div>
      <div>
        <HeaderLogo />
        <HeaderAddressSearch />
      </div>
      <HeaderNavBar />
    </div>
  );
}

export default Header;
