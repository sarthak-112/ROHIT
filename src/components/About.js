import React from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
 
  return (
    <section className="section" id="about" >
      <div className="container mx-auto">
        <div>
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>

          <div>
            <h2>About Me</h2>
           <h3>I'm a frontend Developer with experience over an real-world project of 6 months</h3>
           <p>nclude popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using</p>
           <div className="flex">
            <div>
            <div className='text=[40px] font-tertiary text-gradient mb-2'>
              <CountUp start={0} end={6} duration={2}/>
            </div>
            <div className='font-primary text-sm tracking-[2px]'>
              Experience of <br></br>
              6 months
            </div>
           </div>
          </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default About;
