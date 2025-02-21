import React, { createContext, useContext, useState, useEffect } from "react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  videoUrl?: string;
}

interface ContentContextType {
  galleryImages: GalleryImage[];
  portfolioItems: PortfolioItem[];
  updateGalleryImage: (id: string, data: Partial<GalleryImage>) => void;
  addGalleryImage: (image: GalleryImage) => void;
  deleteGalleryImage: (id: string) => void;
  updatePortfolioItem: (id: string, data: Partial<PortfolioItem>) => void;
  addPortfolioItem: (item: PortfolioItem) => void;
  deletePortfolioItem: (id: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const defaultGalleryImages: GalleryImage[] = [
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
  // ... other default images
];

export const defaultPortfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Festival de Música de Luanda",
    category: "Streaming de Eventos",
    description:
      "Transmissão ao vivo em 4K com múltiplas câmeras e mixagem de áudio profissional",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
    videoUrl: "https://example.com/video1",
  },
  {
    id: "2",
    title: "Campanha Publicitária - Banco BIC",
    category: "Produção Audiovisual",
    description:
      "Série de comerciais para TV e mídias digitais com direção de arte premium",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
    videoUrl: "https://example.com/video2",
  },
  // ... other default items
];

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [galleryImages, setGalleryImages] =
    useState<GalleryImage[]>(defaultGalleryImages);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(
    defaultPortfolioItems,
  );

  // Load from localStorage on mount
  useEffect(() => {
    const savedGallery = localStorage.getItem("galleryImages");
    const savedPortfolio = localStorage.getItem("portfolioItems");

    if (savedGallery) setGalleryImages(JSON.parse(savedGallery));
    if (savedPortfolio) setPortfolioItems(JSON.parse(savedPortfolio));
  }, []);

  // Save to localStorage on changes
  useEffect(() => {
    localStorage.setItem("galleryImages", JSON.stringify(galleryImages));
    localStorage.setItem("portfolioItems", JSON.stringify(portfolioItems));
  }, [galleryImages, portfolioItems]);

  const updateGalleryImage = (id: string, data: Partial<GalleryImage>) => {
    setGalleryImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, ...data } : img)),
    );
  };

  const addGalleryImage = (image: GalleryImage) => {
    setGalleryImages((prev) => [...prev, image]);
  };

  const deleteGalleryImage = (id: string) => {
    setGalleryImages((prev) => prev.filter((img) => img.id !== id));
  };

  const updatePortfolioItem = (id: string, data: Partial<PortfolioItem>) => {
    setPortfolioItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...data } : item)),
    );
  };

  const addPortfolioItem = (item: PortfolioItem) => {
    setPortfolioItems((prev) => [...prev, item]);
  };

  const deletePortfolioItem = (id: string) => {
    setPortfolioItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ContentContext.Provider
      value={{
        galleryImages,
        portfolioItems,
        updateGalleryImage,
        addGalleryImage,
        deleteGalleryImage,
        updatePortfolioItem,
        addPortfolioItem,
        deletePortfolioItem,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};
