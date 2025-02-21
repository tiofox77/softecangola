import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { Rocket, Eye, Star } from "lucide-react";

interface MVVCardProps {
  title: string;
  content: string;
  icon: React.ReactNode;
}

const MVVCard = ({
  title = "Title",
  content = "Content goes here",
  icon,
}: MVVCardProps) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <motion.div
      className="perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    >
      <Card className="w-full h-[300px] bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg relative preserve-3d cursor-pointer border border-white/20 shadow-[0_8px_16px_rgb(0_0_0/0.4)] hover:shadow-[0_12px_24px_rgb(0_0_0/0.5)] transition-all duration-300">
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div className="text-4xl mb-4 text-blue-400 bg-gradient-to-br from-blue-500/30 to-purple-500/30 p-4 rounded-full">
              {icon}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-white/60 text-sm">Clique para saber mais</p>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="flex items-center justify-center h-full p-6 text-center bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-lg">
            <p className="text-white/90 leading-relaxed">{content}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

interface MissionVisionValuesProps {
  items?: {
    title: string;
    content: string;
    icon: React.ReactNode;
  }[];
}

const MissionVisionValues = ({
  items = [
    {
      title: "Missão",
      content:
        "Revolucionar o mercado audiovisual angolano através de tecnologia de ponta e criatividade inovadora. Nossa missão é transformar ideias em experiências visuais memoráveis, sempre superando as expectativas dos nossos clientes.",
      icon: <Rocket className="w-8 h-8" />,
    },
    {
      title: "Visão",
      content:
        "Ser a principal referência em Angola para soluções audiovisuais e streaming até 2025, reconhecida pela excelência técnica, inovação constante e impacto positivo na indústria criativa africana.",
      icon: <Eye className="w-8 h-8" />,
    },
    {
      title: "Valores",
      content:
        "• Inovação Constante\n• Excelência Técnica\n• Compromisso com Resultados\n• Integridade em Todas as Ações\n• Colaboração e Trabalho em Equipe\n• Responsabilidade Social",
      icon: <Star className="w-8 h-8" />,
    },
  ],
}: MissionVisionValuesProps) => {
  return (
    <section className="w-full min-h-[600px] py-16 px-4 relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -top-48 -left-24 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl top-48 right-24 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          Nossa Essência
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <MVVCard
                title={item.title}
                content={item.content}
                icon={item.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
