
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
              Ощутите идеальное сочетание традиций и инноваций в каждой чашке.
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
            <h4 className="text-lg font-bold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              {['Главная', 'О нас', 'Меню', 'Блог', 'Контакты'].map((item, index) => (
                <li key={item}>
                  <a 
                    href={`#${['home', 'about', 'menu', 'blog', 'contact'][index]}`}
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
            <h4 className="text-lg font-bold mb-4">Часы работы</h4>
            <ul className="space-y-2 text-cream-200">
              <li className="flex justify-between">
                <span>Понедельник - Пятница</span>
                <span>8:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Суббота</span>
                <span>9:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Воскресенье</span>
                <span>10:00 - 18:00</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Свяжитесь с нами</h4>
            <ul className="space-y-3 text-cream-200">
              <li className="flex items-start">
                <MapPin className="mr-2 text-coffee-400 shrink-0 mt-1" size={18} />
                <span>ул. Кофейная 123, Москва, 123456</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-coffee-400" size={18} />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-coffee-400" size={18} />
                <span>info@brewhaven.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coffee-800 mt-12 pt-8 text-center text-cream-300">
          <p>&copy; {new Date().getFullYear()} BrewHaven. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
