import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactInfo = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">{icon}</div>
    <div>
      <h3 className="font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-400">{content}</p>
    </div>
  </div>
);

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using EmailJS or similar service would be better in production
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY", // Replace with your key
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "softecangola@gmail.com",
        }),
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Estamos prontos para atender suas necessidades em produção
              audiovisual
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-900 p-8 rounded-lg border border-gray-800"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Envie sua mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Seu email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Input
                    placeholder="Assunto"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Sua mensagem"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="bg-gray-800 border-gray-700 text-white min-h-[150px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <ContactInfo
                icon={<Phone className="w-5 h-5" />}
                title="Telefone"
                content="+244 923 456 789"
              />
              <ContactInfo
                icon={<Mail className="w-5 h-5" />}
                title="Email"
                content="softecangola@gmail.com"
              />
              <ContactInfo
                icon={<MapPin className="w-5 h-5" />}
                title="Endereço"
                content="Rua Principal, 123, Luanda, Angola"
              />
              <ContactInfo
                icon={<Clock className="w-5 h-5" />}
                title="Horário de Funcionamento"
                content="Segunda a Sexta: 8h às 18h"
              />

              {/* Map */}
              <div className="mt-8">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31534.25265512848!2d13.2228373!3d-8.8379519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f15cdc8d5b45%3A0x850c1c5c5ecc5a91!2sLuanda%2C%20Angola!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
