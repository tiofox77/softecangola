import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import MissionVisionValues from "./MissionVisionValues";
import DifferentialsGrid from "./DifferentialsGrid";
import Gallery from "./Gallery";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />

      <MissionVisionValues />

      <DifferentialsGrid />

      <Gallery />

      {/* Footer Section */}
      <footer className="bg-slate-900 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Entre em Contato
            </h3>
            <form className="space-y-4">
              <div>
                <Input
                  placeholder="Seu nome"
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Seu email"
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Sua mensagem"
                  className="bg-white/5 border-white/10 text-white min-h-[120px]"
                />
              </div>
              <Button className="w-full" size="lg">
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31534.25265512848!2d13.2228373!3d-8.8379519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d5b45%3A0x850c1c5c5ecc5a91!2sLuanda%2C%20Angola!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-white/60">
          <p>
            © {new Date().getFullYear()} SOFTEC ANGOLA. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
