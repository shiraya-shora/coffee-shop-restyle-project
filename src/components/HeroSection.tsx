
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Ощутите искусство <span className="text-coffee-400">идеального кофе</span>
          </h1>
          <p className="text-lg md:text-xl text-cream-100 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            От зерна до чашки, мы создаем превосходные кофейные впечатления с лучшими ингредиентами и техниками заваривания.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button className="bg-coffee-600 hover:bg-coffee-700 text-white text-lg py-6 px-8">
              Изучить наше меню
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
              О нашем кофе
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
