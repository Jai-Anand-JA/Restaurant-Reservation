import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to Hungry Head, where culinary excellence meets a cozy and inviting atmosphere. 
            Our passion for food is reflected in every dish we serve, crafted with the freshest ingredients and 
            inspired by diverse culinary traditions. Whether you're here for a casual lunch, a family dinner, 
            or a special celebration, our dedicated team is committed to providing you with an unforgettable dining experience. 
            At Hungry Head, we believe that great food brings people together, and we look forward to welcoming you to our table.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
