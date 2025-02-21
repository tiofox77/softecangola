import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Play, ChevronDown } from "lucide-react";

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface HeroSectionProps {
  slides?: {
    imageUrl: string;
    title: string;
    subtitle: string;
  }[];
  services?: ServiceCard[];
}

const defaultServices: ServiceCard[] = [
  {
    title: "Streaming",
    description: "Transmissões ao vivo em alta qualidade",
    icon: <Play className="w-6 h-6" />,
  },
  {
    title: "Produção Audiovisual",
    description: "Conteúdo profissional para sua marca",
    icon: <Play className="w-6 h-6" />,
  },
  {
    title: "Eventos Digitais",
    description: "Cobertura completa de eventos",
    icon: <Play className="w-6 h-6" />,
  },
];

const defaultSlides = [
  {
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
    title: "SOFTEC ANGOLA",
    subtitle: "Excelência em Streaming e Produção Audiovisual",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    title: "Produção Profissional",
    subtitle: "Equipamentos de Última Geração",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    title: "Streaming de Alta Qualidade",
    subtitle: "Transmissões ao Vivo em 4K",
  },
];

const HeroSection: React.FC<HeroSectionProps> = ({
  slides = defaultSlides,
  services = defaultServices,
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  return (
    <div className="relative h-[800px] w-full bg-black overflow-hidden">
      {/* Background Image Slider */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black/50">
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            {slides[currentSlide].subtitle}
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 backdrop-blur-lg bg-white/10 border-none text-white hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/80">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-white/80"
          >
            <ChevronDown className="w-6 h-6" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
