import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trash2, Edit, Plus } from "lucide-react";

const PortfolioManagement = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Gerenciar Portfólio</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Novo Projeto
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800">
            <div className="aspect-video relative">
              <img
                src={`https://picsum.photos/seed/${index + 10}/800/600`}
                alt="Portfolio item"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="destructive" size="icon">
                  <Trash2 className="w-4 h-4" />
                </Button>
                <Button variant="secondary" size="icon">
                  <Edit className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <Input
                defaultValue="Título do Projeto"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Input
                defaultValue="Categoria"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Textarea
                defaultValue="Descrição do projeto..."
                className="bg-gray-800 border-gray-700 text-white min-h-[100px]"
              />
              <Input
                type="url"
                defaultValue="https://video-url.com"
                className="bg-gray-800 border-gray-700 text-white"
                placeholder="URL do Vídeo"
              />
              <div className="flex justify-end">
                <Button>Salvar Alterações</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PortfolioManagement;
