import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder"
import Menu from "./Menu"
const Home = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
    <div className="home">
      <div className="home_section">
        <motion.h1 {...options}>food darbar</motion.h1>
        <motion.p
          {...options}
          transition={{
            delay: 0.2,
          }}
        >
          Your Own test
        </motion.p>
      </div>
      <motion.a
        href="#menu"
        initial={{
          y: "-100%",
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.4,
        }}
      >
        Explore Menu
      </motion.a>
    </div>
    <Founder/>
    <Menu/>
    </>
  );
};

export default Home;
