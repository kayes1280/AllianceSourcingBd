import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
      { label: 'About us', href: '/about' },
      { label: 'Our services', href: '/services' },
      { label: 'Factory network', href: '/factory' },
      { label: 'Quality control', href: '/quality' },
      { label: 'Contact us', href: '/contact' },
    ];

  const socialLinks = [
        {
            name: 'Facebook',
            href: '#',
            icon: <FaFacebook className="w-5 h-5" />,
        },
        {
            name: 'Instagram',
            href: '#',
            icon: <FaInstagram className="w-5 h-5" />,
        },
        {
            name: 'Twitter',
            href: '#',
            icon: <FaXTwitter className="w-5 h-5" />,
        },
        {
            name: 'LinkedIn',
            href: '#',
            icon: <FaLinkedin className="w-5 h-5" />,
        },
        {
          name: 'YouTube',
          href: '#',
          icon: <FaYoutube className="w-5 h-5" />,
        },
    ];

  const bottomLinks = [
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Terms of service', href: '/terms' },
      { label: 'Cookie settings', href: '/cookies' },
    ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {/* Left Section: Company Info & Social */}
          <div className="flex flex-col space-y-8">
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
                  className="h-8 w-auto object-contain"
                />
                <h3 className='leading-4'><span className='text-[15px] font-bold'>ALLIANCE</span><br /><span className="text-[11px]">APPARELS LTD.</span></h3>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-300">
                Address
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">
                Asha Plaza (2nd floor), Hemayetpur, <br />
                Savar, Dhaka, Bangladesh.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-300">
                Contact
              </h3>
              <div className="space-y-2">
                <p className="text-gray-400 text-base">
                  <a
                    href="tel:01716054044"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    Phone: 01716054044
                  </a>
                </p>
                <p className="text-gray-400 text-base">
                  <a
                    href="mailto:faroque71@gmail.com"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    Email: faroque71@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-300">
                Follow Us
              </h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gray-900 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section: Quick Links */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-6">
              <h3 className="text-lg font-bold tracking-tight uppercase">
                Quick Links
              </h3>
              <nav className="space-y-4">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-gray-400 font-medium hover:text-white transition-colors duration-300 text-base"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {currentYear} Alliance Sourcing BD. All rights reserved.
          </p>

          {/* Bottom Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            {bottomLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-500 text-sm hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}