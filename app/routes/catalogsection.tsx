import {
  FaTshirt,
  FaGripLines,
  FaBorderAll,
  FaRegSquare,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Knitwear",
    desc: "Sweaters, t-shirts, and knit garments made to order.",
    icon: <FaTshirt />,
  },
  {
    id: 2,
    title: "Denim and heavy fabrics",
    desc: "Durable denim and canvas for pants and jackets.",
    icon: <FaGripLines />,
  },
  {
    id: 3,
    title: "Woven fabrics",
    desc: "Cotton, blends, and specialty woven materials in stock.",
    icon: <FaBorderAll />,
  },
  {
    id: 4,
    title: "Accessories and trims",
    desc: "Buttons, zippers, labels, and finishing materials available.",
    icon: <FaRegSquare />,
  },
];

export default function CatalogSection() {
  return (
    <section className="bg-[#f5f5f5] min-h-screen flex items-center justify-center px-6 py-16">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image */}
            <div>
                <img
                    src="./public/img5.png"
                    alt="fashion"
                    className="w-full h-[600px] object-cover rounded-xl"
                />
            </div>

            {/* Right Content */}
            <div>
                <p className="text-sm font-semibold mb-2">Catalog</p>

                <h1 className="text-5xl md:text-3xl font-light leading-tight mb-4">
                    Products and services
                </h1>

                <p className="text-gray-700 text-lg leading-8 mb-6 max-w-xl">
                    We source and manage everything you need for apparel
                    production. From raw materials to finished goods, we
                    handle it all.
                </p>

                {/* Services */}
                <div className="grid grid-cols-3 sm:grid-cols-2 gap-8 mb-8">
                    {services.map((item) => (
                        <div key={item.id} className="flex gap-4">
                            <div className="text-blue-600 text-xl mt-1">
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
                <button className="border border-gray-300 px-8 py-3 rounded-lg text-lg hover:bg-black hover:text-white duration-300">
                    Browse
                </button>
            </div>
        </div>
    </section>
  );
}