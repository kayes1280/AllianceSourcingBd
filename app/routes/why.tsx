import { FiCheckCircle, FiAward, FiTruck, FiGlobe } from 'react-icons/fi';

const features = [
  {
    id: 1,
    title: 'Quality assurance',
    description: 'Rigorous testing at every production stage',
    icon: FiCheckCircle,
  },
  {
    id: 2,
    title: 'Ethical sourcing',
    description: 'Fair wages and safe working conditions',
    icon: FiAward,
  },
  {
    id: 3,
    title: 'On-time delivery',
    description: 'Your deadlines are our commitments',
    icon: FiTruck,
  },
  {
    id: 4,
    title: 'Global network',
    description: 'Connected across Bangladesh and beyond',
    icon: FiGlobe,
  },
];

// Main component
export default function WhyChooseUs() {
  return (
    <section className="w-full py-14 sm:py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-16">
          {/* Top Label */}
          <p className="text-sm font-bold uppercase text-gray-600 mb-4">
            Why
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What sets us apart
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We stand behind every garment
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-lg p-6 sm:p-8 border border-gray-300 hover:shadow-lg hover:border-gray-400 transition-all duration-300"
              >
                {/* React Icon */}
                <div className="text-4xl mb-6 text-blue-600">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
