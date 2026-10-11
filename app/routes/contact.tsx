export default function ContactSection() {
  return (
    <section className="relative min-h-[420px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
      
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center">
                {/* Dark Overlay */}
            <img className="w-full h-full object-cover" src="/img4.jpg" alt="" />
            <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 rounded-2xl w-full max-w-6xl py-10 sm:py-14 lg:py-20 px-4 sm:px-6 text-center backdrop-blur-[2px]">
        
            <h1 className="text-white text-3xl md:text-6xl font-light mb-6">
                Ready to start sourcing?
            </h1>

            <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-8 sm:mb-10">
            Let us handle your next apparel order from start to finish.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300">
                    Contact
                </button>
                <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300">
                    Learn
                </button>
            </div>
        </div>
    </section>
  );
}
