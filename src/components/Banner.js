import React from "react";
import Image from "../assets/avatar.png";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 tex-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Rohit <span>Thakur</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white ">I am a</span>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Content Writer",
                  2000,
                  "Student",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I'm Rohit Thakur, an enthusiastic and driven Electronics and
              Computer Science Engineering student at Vidyalankar Institute of
              Technology, University of Mumbai. I have a deep interest in
              emerging tech domains like IoT and Cybersecurity, and I had the
              incredible opportunity to represent my college as an All India
              Finalist at the Smart India Hackathon 2023. Throughout my academic
              journey, I've actively engaged in leadership and branding
              roles—serving as a core member of the Publicity and Branding Team
              for VERVE (2022–2024) and leading sponsorship efforts to enhance
              event outreach. As the Cultural Head of the National Service
              Scheme (NSS) at VIT Mumbai. These experiences have not only
              sharpened my organizational and leadership skills but also
              nurtured a strong passion for creating positive change through
              collaboration.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 "
            >
              <button className="btn btn-sm">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/THAKUR911">
                {" "}
                <FaGithub />{" "}
              </a>
              <a href="https://www.linkedin.com/in/rohit-thakur-8645a123b/">
                {" "}
                <FaLinkedin />{" "}
              </a>
              <a href="https://www.instagram.com/?hl=en">
                {" "}
                <FaInstagram />{" "}
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            className="hidden  lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} className="rounded-full" alt="Rohit Thakur" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
