import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";



const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav>
      <div className="navbar-container">
        {/* Section 1: Sign In and Sign Out */}
        <div className="navbar-sign-in-out">
          <a href="./Sign-in.jsx">

            <button>Sign In</button>
          </a>
          
          <button>Sign Out</button>
        </div>

        {/* Section 2: Links and Toggle Icon */}
        <div className="navbar-links-container">
          <ul className={showLinks ? "navbar-links show-links" : "navbar-links"}>
            <li>
              <a href="../Home/Home.jsx">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="../Lounge/Lounge.jsx">Seats</a>
            </li>
            <li>
              <a href="/destination">Destination</a>
            </li>
            <li>
              <a href="/offers">Offers</a>
            </li>
          </ul>
          <button className="navbar-toggle" onClick={() => setShowLinks(!showLinks)}>
            {showLinks ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
