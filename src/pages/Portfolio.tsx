import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";

const projects = [
  {
    title: "Festival de Música de Luanda",
    category: "Streaming de Eventos",
    description:
      "Transmissão ao vivo em 4K com múltiplas câmeras e mixagem de áudio profissional",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
    videoUrl: "#",
  },
  {
    title: "Campanha Publicitária - Banco BIC",
    category: "Produção Audiovisual",
    description:
      "Série de comerciais para TV e mídias digitais com direção de arte premium",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
    videoUrl: "#",
  },
  {
    title: "Conferência Tech Angola 2023",
    category: "Eventos Híbridos",
    description:
      "Evento híbrido com participação de mais de 1000 pessoas online e presencial",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
    videoUrl: "#",
  },
  {
    title: "Documentário - Cultura Angolana",
    category: "Documentário",
    description: "Série documental sobre a rica cultura e tradições de Angola",
    image: "https://images.unsplash.com/photo-1496275068113-fff8c90750d1",
    videoUrl: "#",
  },
  {
    title: "Copa Africana de Nações",
    category: "Cobertura Esportiva",
    description:
      "Transmissão dos jogos com replays instantâneos e análises técnicas",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
    videoUrl: "#",
  },
  {
    title: "Show Roberto Carlos em Angola",
    category: "Streaming de Shows",
    description:
      "Produção completa do show com transmissão ao vivo para todo o mundo",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
    videoUrl: "#",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer overflow-hidden">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Play className="w-12 h-12 text-white" />
            </div>
          </div>
          <div className="p-6">
            <div className="text-sm text-blue-500 mb-2">{project.category}</div>
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm">{project.description}</p>
          </div>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <div className="aspect-video bg-black">
          {/* Aqui você pode adicionar o player de vídeo real */}
          <div className="w-full h-full flex items-center justify-center text-white">
            Video Player Placeholder
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-600">{project.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const PortfolioPage = () => {
  const categories = [...new Set(projects.map((p) => p.category))];
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nosso Portfólio
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Conheça alguns dos nossos principais trabalhos e cases de sucesso
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
              >
                Todos
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortfolioPage;
