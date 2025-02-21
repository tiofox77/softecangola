import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Upload, Plus } from "lucide-react";

const GalleryManagement = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Gerenciar Galeria</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Imagem
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            className="bg-gray-900 border-gray-800 overflow-hidden"
          >
            <div className="aspect-video relative">
              <img
                src={`https://picsum.photos/seed/${index}/800/600`}
                alt="Gallery item"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button variant="destructive" size="icon">
                  <Trash2 className="w-4 h-4" />
                </Button>
                <Button variant="secondary" size="icon">
                  <Upload className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="p-4">
              <Input
                defaultValue="Título da Imagem"
                className="bg-gray-800 border-gray-700 text-white mb-2"
              />
              <Input
                defaultValue="Categoria"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GalleryManagement;
