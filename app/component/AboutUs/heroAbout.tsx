export default function AboutHero() {
  return (
    <section className="relative h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/aboutHero.png"
        alt="About Alliance Sourcing BD"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        
        {/* Breadcrumb */}
        <div className="mb-3 flex items-center gap-2 text-xs sm:text-sm md:text-base">
          <span className="text-gray-200">Home</span>
          <span>-</span>
          <span className="font-semibold text-white">About Us</span>
        </div>

        {/* Heading */}
        <h1 className="max-w-[95%] sm:max-w-3xl md:max-w-5xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          About Alliance Sourcing BD
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-[95%] sm:max-w-2xl md:max-w-4xl text-xs sm:text-sm md:text-lg lg:text-xl leading-6 md:leading-8 text-gray-200">
          Your premier partner in seamless garment sourcing and global
          manufacturing excellence, bridging the gap between design and
          production.
        </p>
      </div>
    </section>
  );
}