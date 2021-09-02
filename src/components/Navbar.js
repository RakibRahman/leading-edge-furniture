import React, { useState } from "react";
import LogoPic from "./../assets/logo.png";
import { Link } from "react-router-dom";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import CloseIcon from "@material-ui/icons/Close";
function Navbar() {
  const [toggle, setToggle] = useState(true);
  const [showLinks, setShowLinks] = useState(false);

  const Logo = () => (
    <div className="w-md md:w-1/4 ">
      <img className="object-cover w-full h-auto" src={LogoPic} alt="ss" />
    </div>
  );
  const Links = () => (
    <div className="flex flex-wrap items-center gap-2 text-sm text-white transition md:gap-4 md:text-xl font-ubuntu">
      <Link to="/">
        <span className="text-red-500 hover:text-yellow-300">Home</span>
      </Link>
      <Link to="products">Products</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact</Link>
      <button>mode</button>
    </div>
  );
  const handleClickToggle = () => {
    setToggle(!toggle);
    setShowLinks(!showLinks);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-black border-b-2 border-red-400 h-sm">
      {toggle ? <Logo /> : null}
      {showLinks ? <Links /> : null};
      <button onClick={handleClickToggle} id="menu__btn" className="text-white">
        {toggle ? <MenuOpenIcon /> : <CloseIcon />}
      </button>
    </nav>
  );
}

export default Navbar;
