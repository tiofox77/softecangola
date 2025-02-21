import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { MonitorPlay, Users, Rocket, Shield, Target, Zap } from "lucide-react";

interface DifferentialProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgImage?: string;
}

interface DifferentialsGridProps {
  differentials?: DifferentialProps[];
}

const defaultDifferentials: DifferentialProps[] = [
  {
    icon: <MonitorPlay className="w-8 h-8" />,
    title: "Produção Audiovisual",
    description:
      "Criação de conteúdo profissional com equipamentos de última geração",
    bgImage:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Equipe Especializada",
    description: "Profissionais altamente qualificados e experientes",
    bgImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Inovação Constante",
    description: "Sempre atualizados com as últimas tendências do mercado",
    bgImage:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Segurança",
    description: "Proteção total dos dados e conteúdos dos clientes",
    bgImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Foco no Cliente",
    description: "Atendimento personalizado e soluções sob medida",
    bgImage:
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Alta Performance",
    description: "Entregas rápidas sem comprometer a qualidade",
    bgImage:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
  },
];

const DifferentialCard = ({
  icon,
  title,
  description,
  bgImage,
}: DifferentialProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="group h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              className="p-3 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 text-blue-400 transform group-hover:scale-110 transition-transform duration-500 relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 rounded-full bg-white/20 blur-sm" />
              <div className="relative z-10">{icon}</div>
            </motion.div>
            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const DifferentialsGrid = ({
  differentials = defaultDifferentials,
}: DifferentialsGridProps) => {
  return (
    <section className="w-full min-h-[600px] py-16 px-4 relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-slate-900 to-black overflow-hidden">
      {/* Animated grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\") ",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubra o que nos torna únicos no mercado de streaming e produção
            audiovisual
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((differential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <DifferentialCard {...differential} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsGrid;
