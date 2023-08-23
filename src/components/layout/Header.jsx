import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import DropdownMenu from './DropdownMenu';

const Header = ({ isAuthenticated = false }) => {
  const logoStyles = {
    fontSize: "2rem",
    fontFamily: "Pacifico, cursive",
  };

  const navLinkStyles = {
    fontFamily: "Poppins, sans-serif",
    textDecoration: "none",
    color: "#333",
    margin: "0 1rem",
  };

  const cartStyles = {
    fontSize: "1.2rem",
    marginRight: "0.5rem",
  };


  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <IoFastFoodOutline style={logoStyles} />
      </motion.div>
      <div>
        <Link to="/" style={navLinkStyles}>Home</Link>
        <Link to="/contact" style={navLinkStyles}>Contact</Link>
        <Link to="/about" style={navLinkStyles}>About</Link>
        <Link to="/cart" style={navLinkStyles}>
          <FiShoppingCart style={cartStyles} />
          Cart
        </Link>
        <DropdownMenu/>
      </div>
    </nav>
  );
};

export default Header;


