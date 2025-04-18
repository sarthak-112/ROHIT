import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img7.png";
import Img2 from "../assets/portfolio-img9.png";
import Img3 from "../assets/portfolio-img5.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10  ">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            <div>
              <h2 className="h2 leading-tight  text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                Frontend projects using React js as main framework and tailwind css for styling also one on the project includes API for data fetching
              </p>
              <button className="btn btn-sm  "> Projects</button>
            </div>
            <motion.div
             variants={fadeIn("right", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.3 }} className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 ">
                {" "}
              </div>
              <img
                src={Img1}
                className="group-hover:scale-125 transition-all duration-500"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React-Js</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a className="text-3xl text-white" href="https://shppingassignment.netlify.app/">E-Commerce</a>
                
              </div>
            </motion.div>
          </div>
          <motion.div 
           variants={fadeIn("up", 0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
           className="flex-1 flex flex-col gap-y-[4.5rem]  ">
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
                {" "}
              </div>
              <img
                src={Img2}
                className="group-hover:scale-125 transition-all duration-500"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React-js API</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a className="text-3xl text-white" href="https://weatherapiproject1.netlify.app/">Weather temperature</a>
                
               
              
              </div>
              
            </div>
            
            <div>
            <motion.div
             variants={fadeIn("left", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.3 }} className="group relative overflow-hidden border-2 border-white/50 rounded-xl  ">
           
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
                {" "}
              </div>
           
              <img
                src={Img3}
                className="group-hover:scale-125 transition-all duration-500"
             
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React-js</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <a className="text-3xl text-white" href="https://hareshkurade.me/Dashboard/">Digital-Incubation center</a>
              
              </div>
              
            </motion.div>
           
            </div>
          
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
