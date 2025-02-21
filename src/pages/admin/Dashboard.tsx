import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image, Video, Users, Calendar } from "lucide-react";

const DashboardCard = ({ icon, title, value, change }: any) => (
  <Card className="p-6 bg-gray-900 border-gray-800">
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        <p
          className={`text-sm ${change >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          {change >= 0 ? "+" : ""}
          {change}% este mês
        </p>
      </div>
    </div>
  </Card>
);

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-white mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          icon={<Image className="w-6 h-6" />}
          title="Total de Imagens"
          value="234"
          change={12}
        />
        <DashboardCard
          icon={<Video className="w-6 h-6" />}
          title="Projetos"
          value="45"
          change={8}
        />
        <DashboardCard
          icon={<Users className="w-6 h-6" />}
          title="Clientes"
          value="89"
          change={-3}
        />
        <DashboardCard
          icon={<Calendar className="w-6 h-6" />}
          title="Eventos"
          value="12"
          change={15}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6 bg-gray-900 border-gray-800">
          <h2 className="text-xl font-semibold text-white mb-4">
            Ações Rápidas
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <Image className="w-4 h-4 mr-2" />
              Adicionar Imagem
            </Button>
            <Button variant="outline" className="w-full">
              <Video className="w-4 h-4 mr-2" />
              Novo Projeto
            </Button>
            <Button variant="outline" className="w-full">
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Evento
            </Button>
            <Button variant="outline" className="w-full">
              <Users className="w-4 h-4 mr-2" />
              Novo Cliente
            </Button>
          </div>
        </Card>

        <Card className="p-6 bg-gray-900 border-gray-800">
          <h2 className="text-xl font-semibold text-white mb-4">
            Atividade Recente
          </h2>
          <div className="space-y-4">
            {[
              { action: "Nova imagem adicionada", time: "2 minutos atrás" },
              { action: "Projeto atualizado", time: "1 hora atrás" },
              { action: "Cliente adicionado", time: "3 horas atrás" },
              { action: "Evento agendado", time: "5 horas atrás" },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-300">{item.action}</span>
                <span className="text-sm text-gray-500">{item.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
