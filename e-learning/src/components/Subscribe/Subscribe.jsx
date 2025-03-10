import React from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../../assets/bg.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundcdPosition: "center",
};

const Subscribe = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div 
      initial= {{opacity: 0}}
      whileInView={{opacity: 1}}
      style={bgStyle } className="container py-48">
        <motion.div
        initial= {{opacity: 0, scale:0.5}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.6, ease: "easeInOut"}}
         className="flex flex-col justify-center">
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
          <h1 className="text-4xl font-bold !leading-snug">
            450k+ Os alunos estão a aprender connosco
          </h1>
          <p>
            lorem ipsum dolor sit amet conseter adipisicing
            elit.
            Recusandae iusto iusto minima 
          </p>
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a href="#" className="primary-btn !mt-8 inline-flex items-center gap-4 group">
              Inscreva-se agora
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200"/>
            </a>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
