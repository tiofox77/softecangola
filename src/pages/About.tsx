import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import MissionVisionValues from "@/components/MissionVisionValues";
import { Users, Award, Clock, Globe } from "lucide-react";

const stats = [
  {
    number: "10+",
    label: "Anos de Experiência",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    number: "500+",
    label: "Projetos Realizados",
    icon: <Award className="w-6 h-6" />,
  },
  {
    number: "50+",
    label: "Profissionais",
    icon: <Users className="w-6 h-6" />,
  },
  {
    number: "5",
    label: "Países Atendidos",
    icon: <Globe className="w-6 h-6" />,
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Quem Somos
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Uma empresa líder em soluções audiovisuais e streaming em Angola
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-blue-500 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Vision Values Section */}
        <MissionVisionValues />

        {/* History Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Nossa História
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Uma jornada de inovação e excelência no mercado audiovisual
                angolano
              </p>
            </motion.div>

            <div className="space-y-12">
              {[
                {
                  year: "2014",
                  title: "Fundação",
                  description: "Início das operações em Luanda",
                },
                {
                  year: "2016",
                  title: "Expansão",
                  description: "Primeira grande cobertura de eventos nacionais",
                },
                {
                  year: "2018",
                  title: "Inovação",
                  description: "Implementação de streaming em 4K",
                },
                {
                  year: "2020",
                  title: "Crescimento",
                  description: "Expansão para outros países africanos",
                },
                {
                  year: "2023",
                  title: "Liderança",
                  description: "Reconhecimento como líder do mercado",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6"
                >
                  <div className="text-2xl font-bold text-blue-500 w-24 text-right">
                    {item.year}
                  </div>
                  <div className="flex-1 p-6 bg-gray-900 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
