const stats = [
  {
    number: "03+",
    label: "Regions",
  },
  {
    number: "40+",
    label: "Global Clients",
  },
  {
    number: "09+",
    label: "Years",
  },
];

export default function GlobalPartnersHero() {
    return (
        <section className="relative h-[600px] w-full overflow-hidden">
        
            <img src="/globalNetwork.png" alt="About Alliance Sourcing BD" className="absolute inset-0 h-full w-full object-cover"/>
            <div className="absolute inset-0 bg-[#001B44]/70"/>

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                
                <p className="mb-3 text-sm sm:text-base font-medium">
                    Home 
                    <span className="mx-2">{">"}</span>
                    <span className="font-semibold">Global Partners</span>
                </p>

                <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl font-light">
                    Our Global Partners
                </h1>

                <p className="max-w-4xl text-sm sm:text-base md:text-xl leading-relaxed text-gray-200">
                    We connect global fashion brands with top Bangladeshi manufacturers,
                    built on a decade of transparency and quality.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-10 sm:gap-16 md:gap-24">
                    {stats.map((item, index) => (
                        <div key={index} className="text-center">
                        
                            <h2 className="text-5xl sm:text-6xl font-bold">
                                {item.number}
                            </h2>

                            <p className="mt-2 text-lg sm:text-2xl text-gray-200">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}