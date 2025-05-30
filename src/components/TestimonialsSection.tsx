
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const testimonials = [
  {
    id: 1,
    name: 'Сара Джонсон',
    role: 'Любитель кофе',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
    quote: 'BrewHaven стал моим ежедневным ритуалом. Внимание к деталям в каждой чашке просто замечательное, а атмосфера делает его моим любимым местом для удаленной работы.',
    rating: 5
  },
  {
    id: 2,
    name: 'Михаил Чен',
    role: 'Владелец местного бизнеса',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
    quote: "Я посещал кофейни по всему миру, и BrewHaven стоит среди лучших. Их эспрессо из одного сорта зерен изменил мое представление о том, каким может быть кофе.",
    rating: 5
  },
  {
    id: 3,
    name: 'Эмма Родригес',
    role: 'Фуд-блогер',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    quote: 'Не только их кофе исключительный, но и выпечка просто восхитительна. Миндальный круассан идеально сочетается с их фирменным латте.',
    rating: 5
  },
  {
    id: 4,
    name: 'Давид Вильсон',
    role: 'Ценитель кофе',
    image: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    quote: 'Атмосфера в BrewHaven просто несравненная. Это стало моим любимым местом как для непринужденных встреч, так и для сосредоточенной работы.',
    rating: 5
  },
  {
    id: 5,
    name: 'София Ким',
    role: 'Постоянный клиент',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
    quote: 'Сезонные специалитеты в BrewHaven всегда удивляют и радуют. Их внимание к качеству и деталям проявляется в каждой чашке.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<any>(null);

  // Update current index when carousel changes
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    
    api.on('select', onSelect);
    
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);
  
  // Display stars for rating
  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, i) => (
      <Star key={i} size={16} className="fill-coffee-400 text-coffee-400" />
    ));
  };

  return (
    <section className="py-24 bg-coffee-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-coffee-400 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-cream-300 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-coffee-400 font-medium mb-2 block">Отзывы</span>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Что Говорят Наши Клиенты
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{
              align: "center",
              loop: true
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-2/3 lg:basis-1/2 pl-4">
                  <div className="p-1">
                    <Card className="bg-coffee-800/80 backdrop-blur-sm border-coffee-700 shadow-xl overflow-hidden relative rounded-xl">
                      <div className="absolute top-0 right-0 p-4">
                        <div className="text-5xl font-bold text-coffee-500 opacity-20">"</div>
                      </div>
                      
                      <div className="p-6 md:p-8">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 relative mb-4">
                            <Avatar className="w-full h-full border-2 border-coffee-500">
                              <AvatarImage 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="object-cover"
                              />
                              <AvatarFallback className="bg-coffee-700">
                                {testimonial.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          
                          <h4 className="font-semibold text-lg text-cream-100">{testimonial.name}</h4>
                          <p className="text-coffee-400 text-sm mb-2">{testimonial.role}</p>
                          
                          <div className="flex space-x-1 mb-4">
                            {renderStars(testimonial.rating)}
                          </div>
                          
                          <blockquote className="text-center text-cream-100 italic">
                            "{testimonial.quote}"
                          </blockquote>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-center mt-8 gap-2">
              <CarouselPrevious 
                className="relative static left-0 right-auto translate-y-0 bg-coffee-700 hover:bg-coffee-600 border-none text-white"
              />
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      currentIndex === index ? 'bg-coffee-400' : 'bg-coffee-700'
                    }`}
                    aria-label={`Перейти к отзыву ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselNext 
                className="relative static right-0 left-auto translate-y-0 bg-coffee-700 hover:bg-coffee-600 border-none text-white"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
