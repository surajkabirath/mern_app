import React from "react";
import { Link } from "react-router-dom";
// import { IoFastFoodOutline } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
// import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoFastFoodSharp } from "react-icons/io5";
import {
  ShoppingCartOutlined,
  PersonOutlineOutlined,
} from "@material-ui/icons";
import { Badge } from "@material-ui/core";
const Header = ({ isAuthenticated = false }) => {
  return (
    <header className="header">
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        className="section"
      >
        <IoFastFoodSharp />
      </motion.div>

      <div className="section">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">
          <Badge badgeContent="12" color="primary" overlap="rectangular">
            <ShoppingCartOutlined style={{ fontSize: 30 }} />
          </Badge>
        </Link>
        <Link to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? <PersonOutlineOutlined /> : <FiLogIn />}
        </Link>
      </div>
    </header>
  );
};

export default Header;
