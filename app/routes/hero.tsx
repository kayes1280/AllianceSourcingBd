import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaArrowUp } from 'react-icons/fa6';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
  ];

  const services = [
    {
      icon: '/factory.png',
      title: 'Factory sourcing',
      description: 'negotiation & order placement',
      isImage: true,
    },
    {
      icon: '/qc-inspection.png',
      title: 'In-line + final QC',
      description: 'inspections before shipment',
      isImage: true,
    },
    {
      icon: '/sample-approval.png',
      title: 'Sampling & revisions',
      description: 'pre-production approvals',
      isImage: true,
    },
    {
      icon: '/shipping.png',
      title: 'Production tracking',
      description: 'updates & shipping coordination',
      isImage: true,
    },
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);


  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  };


  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
              style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
            

          
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 h-120 flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto">
           
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Crafting Quality Apparel for
              <span className="block bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                Global Brands
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in animation-delay-200">
              We specialize in manufacturing high-quality apparel for global brands, combining skilled
              craftsmanship, modern technology, and strict quality control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300">
                Explore Us
              </button>
               <button className="px-8 py-4 bg-white text-blue-500 font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        
      </section>
    </>
  );
}
