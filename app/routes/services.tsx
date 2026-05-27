import React from "react";
import {
  FiGrid,
  FiMaximize2,
  FiShoppingBag,
  FiMonitor,
} from "react-icons/fi";

const servicesData = [
  {
    id: 1,
    icon: <FiGrid />,
    title: "Product development and sampling",
    description: "We create samples that match your vision exactly.",
    active: true,
  },
  {
    id: 2,
    icon: <FiMaximize2 />,
    title: "Supplier selection and evaluation",
    description: "We find manufacturers who meet your standards.",
  },
  {
    id: 3,
    icon: <FiShoppingBag />,
    title: "Price negotiation and order placement",
    description: "We secure the best terms for your orders.",
  },
  {
    id: 4,
    icon: <FiMonitor />,
    title: "Production follow-up and quality inspection",
    description: "We monitor every batch from loom to shipment.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6">
        <div className="max-w-6xl mx-auto">
            
            {/* Heading */}
            <div className="text-center mb-10">
                <p className="text-[18px] font-semibold text-black mb-2">
                    Services
                </p>

                <h1 className="text-4xl font-medium text-black mb-3 leading-tight">
                    Buying house services
                </h1>

                <p className="text-[18px] text-gray-700">
                    We manage every step of your sourcing journey with precision.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {servicesData.map((service) => (
                    <div
                        key={service.id}
                        className={`rounded-xl p-10 min-h-[235px] flex flex-col justify-between transition duration-300
                        ${
                            service.active
                            ? "bg-[#1496d4] text-white"
                            : "bg-white border border-gray-300 text-black"
                        }`}
                        >
                        <div
                            className={`text-4xl mb-6 ${
                            service.active ? "text-white" : "text-black"
                            }`}
                        >
                            {service.icon}
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-3xl font-medium mb-4 leading-snug">
                            {service.title}
                            </h2>

                            <p
                            className={`text-lg ${
                                service.active ? "text-white" : "text-gray-700"
                            }`}
                            >
                            {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
      </div>
    </section>
  );
};