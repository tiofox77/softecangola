import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import {
  MonitorPlay,
  Video,
  Radio,
  Presentation,
  Camera,
  Mic,
} from "lucide-react";

const services = [
  {
    icon: <MonitorPlay className="w-12 h-12" />,
    title: "Streaming Profissional",
    description:
      "Transmissões ao vivo em alta definição para eventos, shows e conferências",
    features: [
      "Qualidade 4K",
      "Baixa latência",
      "Multi-plataforma",
      "Redundância de conexão",
    ],
  },
  {
    icon: <Video className="w-12 h-12" />,
    title: "Produção de Vídeo",
    description: "Criação de conteúdo audiovisual profissional para sua marca",
    features: [
      "Cinematografia",
      "Edição profissional",
      "Color grading",
      "Motion graphics",
    ],
  },
  {
    icon: <Radio className="w-12 h-12" />,
    title: "Transmissão de Eventos",
    description: "Cobertura completa de eventos com múltiplas câmeras",
    features: [
      "Switcher ao vivo",
      "Replay instantâneo",
      "Grafismos",
      "Áudio profissional",
    ],
  },
  {
    icon: <Presentation className="w-12 h-12" />,
    title: "Eventos Híbridos",
    description:
      "Integração perfeita entre experiências presenciais e virtuais",
    features: [
      "Interação ao vivo",
      "Chat moderado",
      "Pesquisas em tempo real",
      "Analytics",
    ],
  },
  {
    icon: <Camera className="w-12 h-12" />,
    title: "Fotografia Profissional",
    description:
      "Registros fotográficos de alta qualidade para seu evento ou marca",
    features: [
      "Fotos em RAW",
      "Edição profissional",
      "Entrega rápida",
      "Banco de imagens",
    ],
  },
  {
    icon: <Mic className="w-12 h-12" />,
    title: "Produção de Áudio",
    description: "Captação e edição de áudio com qualidade profissional",
    features: ["Mixagem", "Masterização", "Sound design", "Podcast"],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nossos Serviços
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Soluções completas em produção audiovisual e streaming para sua
              empresa ou evento
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <div className="text-blue-500 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-gray-500 flex items-center gap-2"
                      >
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">Saber mais</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
