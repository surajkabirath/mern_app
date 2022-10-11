import { motion } from "framer-motion";
import React from "react";
import profile from "../../assets/PhotoFunia-1643622236.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  }
  return (
    <header className="founder">
      <motion.div {...options} className="founder_details">
        <img src={profile} alt="founder" height={175} width={220} />
        <h3>Suraj Kabirath</h3>
        <p>
          Hey, Everyone I am Suraj Kabirath , the Founder of Food Darbar.
          <br />
          Our aim is to create the most tasty food on the planet.
        </p>
      </motion.div>
    </header>
  );
};

export default Founder;
