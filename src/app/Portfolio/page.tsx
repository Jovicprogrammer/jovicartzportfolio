'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Tipos
interface Product {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: string;
  images: string[];
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

// Dados de exemplo
const products: Product[] = [
  {
    id: 1,
    title: "Monster High Doll",
    thumbnail: "images/vesquicio-quadro.webp",
    description: "Boneca colecionável Monster High com detalhes incríveis e acessórios exclusivos. Perfeita para colecionadores!",
    price: "R$ 299,90",
    images: [
      "images/vesquicio-quadro.webp",
      "images/vesquicio-quadro.webp",
      "images/vesquicio-quadro.webp",
      "images/vesquicio-quadro.webp",
    ]
  },
  {
    id: 2,
    title: "Caderno Be Berry",
    thumbnail: "images/vesquicio-quadro.webp",
    description: "Caderno universitário 10 matérias com capa dura decorada, bolsa plástica com aroma de morango e 160 folhas.",
    price: "R$ 49,90",
    images: [
      "images/vesquicio-quadro.webp",
    ]
  },
  {
    id: 3,
    title: "Action Figure Hero",
    thumbnail: "images/vesquicio-quadro.webp",
    description: "Action figure articulado com acessórios e detalhes premium. Edição limitada para colecionadores.",
    price: "R$ 189,90",
    images: [
      "images/vesquicio-quadro.webp",
    ]
  },
  {
    id: 4,
    title: "Strangers on a Train - 2 pack",
    thumbnail: "images/vesquicio-quadro.webp",
    description: "Action figure articulado com acessórios e detalhes premium. Edição limitada para colecionadores.",
    price: "R$ 189,90",
    images: [
      "images/vesquicio-quadro.webp",
    ]
  },
];

function ProjectCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-dourado rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 group"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{product.title}</h3>
        <p className="text-2xl font-bold text-cafe">{product.price}</p>
      </div>
    </div>
  );
}

function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  if (!product) return null;

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Modal Principal */}
      <div className="fixed inset-0 bg-black/70 bg-opacity-70 z-[600] flex items-center justify-center p-4 animate-fadeIn">
        <div className="bg-cafecomleite rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-scaleIn">
          
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-dourado">
            <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-6 h-6 hover:cursor-pointer" />
            </button>
          </div>

          {/* Conteúdo */}
          <div className="grid md:grid-cols-2 gap-6 p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
            
            {/* Galeria de Imagens */}
            <div>
              {/* Imagem Principal */}
              <div className="relative aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden group">
                <img
                  src={product.images[selectedImage]}
                  alt={`${product.title} - imagem ${selectedImage + 1}`}
                  className="w-full h-full object-cover cursor-zoom-in"
                  onClick={() => setZoomedImage(product.images[selectedImage])}
                />
                
                {/* Botões de navegação */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Imagem anterior"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-800 cursor-pointer" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all opacity-0 group-hover:opacity-100"
                      aria-label="Próxima imagem"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-800 cursor-pointer" />
                    </button>
                  </>
                )}

                {/* Indicador de zoom */}
                <div className="absolute top-2 right-2 bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                  Clique para ampliar
                </div>
              </div>

              {/* Miniaturas */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? 'border-amber-200 scale-105'
                        : 'border-gray-200 hover:border-dourado'
                    }`}
                    aria-label={`Ver imagem ${idx + 1}`}
                  >
                    <img
                      src={img}
                      alt={`Miniatura ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Informações do Produto */}
            <div>
              <div className="mb-6">
                <p className="text-4xl font-bold text-cafe mb-4">
                  {product.price}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-cafe text-white font-bold py-4 rounded-lg hover:from-dourado hover:to-cafe transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                  Adicionar ao Carrinho
                </button>
                <button className="w-full border-2 border-cafe text-cafe font-bold py-4 rounded-lg hover:bg-purple-50 transition-all duration-200">
                  Comprar Agora
                </button>
              </div>

              {/* Detalhes extras */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-bold text-gray-800 mb-3">Detalhes do Produto</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Frete grátis para todo Brasil</li>
                  <li>✓ Entrega em até 7 dias úteis</li>
                  <li>✓ Garantia de 30 dias</li>
                  <li>✓ Produto 100% original</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zoom Overlay (por cima do modal) */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-[1000] flex items-center justify-center p-4 animate-fadeIn cursor-zoom-out"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            aria-label="Fechar zoom"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={zoomedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-full object-contain animate-scaleIn"
          />
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default function Portfolio() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-cafecomleite p-8">

      <Navbar />

      <div className="max-w-7xl mx-auto pt-20">
        <h1 className="text-4xl font-bold text-leitebranco mb-2 text-center">
          Loja de Produtos
        </h1>
        <p className="text-leitebranco text-center mb-8">
          Clique nos cards para ver detalhes e imagens em alta qualidade
        </p>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProjectCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

          <Footer />
        
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      
    </div>
  );
}