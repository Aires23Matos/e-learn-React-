import React from "react";
import {IoMdMenu} from "react-icons/io";
import {motion} from "framer-motion";

const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        path: "/"
    },
    {
        id: 2,
        title: "Serviços",
        path: "#"
    },
    {
        id: 3,
        title: "Quem somos",
        path: "#"
    },
    {
        id: 4,
        title: "A nossa equipa",
        path: "#"
    },
    {
        id: 5,
        title: "Contacte-nos",
        path: "#"
    },
];

const Navbar = () => {
    return(
        <nav className="relative z-20 ">
            <motion.div className="container py-10 flex justify-between items-center">
                {/*Logo section*/}
                <div>
                    <h1 className="font-bold text-2xl">A Jornada de Codificação</h1>
                </div>
                {/*Menu section*/}
                <div className="hidden lg:block">
                    <ul className="flex items-center gap-3">
                        {
                            NavbarMenu.map((menu) => (
                                <li key={menu.id}>
                                    <a href={menu.path}
                                    className="inline-block
                                    py-2 px3 hover: text-secondary relative
                                    group">
                                        <div className="w-2 h-2 bg-secondary absolute
                                        mr-2 left-1/2 rounded-full -translate-x-1/2 top-1/2 bottom-0
                                    group-hover:block hidden">

                                        </div>
                                        {menu.title}
                                    </a>
                                </li>
                            ))
                        }
                         <button className="primary-btn">Iniciar sessão</button>
                    </ul>
                </div>
                   {/*Mobile Humburger menun section */}
                   <div className="lg:hidden">
                    <IoMdMenu className="text-4xl"/> 
                </div>
            </motion.div>
        </nav>
    );
}

export default Navbar;