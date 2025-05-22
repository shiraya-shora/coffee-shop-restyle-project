
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ['Главная', 'О нас', 'Меню', 'Блог', 'Контакты'];
  const menuLinks = ['home', 'about', 'menu', 'blog', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-playfair font-bold text-coffee-800">
            <span className="text-coffee-500">Brew</span>Haven
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a 
                key={item} 
                href={`#${menuLinks[index]}`}
                className="text-coffee-800 hover:text-coffee-500 transition-colors coffee-hover font-medium"
              >
                {item}
              </a>
            ))}
            <Button className="bg-coffee-600 hover:bg-coffee-700 text-white">Заказать</Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-coffee-800" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <a 
                key={item} 
                href={`#${menuLinks[index]}`}
                className="text-coffee-800 hover:text-coffee-500 py-2 px-4 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="bg-coffee-600 hover:bg-coffee-700 text-white w-full">Заказать</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
