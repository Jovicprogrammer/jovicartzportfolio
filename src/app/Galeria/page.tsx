'use client'

import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Artwork {
  id: number;
  title: string;
  thumbnail: string;
  full: string;
}

// Exemplo de dados - substitua pelas suas imagens reais
const artworks: Artwork[] = [
  {
    id: 1,
    title: "Abstrato em Azul",
    thumbnail: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&h=1200&fit=crop"
  },
  {
    id: 2,
    title: "Reflexões Urbanas",
    thumbnail: "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=1200&h=1200&fit=crop"
  },
  {
    id: 3,
    title: "Natureza Vibrante",
    thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&h=1200&fit=crop"
  },
  {
    id: 4,
    title: "Geometria Moderna",
    thumbnail: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1200&h=1200&fit=crop"
  },
  {
    id: 5,
    title: "Cores do Pôr do Sol",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=1200&fit=crop"
  },
  {
    id: 6,
    title: "Expressão Líquida",
    thumbnail: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&h=400&fit=crop",
    full: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=1200&h=1200&fit=crop"
  }
];

export default function ArtGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const navigateToImage = (index: number) => {
    setSelectedIndex(index);
  };

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : artworks.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev !== null && prev < artworks.length - 1 ? prev + 1 : 0));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
  };

  React.useEffect(() => {
    if (selectedIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100">
      {/* Header */}
      <header className="py-16 px-6 text-center">
        <h1 className="text-6xl font-serif italic text-stone-800 mb-3 tracking-tight">
          Minha Galeria
        </h1>
        <p className="text-stone-600 text-lg font-light tracking-wide">
          Coleção de obras pessoais
        </p>
      </header>

      {/* Gallery Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer relative aspect-square overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={artwork.thumbnail}
                alt={artwork.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-serif text-xl italic">
                    {artwork.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:rotate-90"
            aria-label="Fechar"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
            aria-label="Anterior"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
            aria-label="Próxima"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>

          {/* Main Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center px-6 pb-32 pt-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={artworks[selectedIndex].full}
              alt={artworks[selectedIndex].title}
              className="max-w-full max-h-full object-contain rounded-sm shadow-2xl animate-in zoom-in duration-500"
            />
          </div>

          {/* Thumbnail Navigation Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent pt-16 pb-6 px-6">
            <div className="flex gap-3 justify-center items-center overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              {artworks.map((artwork, index) => (
                <button
                  key={artwork.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToImage(index);
                  }}
                  className={`flex-shrink-0 relative rounded-sm overflow-hidden transition-all duration-300 ${
                    index === selectedIndex
                      ? 'ring-4 ring-amber-400 scale-110 shadow-xl shadow-amber-400/50'
                      : 'hover:ring-2 hover:ring-white/50 hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={artwork.thumbnail}
                    alt={artwork.title}
                    className="w-20 h-20 object-cover"
                  />
                  {index === selectedIndex && (
                    <div className="absolute inset-0 bg-amber-400/20 pointer-events-none"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}