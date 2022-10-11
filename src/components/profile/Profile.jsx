import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/PhotoFunia-1643622236.jpg";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
const Profile = () => {
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <section className="profile">
      <main className="profile_details">
        <motion.img src={me} alt="user" {...options} />
        <motion.h5 {...options} transition={{ delay: 0.8 }}>
          Suraj
        </motion.h5>
        <motion.div
          className="profile_details_info"
          {...options}
          transition={{ delay: 1 }}
        >
          <Link to="/admin/dashboard"> <MdDashboard/> Dashboard</Link>
        </motion.div>
        <motion.div
          className="profile_details_info"
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
        >
          <Link to="/myorders">Orders</Link>
        </motion.div>
        <motion.button
          initial={{
            x: "-100vw",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{ delay: 1 }}
        >
          Logout
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
