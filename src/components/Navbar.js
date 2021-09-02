import Logo from "./../assets/logo.png";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-black">
      <div>
        <img className="object-cover h-16 w-72" src={Logo} alt="ss" />
      </div>
      <div>
        <ul className="flex gap-4 text-2xl text-white font-ubuntu">
          <li>
            <a className="hover:text-gray-500" href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
