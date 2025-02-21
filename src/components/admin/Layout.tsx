import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Image,
  Video,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      icon: <LayoutDashboard className="w-5 h-5" />,
      label: "Dashboard",
      path: "/admin",
    },
    {
      icon: <Image className="w-5 h-5" />,
      label: "Galeria",
      path: "/admin/gallery",
    },
    {
      icon: <Video className="w-5 h-5" />,
      label: "Portfólio",
      path: "/admin/portfolio",
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Equipe",
      path: "/admin/team",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: "Configurações",
      path: "/admin/settings",
    },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 border-r border-gray-800 fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-xl font-bold text-white mb-8">Admin Panel</h1>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant="ghost"
                className={`w-full justify-start ${location.pathname === item.path ? "bg-gray-800" : ""}`}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Button>
            </Link>
          ))}
        </nav>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-500 hover:text-red-400"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Sair
        </Button>
      </div>
    </div>
  );
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black min-h-screen">
      <Sidebar />
      <div className="ml-64">{children}</div>
    </div>
  );
};

export default AdminLayout;
