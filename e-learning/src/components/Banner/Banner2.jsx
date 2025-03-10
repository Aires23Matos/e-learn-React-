import React from "react";
import BannerPng from "../../assets/banner.png";
import { FadeUp } from "../Hero/Hero";
// eslint-disable-next-line no-unused-vars
import {motion } from "framer-motion";

const Banner2 = () => {
    return(
       <section>
            <div className="container py-14 md:py-24 grid
            grid-cols-1 md:grid-cols-2 gap-8 space-y-6
            md:space-y-0">
                 {/*Banner Text*/}
                 <motion.div
                 initial={{opacity: 0, x:50}}
                 whileInView={{opacity: 1, x:0}}
                 className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y-4 lg:max-x-[450px]">
                    <h1 className="text-4xl font-bold !leading-snug">Junte-se à nossa Comissão para começar a sua jornada</h1>
                    <p className="text-dark2">
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Recusande
                        iusto minima ad id eos acusantium aut,
                        aperiam quis incidunt
                    </p>
                    <a href=""
                    className="primary-btn !mt-8">Registe-se agora</a>
                    </div>
                </motion.div>

                {/*Banner Image*/}
                <motion.img
                initial ={{opacity: 0, x: -50}}
                whileInView={{opacity: 1, x: 0}} 
                src={BannerPng}
                alt=""
                className="w-[350px] md:max-w-[450px]
                object-cover drop-shadow"
                />
               
            </div>
       </section>
    );
}

export default Banner2;