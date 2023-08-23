import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/myself1.jpeg";

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
  };

  const founderTextStyle = {
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.2rem",
    lineHeight: "1.6",
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3 style={{ fontFamily: "Pacifico, cursive", fontSize: "1.5rem" }}>Jad</h3>

        <p style={founderTextStyle}>
          Hey, everyone! I'm Jad, the founder of J&J Burger Shop.
          <br />
          Our mission is to craft the most delicious burgers on the planet.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;

