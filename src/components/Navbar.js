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
  const Links = ({ id }) => (
    <div
      id={id}
      className="flex flex-wrap items-center gap-2 text-sm text-white transition md:gap-4 md:text-xl font-ubuntu"
    >
      <Link className="text-red-500 hover:text-yellow-300" to="/">
        {" "}
        Home
      </Link>
      <Link className="hover:text-yellow-300" to="products">
        Products
      </Link>
      <Link className="hover:text-yellow-300" to="/about">
        About Us
      </Link>
      <Link className="hover:text-yellow-300" to="/contact">
        Contact
      </Link>
      <button>mode</button>
    </div>
  );
  const handleClickToggle = () => {
    setToggle(!toggle);
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar">
      {toggle ? <Logo /> : null}
      {showLinks ? <Links id="mobile__links" /> : null};
      <Links id="pc__links" />
      <button onClick={handleClickToggle} id="menu__btn" className="text-white">
        {toggle ? <MenuOpenIcon /> : <CloseIcon />}
      </button>
    </nav>
  );
}

export default Navbar;
