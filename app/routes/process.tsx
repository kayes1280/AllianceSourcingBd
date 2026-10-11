import { FiRadio, FiUsers, FiShoppingCart, FiCheckCircle } from 'react-icons/fi';

// Process timeline data
const processSteps = [
  {
    id: 1,
    icon: FiRadio,
    title: 'Consultation',
    description: 'We listen to your needs and understand your specifications',
  },
  {
    id: 2,
    icon: FiUsers,
    title: 'Supplier match',
    description: 'We match you with manufacturers who meet your standards',
  },
  {
    id: 3,
    icon: FiShoppingCart,
    title: 'Order management',
    description: 'We negotiate terms and oversee production from start to finish',
  },
  {
    id: 4,
    icon: FiCheckCircle,
    title: 'Quality check',
    description: 'Every batch is tested against your specifications and standards',
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full py-14 sm:py-20 lg:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT SIDE - Heading & Button */}
          <div className="flex flex-col justify-start">
            {/* Label */}
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-6">
              Process
            </p>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 sm:mb-12 leading-tight">
              How we work
            </h2>

            {/* Button */}
            <div>
              <button className="px-8 py-3 border border-gray-400 text-gray-900 font-medium text-sm rounded-md hover:bg-gray-100 transition-colors duration-300">
                Discuss
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - Timeline */}
          <div >
            
            {/* Timeline items */}
            <div className="space-y-12">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="flex gap-4 sm:gap-8">
                    {/* Icon Circle */}
                    <div className="flex-shrink-0 pt-1">
                      <div className=" z-10 w-12 h-12 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <Icon className="w-6 h-6 text-orange-500" /> 
                      </div>
                      
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
