import headerLogoImg from "../../assets/HHLightModeLogo.png";
import { Link } from "react-router-dom";
function HeaderLogo() {
  return (
    <div className=" w-24 mr-12 ">
      <Link to="/">
        <img src={headerLogoImg} alt="logoImg"></img>
      </Link>
    </div>
  );
}

export default HeaderLogo;
