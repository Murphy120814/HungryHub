import { Link } from "react-router-dom";
import searchLogo from "../../assets/search.svg";
import cartLogo from "../../assets/cart.svg";
import { useSelector } from "react-redux";

function HeaderNavBar() {
  const cartItem = useSelector((store) => store.cart.items);
  return (
    <div>
      <ul className="flex justify-between items-center">
        <li className="mx-6 text-xl hover:font-bold hover:text-orange-600 transition-all ease-in-out flex ">
          <img className="w-6 mr-2" src={searchLogo} alt="search Logo"></img>
          <Link to="/search">Search</Link>
        </li>
        <li className="mx-6 text-xl hover:font-bold hover:text-orange-600 transition-all ease-in-out">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-6 text-xl hover:font-bold hover:text-orange-600 transition-all ease-in-out flex">
          <div className="relative">
            <img className="w-7 mr-2 " src={cartLogo} alt="cart Logo"></img>
            <span className="absolute top-[8px] right-[18px] text-sm font-bold">
              {cartItem.length}
            </span>
          </div>

          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderNavBar;
