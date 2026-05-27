import React from "react";

type Partner = {
  id: number;
  name: string;
  logo: string;
  active?: boolean;
};

const partners: Partner[] = [
  {
    id: 1,
    name: "Forever 21",
    logo: "FOREVER 21",
  },
  {
    id: 2,
    name: "Buckle",
    logo: "Buckle",
  },
  {
    id: 3,
    name: "Country Boy",
    logo: "Country Boy",
  },
  {
    id: 4,
    name: "Forever 21",
    logo: "FOREVER 21",
  },
  {
    id: 5,
    name: "Forever 21",
    logo: "FOREVER 21",
  },
  {
    id: 6,
    name: "Forever 21",
    logo: "FOREVER 21",
  },
  {
    id: 7,
    name: "Forever 21",
    logo: "FOREVER 21",
  },
  {
    id: 8,
    name: "Forever 21",
    logo: "FOREVER 21",
  },
];

const filters = ["All Clients", "USA", "Europe", "Japan"];

export default function ExplorePartners() {
    return (
        <section className="w-full bg-[#f3f3f3] py-24 px-4">
            <div className="max-w-5xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-[58px] font-light text-[#1f1f1f] leading-tight">
                Explore Our Partners
                </h2>

                <p className="mt-5 text-[17px] text-[#666] max-w-3xl mx-auto leading-8">
                Alliance Sourcing BD links international clients with reliable
                production in Bangladesh, driven by trust, compliance, and
                efficiency.
                </p>
                <div className="flex justify-center gap-3 mt-14 flex-wrap">
                    {filters.map((item, index) => (
                        <button key={index} className={`px-8 py-3 text-[18px] transition-all duration-300 border
                            ${
                            index === 0
                                ? "bg-[#0066cc] text-white border-[#0066cc]"
                                : "bg-white text-[#222] border-[#e5e5e5] hover:bg-[#0066cc] hover:text-white"
                            }`}>
                            {item}
                        </button>
                    ))}
                </div>

                {/* Partner Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-16">
                    {partners.map((partner) => (
                        <div key={partner.id} className={`group relative h-[120px] bg-white overflow-hidden cursor-pointer border border-[#ebebeb]`}>
                        <div className="absolute left-0 bottom-0 w-full h-0 group-hover:h-full transition-all duration-500 ease-in-out bg-gradient-to-t from-[#0066ff] to-[#53e3ff]" />

                            <div className="relative flex items-center justify-center h-full">
                                <h3 className="text-[20px] font-semibold transition-all duration-300">
                                    {partner.logo}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}