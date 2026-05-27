import {
    FaIndustry,
    FaTools,
    FaLink,
    FaSlidersH,
} from "react-icons/fa";

const capabilities = [
    {
        id: 1,
        title: "Garment production support",
        desc: "Full-scale manufacturing with quality control at each stage.",
        icon: <FaTools />,
    },
    {
        id: 2,
        title: "Maintenance and technical support",
        desc: "Our team keeps machines running smoothly year-round.",
        icon: <FaIndustry />,
    },
    {
        id: 3,
        title: "Machinery supply and installation",
        desc: "We source and install equipment tailored to your needs.",
        icon: <FaLink />,
    },
    {
        id: 4,
        title: "Production optimization",
        desc: "We improve efficiency and reduce waste on every line.",
        icon: <FaSlidersH />,
    },
];

export default function FactorySection() {
    return (
        <section className="bg-[#efe1d3] min-h-screen flex items-center justify-center px-6 py-16">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Content */}
                <div>
                    <div className="text-orange-500 text-5xl mb-8">
                        <FaIndustry />
                    </div>

                    <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">
                        Factory and <br /> machinery <br /> capabilities
                    </h1>
                    <p className="text-gray-700 text-lg leading-8 mb-10 max-w-xl">
                        We work with modern facilities equipped for precision
                        production. Our network includes mills and factories with
                        the latest technology.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                        {capabilities.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                
                                <div className="text-orange-500 text-xl mt-1">
                                    {item.icon}
                                </div>

                                <div>
                                    <h3 className="text-xl font-medium mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-500 leading-7">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="border border-gray-300 bg-white px-8 py-3 rounded-lg text-lg hover:bg-black hover:text-white duration-300">
                        Details
                    </button>
                </div>

                {/* Right Image */}
                <div>
                    <img
                        src="./public/img3.jpg"
                        alt="factory"
                        className="w-full h-[700px] object-cover rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
}