import "./App.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";

function App() {
  return (
    <nav className="flex px-4 py-4 items-center bg-black text-white">
      <div className="flex items-center justify-center">
        <img src="/images/amazone-logo.png" alt="logo" className="h-16" />
      </div>
      <div className="flex items-center justify-center ml-2">
        <HiOutlineLocationMarker style={{ color: "white" }} className="mr-2" />
        <div className="flex flex-col">
          <span>Hello</span>
          <h3 className="font-bold">Select your address</h3>
        </div>
      </div>
      <div className="ml-8 flex items-center bg-white w-1/3">
        <select
          name="url"
          id="searchDropdownBox"
          className="text-black outline-non h-full w-20 bg-gray-400 "
        >
          <option selected="selected" value="search-alias=deals">
            Deals
          </option>
          <option value="search-alias=alexa-skills">Alexa Skills</option>
          <option value="search-alias=amazone-devices">Amazon Devices</option>
        </select>
        <input type="text" />
        <BsSearch style={{ color: "black" }} className="" />
      </div>
      <div>🇮🇳</div>
      <div className="">
        <div>
          <span>Hello,Sign in</span>
          <h3>Account & List</h3>
        </div>
      </div>
      <div className="">
        <span>Returns</span>
        <h3>& Orders</h3>
      </div>
      <div>
        <span>0</span>
        <MdAddShoppingCart />
        <span>Cart</span>
      </div>
    </nav>
  );
}

export default App;
