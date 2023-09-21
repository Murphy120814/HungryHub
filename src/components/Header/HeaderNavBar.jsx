import { Link } from "react-router-dom";
import searchLogo from "../../assets/search.svg";
import cartLogo from "../../assets/cart.svg";
function HeaderNavBar() {
  return (
    <div>
      <ul className="flex justify-between items-center">
        <li className="mx-6 text-xl hover:font-bold hover:text-orange-600 transition-all ease-in-out flex">
          <img className="w-6 mr-2" src={searchLogo} alt="search Logo"></img>
          <Link to="/search">Search</Link>
        </li>
        <li className="mx-6 text-xl hover:font-bold hover:text-orange-600 transition-all ease-in-out">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-6 text-xl hover:font-bold hover:text-orange-600 transition-all ease-in-out flex">
          <img className="w-6 mr-2" src={cartLogo} alt="cart Logo"></img>
          <Link to="/cart">Cart</Link>
        </li>

        <li className="mx-6 text-xl hover:font-bold hover:text-orange-600 transition-all ease-in-out">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderNavBar;
