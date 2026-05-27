import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Buying House', href: '/buying-house' },
      { label: 'Factory & Machinery', href: '/factory' },
      { label: 'Global Partners', href: '/partners' },
    ];

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="w-[80%] mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            
            {/* Left: Company Logos */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="flex items-center gap-1">
                <img
                  src="/logo.jpg"
                  alt="Company Logo 1"
                  className="h-8 w-auto object-contain"
                />
                 <h3 className='leading-4'><span className='text-[15px] font-bold'>ALLIANCE</span><br /><span className="text-[11px]">SOURCING BD</span></h3>
              </div>
              <div className="hidden sm:flex items-center border-l border-gray-200 pl-4 gap-1">
                <img
                  src="/logo2.png"
                  alt="Company Logo 2"
                  className="h-10 w-12 object-contain"
                />
                <h3 className='leading-4'><span className='text-[15px] font-bold'>ALLIANCE</span><br /><span className="text-[11px]">APPARELS LTD.</span></h3>
              </div>
            </div>

            {/* Center: Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300 relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right: CTA Button (Desktop) */}
            <div className="hidden md:flex flex-shrink-0">
              <button className="px-6 py-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white text-sm font-semibold rounded-[12px] hover:shadow-lg hover:shadow-blue-300 transform hover:scale-105 transition-all duration-300">
                Speak with us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button className="px-4 py-1.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white text-xs font-semibold rounded-full hover:shadow-lg transition-all duration-300">
                Speak with us
              </button>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-300"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'max-h-64' : 'max-h-0'
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                {navItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
      </nav>
    </>
  );
}