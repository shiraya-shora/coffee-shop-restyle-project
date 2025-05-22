
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-cream-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-coffee-600 font-medium mb-2 block">Our Story</span>
            <h2 className="text-4xl font-bold mb-6 text-coffee-950">
              Brewing Passion Since 1998
            </h2>
            <p className="text-coffee-800 mb-6 leading-relaxed">
              BrewHaven began as a small corner café with a big dream: to serve extraordinary coffee in a warm, welcoming space. Over two decades later, our passion for exceptional coffee remains unchanged, while our community has grown beyond what we could have imagined.
            </p>
            <p className="text-coffee-800 mb-8 leading-relaxed">
              Every bean we source, every drink we craft, and every pastry we bake reflects our dedication to quality and sustainability. We work directly with farmers who share our values, ensuring fair trade practices and environmental responsibility.
            </p>
            <Button className="bg-coffee-600 hover:bg-coffee-700 text-white">
              Learn More About Us
            </Button>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1445077100181-a33e9ac94db0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Coffee beans being roasted" 
                className="w-full h-48 object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Barista making latte art" 
                className="w-full h-64 object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Coffee shop interior" 
                className="w-full h-64 object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" 
              />
              <img 
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                alt="Coffee cup on table" 
                className="w-full h-48 object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
