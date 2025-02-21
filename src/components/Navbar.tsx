import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">
              SOFTEC ANGOLA
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/"
                className="text-white hover:text-white/80 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/servicos"
                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Serviços
              </Link>
              <Link
                to="/quem-somos"
                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Quem Somos
              </Link>
              <Link
                to="/portfolio"
                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Portfólio
              </Link>
              <Link
                to="/galeria"
                className="text-white/90 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Galeria
              </Link>
              <Link to="/contato">
                <Button
                  variant="outline"
                  className="text-white border-white/20 hover:bg-white/10"
                >
                  Contato
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
