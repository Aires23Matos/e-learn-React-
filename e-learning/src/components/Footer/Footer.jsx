import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div
          className="grid grid-cols-1
                md:grid-cols-2 lg:grid-cols-3 gap-14
                md:gap-4"
        >
          {/*first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">A Jornada da Codificação</h1>
            <p className="text-dark2">
              TCP é uma plataforma dedicada a capacitar aspirantes a
              desenvolvedores De tutoriais iniciantes a conceitos avançados de
              programação, fornecemos conceitos, fornecemos uma experiência de
              aprendizagem abrangente projetada para ajudá-lo a dominar
              habilidades de codificação, construir projetos e lançar sua
              carreira tecnológica.
            </p>
          </div>
          {/*second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Cursos</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li
                    className="cursor-pointer
                                    hover:text-secondary duration-200"
                  >
                    Desenvolvimento web
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Desenvolvimento de Software
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Desenvolvimento de Apps
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    E-learning
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li
                    className="cursor-pointer
                                    hover:text-secondary duration-200"
                  >
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Serviço
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Sobre
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Entre em Contacto</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Inserir o email"
                className="p-3 rounded-s-xl bg-white w-full
                                py-4 focus:ring-0 focus:outline-lime-none
                                placeholder: text-dark2"
              />
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button className="bg-primary text-white
                            font-semibold py-4 px-6 rounded-e-xl"
              >
                Enviar
              </button>
            </div>
            {/*social icons */}
            <div className="flex space-x-6 py-3">
              <a href="#">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <FaYoutube className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="#">
                <TbWorldWww className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
