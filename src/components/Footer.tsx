
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-coffee-950 text-cream-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">
              <span className="text-coffee-400">Brew</span>Haven
            </h3>
            <p className="text-cream-200 mb-6">
              Experience the perfect blend of tradition and innovation in every cup.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-200 hover:text-coffee-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cream-200 hover:text-coffee-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-cream-200 hover:text-coffee-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Menu', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-cream-200 hover:text-coffee-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-cream-200">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-cream-200">
              <li className="flex items-start">
                <MapPin className="mr-2 text-coffee-400 shrink-0 mt-1" size={18} />
                <span>123 Coffee Street, Brewville, CA 94123</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-coffee-400" size={18} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-coffee-400" size={18} />
                <span>info@brewhaven.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coffee-800 mt-12 pt-8 text-center text-cream-300">
          <p>&copy; {new Date().getFullYear()} BrewHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
