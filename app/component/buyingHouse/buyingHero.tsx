export default function BuyingHero() {
  return (
    <section className="relative h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] w-full overflow-hidden">
      
      <img src="/aboutHero.png" alt="About Alliance Sourcing BD" className="absolute inset-0 h-full w-full object-cover"/>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                <div className="mb-3 flex items-center gap-2 text-xs sm:text-sm md:text-base">
          <span className="text-gray-200">Home</span>
          <span>-</span>
          <span className="font-semibold text-white">Our Service</span>
          <span>-</span>
          <span className="font-semibold text-white">Buying House Services</span>
        </div>
        <h1 className="max-w-[95%] sm:max-w-3xl md:max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Professional Buying & Sourcing Services
        </h1>
        <p className="mt-4 max-w-[95%] sm:max-w-2xl md:max-w-4xl text-xs sm:text-sm md:text-lg lg:text-xl leading-6 md:leading-8 text-gray-200">
          Your premier partner in seamless garment sourcing and global
          manufacturing excellence, bridging the gap between design and
          production.
        </p>
      </div>
    </section>
  );
}