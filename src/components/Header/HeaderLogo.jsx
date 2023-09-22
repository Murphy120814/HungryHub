import headerLogoImg from "../../assets/HHLightModeLogo.png";
function HeaderLogo() {
  return (
    <div className=" w-24 mr-12 ">
      <a href="/">
        <img src={headerLogoImg} alt="logoImg"></img>
      </a>
    </div>
  );
}

export default HeaderLogo;
