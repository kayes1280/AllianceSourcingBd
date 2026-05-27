import React from "react";
import {
    ArrowUpRight,
    MessageCircle,
    Shield,
    Clock3,
    Leaf,
} from "lucide-react";

export default function PartnershipSection() {
    const features = [
        {
            title: "Long-term collaboration approach",
            description:"Building lasting relationships that grow stronger with every collection",
            icon: <ArrowUpRight size={20} />,
        },
        {
            title: "Transparent communication",
            description: "Clear, honest dialogue at every stage of production",
            icon: <MessageCircle size={20} />,
        },
        {
            title: "Strong quality control system",
            description:"Rigorous standards ensuring excellence in every garment",
            icon: <Shield size={20} />,
        },
        {
            title: "On-time delivery commitment",
            description:"Meeting deadlines consistently to keep your business running smoothly",
            icon: <Clock3 size={20} />,
        },
        {
            title: "Ethical and sustainable sourcing",
            description:"Responsible practices that protect people and planet",
            icon: <Leaf size={20} />,
        },
    ];

  return (
        <section className="w-full bg-[#f5f5f5] py-16 sm:py-20 lg:py-24 px-4">
            <div className="max-w-7xl mx-auto">

                <div className="text-center">
                    <h2 className="text-[30px] sm:text-[42px] lg:text-[58px] leading-tight font-light text-[#1f1f1f]">
                        What Makes Our Partnerships Strong
                    </h2>

                    <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] lg:text-[17px] leading-7 sm:leading-8 text-[#666] max-w-3xl mx-auto px-2">
                        Our commitment to excellence goes beyond manufacturing. We build
                        partnerships on trust, transparency, and shared success.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 lg:mt-16">

                    {features.map((item, index) => (
                        <div key={index} className="group border border-[#dddddd] rounded-[10px] bg-white p-5 sm:p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" >

                            <div className="w-[42px] h-[42px] rounded-[10px] bg-[#221d1d] flex items-center justify-center text-white transition-all duration-500 hover:bg-gradient-to-t hover:from-[#0066ff] hover:to-[#53e3ff] hover:scale-110">
                                {item.icon}
                            </div>

                            <h3 className="mt-5 sm:mt-6 text-[22px] sm:text-[26px] lg:text-[30px] leading-tight font-semibold text-[#222]">
                                {item.title}
                            </h3>

                            <p className="mt-3 sm:mt-4 text-[15px] sm:text-[16px] lg:text-[17px] leading-7 sm:leading-8 text-[#666]">
                                {item.description}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}