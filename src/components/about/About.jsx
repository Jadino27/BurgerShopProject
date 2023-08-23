import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/myself1.jpeg";

const About = () => {
  const sectionTitleStyle = {
    fontFamily: "cursive",
    fontSize: "2rem",
  };

  const articleTitleStyle = {
    fontFamily: "Georgia, serif",
  };

  const articleTextStyle = {
    fontFamily: "Arial, sans-serif",
  };

  const founderNameStyle = {
    fontFamily: "Helvetica, sans-serif",
  };

  return (
    <section className="about">
      <main>
        <h1 style={sectionTitleStyle}>About Us</h1>
        <article>
          <h4 style={articleTitleStyle}>J&J Burger Shop</h4>
          <p style={articleTextStyle}>
            This is J&J Burger Shop. The place for the most tasty burgers on the
            entire earth. Prepared by Italian chefs.
          </p>
          <p style={articleTextStyle}>
            Explore the various types of food and burgers. Click below to see
            the menu.
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2 style={articleTitleStyle}>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3 style={founderNameStyle}>Jad Mahmoud</h3>
            </div>
            <p style={articleTextStyle}>
              I am Jad, the founder of J&J Burger Shop. With a delightful blend of Italian and Lebanese heritage,
              I possess an innate flair for crafting exceptionally flavorful burgers that encapsulate the rich culinary
              traditions of both cultures. This unique fusion of influences allows me to create tantalizing burger
              experiences that are a testament to my diverse background and passion for exquisite cuisine.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;

