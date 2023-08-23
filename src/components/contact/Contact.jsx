import React from "react";
import { motion } from "framer-motion";
import burger from "../../assets/burger2.png";
import Popup from 'reactjs-popup';

const Contact = () => {
  const sectionTitleStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const inputStyles = {
    fontFamily: "Roboto, sans-serif",
    fontSize: "1rem",
    padding: "0.5rem",
    marginBottom: "1rem",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const textareaStyles = {
    fontFamily: "Roboto, sans-serif",
    fontSize: "1rem",
    padding: "0.5rem",
    marginBottom: "1rem",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const buttonStyles = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "rgb(156, 0, 60)",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const popupContentStyle = {
    color: "red",
    transform: "translate(25%, -700%)",
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  };

  return (
    <section className="contact">
      <motion.form
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
      >
        <h2 style={sectionTitleStyle}>Contact Us</h2>
        <input type="text" placeholder="Name" style={inputStyles} />
        <input type="email" placeholder="Email" style={inputStyles} />
        <textarea placeholder="Write your message here..." cols="30" rows="10" style={textareaStyles}></textarea>
        <Popup
          trigger={<button type="button" style={buttonStyles}>Send</button>}
          position="right center"
        >
          <div style={popupContentStyle}>
            Thank you for contacting us! We will get back to you as soon as possible.
          </div>
        </Popup>
      </motion.form>
      <motion.div
        className="formBorder"
        initial={{
          x: "100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          initial={{
            y: "-100vh",
            x: "50%",
            opacity: 0,
          }}
          animate={{
            x: "50%",
            y: "-50%",
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
        >
          <img src={burger} alt="Burger" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;


