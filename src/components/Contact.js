import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { MdEmail,MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <section className=" py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <motion.div variants={fadeIn("right", 0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] l;tet-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
              <h3 className="text-2xl "><MdEmail/> thakurrohit.0905@gmail.com</h3><br/>
              <h3 className="text-2xl  "><MdLocationPin/> Location:-Kalyan,Maharashtra</h3>

            </motion.div>
          </div>
        
        <motion.form 
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
          <input
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            type="text"
            placeholder="Your email"
          ></input>
           <input
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            type="text"
            placeholder="Your email"
          ></input>
          <textarea className="bg-transparent mb-12 resize-none border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all" placeholder="Your message"></textarea>
          <button className="btn btn-lg">Send Message</button>
        </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
