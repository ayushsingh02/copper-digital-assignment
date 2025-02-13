import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";
export const Header = ({ cartItems }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <a href="/" className="logo">
              <img src="/assets/img/logo.svg" alt="Logo" />
            </a>
            <ul className={`navLink ${isNavOpen ? "active" : ""}`}>
              <li>
                <Link to="/" className="active">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/manage-inventory">MANAGE INVENTORY</Link>
              </li>

              <li>
                <Link to="/cart">
                  CART (
                  {cartItems.reduce((total, item) => total + item.quantity, 0)})
                </Link>
              </li>
              <li>
                <Link to="/about">ABOUT</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT US</Link>
              </li>
            </ul>
            {/* <MdOutlineShoppingCart size={30} /> */}
            <div className="icon" onClick={toggleNav}>
              {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}{" "}
            </div>
          </nav>
        </div>
      </header>
      <section className="">
        <div className="container">
          <div className="content"></div>
        </div>
      </section>
    </div>
  );
};

export default Header;
