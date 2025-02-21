import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

interface GalleryProps {
  images?: GalleryImage[];
}

const defaultImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f",
    alt: "Estúdio de Produção",
    category: "Estúdio",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
    alt: "Equipamentos Profissionais",
    category: "Equipamentos",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    alt: "Produção ao Vivo",
    category: "Produção",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    alt: "Infraestrutura",
    category: "Infraestrutura",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    alt: "Nossa Equipe",
    category: "Equipe",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    alt: "Colaboração",
    category: "Equipe",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    alt: "Eventos Corporativos",
    category: "Eventos",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    alt: "Transmissões ao Vivo",
    category: "Streaming",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    alt: "Bastidores",
    category: "Bastidores",
  },
];

const Gallery = ({ images = defaultImages }: GalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const categories = ["all", ...new Set(images.map((img) => img.category))];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nossa Galeria
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Conheça nossa infraestrutura e alguns momentos especiais
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category === "all" ? "Todos" : category}
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="group cursor-pointer overflow-hidden bg-gray-900 border-gray-800">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <motion.img
                            src={image.src}
                            alt={image.alt}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            whileHover={{ scale: 1.1 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <p className="text-white text-sm font-medium">
                              {image.alt}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full p-0 bg-gray-900 border-gray-800">
                      <div className="relative aspect-video">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {image.alt}
                        </h3>
                        <p className="text-gray-400">{image.category}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
