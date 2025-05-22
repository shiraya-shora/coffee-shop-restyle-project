
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const categories = ['Все', 'Горячий кофе', 'Холодный кофе', 'Фирменные', 'Выпечка'];

const menuItems = [
  {
    id: 1,
    name: 'Эспрессо',
    description: 'Крепкий напиток из чистой кофейной эссенции',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'Горячий кофе',
  },
  {
    id: 2,
    name: 'Капучино',
    description: 'Эспрессо с молоком и пеной',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'Горячий кофе',
  },
  {
    id: 3,
    name: 'Айс Латте',
    description: 'Эспрессо с холодным молоком и льдом',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
    category: 'Холодный кофе',
  },
  {
    id: 4,
    name: 'Колд Брю',
    description: 'Медленно настоянный кофе, мягкий и насыщенный',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1581996323777-9a97cf9f388f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'Холодный кофе',
  },
  {
    id: 5,
    name: 'Медово-лавандовый латте',
    description: 'Эспрессо с молоком, настоянным на лаванде, и медом',
    price: 6.00,
    image: 'https://images.unsplash.com/photo-1585494156145-1c60a0e0959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    category: 'Фирменные',
  },
  {
    id: 6,
    name: 'Шоколадный круассан',
    description: 'Масляная выпечка с начинкой из шоколада',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'Выпечка',
  },
  {
    id: 7,
    name: 'Миндальный круассан',
    description: 'Слоеный круассан с миндальным кремом',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1620921568790-6be29ed55055?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'Выпечка',
  },
  {
    id: 8,
    name: 'Карамельный макиато',
    description: 'Эспрессо с ванилью и карамелью',
    price: 5.75,
    image: 'https://images.unsplash.com/photo-1599055322178-1b4e38c7a49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    category: 'Фирменные',
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('Все');
  
  const filteredItems = activeCategory === 'Все' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-coffee-600 font-medium mb-2 block">Наше Меню</span>
          <h2 className="text-4xl font-bold mb-4 text-coffee-950">
            Откройте для себя наш кофе
          </h2>
          <p className="text-coffee-700 max-w-2xl mx-auto">
            От классического эспрессо до фирменных напитков и свежей выпечки,
            у нас каждый найдет что-то для себя.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"} 
              className={activeCategory === category 
                ? "bg-coffee-600 hover:bg-coffee-700 text-white" 
                : "text-coffee-700 border-coffee-300 hover:bg-coffee-100"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-playfair text-xl font-bold text-coffee-800">{item.name}</h3>
                  <span className="bg-cream-100 text-coffee-700 px-2 py-1 rounded font-medium">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-coffee-600 text-sm mb-4 flex-grow">{item.description}</p>
                <Button className="w-full bg-coffee-600 hover:bg-coffee-700 text-white mt-auto">Добавить в заказ</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-coffee-400 text-coffee-700 hover:bg-coffee-50">
            Посмотреть все меню
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
