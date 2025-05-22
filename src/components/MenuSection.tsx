
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Hot Coffee', 'Iced Coffee', 'Specialty', 'Pastry'];

const menuItems = [
  {
    id: 1,
    name: 'Espresso',
    description: 'Strong shot of pure coffee essence',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'Hot Coffee',
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and foam',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'Hot Coffee',
  },
  {
    id: 3,
    name: 'Iced Latte',
    description: 'Espresso with cold milk over ice',
    price: 5.00,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
    category: 'Iced Coffee',
  },
  {
    id: 4,
    name: 'Cold Brew',
    description: 'Slow-steeped coffee, smooth and bold',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1581996323777-9a97cf9f388f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'Iced Coffee',
  },
  {
    id: 5,
    name: 'Honey Lavender Latte',
    description: 'Espresso with lavender-infused milk and honey',
    price: 6.00,
    image: 'https://images.unsplash.com/photo-1585494156145-1c60a0e0959f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    category: 'Specialty',
  },
  {
    id: 6,
    name: 'Chocolate Croissant',
    description: 'Buttery pastry filled with rich chocolate',
    price: 4.25,
    image: 'https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'Pastry',
  },
  {
    id: 7,
    name: 'Almond Croissant',
    description: 'Flaky croissant with almond cream filling',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1620921568790-6be29ed55055?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    category: 'Pastry',
  },
  {
    id: 8,
    name: 'Caramel Macchiato',
    description: 'Espresso with vanilla and caramel',
    price: 5.75,
    image: 'https://images.unsplash.com/photo-1599055322178-1b4e38c7a49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    category: 'Specialty',
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-coffee-600 font-medium mb-2 block">Our Menu</span>
          <h2 className="text-4xl font-bold mb-4 text-coffee-950">
            Discover Our Coffee Selection
          </h2>
          <p className="text-coffee-700 max-w-2xl mx-auto">
            From classic espresso drinks to signature creations and freshly baked pastries, 
            there's something for everyone to enjoy.
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
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-playfair text-xl font-bold text-coffee-800">{item.name}</h3>
                  <span className="bg-cream-100 text-coffee-700 px-2 py-1 rounded font-medium">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-coffee-600 text-sm mb-4">{item.description}</p>
                <Button className="w-full bg-coffee-600 hover:bg-coffee-700 text-white">Add to Order</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-coffee-400 text-coffee-700 hover:bg-coffee-50">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
