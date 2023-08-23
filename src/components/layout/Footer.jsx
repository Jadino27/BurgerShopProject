import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const footerStyles = {
    backgroundColor: "#333",
    padding: "4rem",
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    lineHeight: "1.6",
  };

  const footerLeftStyles = {
    flex: 1,
    marginRight: "2rem",
  };

  const footerHeadingStyles = {
    fontFamily: "Pacifico, cursive",
    fontSize: "2rem",
    color: "rgb(156, 0, 60)",
    marginBottom: "1rem",
  };

  const footerTextStyles = {
    marginBottom: "1rem",
  };

  const footerRightStyles = {
    display: "flex",
    alignItems: "center",
  };

  const socialIconStyles = {
    fontSize: "2rem",
    marginRight: "1rem",
    color: "white",
    transition: "color 0.3s",
  };

  return (
    <footer style={footerStyles}>
      <div style={footerLeftStyles}>
        <h2 style={footerHeadingStyles}>J&J Burger Shop</h2>
        <p style={footerTextStyles}>We strive to provide you with the ultimate taste experience.</p>
        <em>We value authentic feedback.</em>
        <strong>All rights received @J&J burgershop</strong>
      </div>
      <aside style={footerRightStyles}>
        <h4 style={{ fontSize: "1.2rem" }}>Follow Us</h4>
        <a href="https://youtube.com/" style={socialIconStyles}>
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/jado_mahmoud/" style={socialIconStyles}>
          <AiFillInstagram />
        </a>
        <a href="https://github.com/Jadino27" style={socialIconStyles}>
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;

