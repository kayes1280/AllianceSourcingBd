import { FiUsers, FiGrid, FiBriefcase } from 'react-icons/fi';

const services = [
  {
    id: 1,
    icon: FiUsers,
    title: 'Product development and sampling',
  },
  {
    id: 2,
    icon: FiGrid,
    title: 'Supplier selection and evaluation',
  },
  {
    id: 3,
    icon: FiBriefcase,
    title: 'Price negotiation and order placement',
  },
];

export default function ProfessionalServices() {
  return (
    <section className="w-full py-24 px-4 bg-yellow-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-[90%] mx-auto">
                {/* image part */}
                <div className=" flex items-center justify-center">
                    <div className=" w-full h-full">
                        <img className='rounded-[10px]' src="./public/house.webp" alt="img" />
                    </div>
                </div>

                <div className='relative'>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mt-6 mb-2">
                        Services
                    </p>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        Professional buying house services
                    </h2>
                    <p className="text-gray-700 text-lg mb-4 leading-relaxed max-w-md">
                        We handle the complexity of sourcing so you can focus on your business. Our buying house team brings years of experience in connecting buyers with the right manufacturers.
                    </p>

                    {/* Services List */}
                    <div className="space-y-4 mb-8">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                            <div key={service.id} className="flex items-start gap-4 group">

                                {/* Icon */}
                                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                                    <Icon className=" w-5 h-5 text-orange-600" strokeWidth={2} />
                                </div>

                                <p className="text-gray-800 font-medium leading-relaxed pt-0.5">
                                {service.title}
                                </p>
                            </div>
                            );
                        })}
                    </div>

                    {/* Button */}
                    <button className="px-8 py-3 border border-gray-400 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 hover:border-gray-500 transition-all duration-300">
                    Explore
                    </button>
                </div>
            </div>
    </section>
  );
}
