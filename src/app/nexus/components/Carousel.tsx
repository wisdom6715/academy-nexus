import React, { useState, useEffect } from 'react';
import { Award } from 'lucide-react';
import Image from 'next/image';

const SlidingImagesComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Sample images - you can replace these with your actual image paths
  const images = [
    '/images/aws.jpeg',
    '/images/microsoft.jpeg',
    '/images/code.jpeg',
    '/images/cybersecurity.jpeg'
  ];
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative opacity-100 scale-100 transition-all duration-500 delay-800">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-100 hover:scale-105 transition-transform duration-300">
        <h3 className="text-2xl font-black text-purple-600 mb-6">Certified Technology Partners</h3>
        <p className="text-gray-700 mb-8">We are certified by leading technology platforms, ensuring enterprise-grade solutions.</p>
        
        {/* Image Carousel Container */}
        <div className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50">
          {/* Images Container */}
          <div className="relative h-64 w-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentImageIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentImageIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <Image
                  width={300} height={300}
                  src={image}
                  alt={`Partnership ${index + 1}`}
                  className="w-full h-full object-none rounded-xl"
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `data:image/svg+xml;base64,${btoa(`
                      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#f3f4f6"/>
                        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#6b7280" text-anchor="middle" dy=".3em">
                          Partnership Image ${index + 1}
                        </text>
                      </svg>
                    `)}`;
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-purple-600 scale-125'
                    : 'bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90">Partnership Level</div>
              <div className="text-lg font-black">Premier Certified</div>
            </div>
            <Award className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingImagesComponent;