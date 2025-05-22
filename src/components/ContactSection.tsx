
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Сообщение отправлено",
      description: "Спасибо за ваше сообщение. Мы скоро свяжемся с вами!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-cream-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-coffee-600 font-medium mb-2 block">Свяжитесь с нами</span>
          <h2 className="text-4xl font-bold mb-4 text-coffee-950">
            Контакты
          </h2>
          <p className="text-coffee-700 max-w-2xl mx-auto">
            Есть вопросы или отзыв? Мы будем рады услышать от вас. Свяжитесь с нашей командой, используя форму ниже.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-coffee-800">Отправить сообщение</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-coffee-700 mb-1">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов"
                  className="w-full border-coffee-200 focus:border-coffee-500 focus:ring-coffee-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-coffee-700 mb-1">
                  Электронная почта
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ivan@example.com"
                  className="w-full border-coffee-200 focus:border-coffee-500 focus:ring-coffee-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-coffee-700 mb-1">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Чем мы можем вам помочь?"
                  className="w-full border-coffee-200 focus:border-coffee-500 focus:ring-coffee-500"
                  rows={5}
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-coffee-600 hover:bg-coffee-700 text-white py-6"
              >
                Отправить сообщение
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-coffee-800 text-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="mr-3 text-coffee-400 shrink-0 mt-1" />
                  <div>
                    <span className="font-medium block mb-1">Наше местоположение</span>
                    <p className="text-cream-200">ул. Кофейная 123, Москва, 123456</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Phone className="mr-3 text-coffee-400 shrink-0 mt-1" />
                  <div>
                    <span className="font-medium block mb-1">Телефон</span>
                    <p className="text-cream-200">+7 (495) 123-45-67</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail className="mr-3 text-coffee-400 shrink-0 mt-1" />
                  <div>
                    <span className="font-medium block mb-1">Электронная почта</span>
                    <p className="text-cream-200">info@brewhaven.com</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Clock className="mr-3 text-coffee-400 shrink-0 mt-1" />
                  <div>
                    <span className="font-medium block mb-1">Часы работы</span>
                    <p className="text-cream-200">Пн-Пт: 8:00-20:00</p>
                    <p className="text-cream-200">Сб: 9:00-19:00, Вс: 10:00-18:00</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <iframe
                title="Coffee Shop Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1621555555555!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
