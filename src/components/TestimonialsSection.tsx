
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Coffee Enthusiast',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
    quote: 'BrewHaven has become my daily ritual. The attention to detail in every cup is remarkable, and the atmosphere makes it my favorite place to work remotely.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Local Business Owner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
    quote: 'I've visited coffee shops around the world, and BrewHaven stands among the best. Their single-origin espresso changed my perspective on what coffee can be.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Food Blogger',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    quote: 'Not only is their coffee exceptional, but their pastries are to die for. The almond croissant pairs perfectly with their signature latte.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-coffee-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-coffee-400 font-medium mb-2 block">Testimonials</span>
          <h2 className="text-4xl font-bold mb-4 text-white">
            What Our Customers Say
          </h2>
          <p className="text-cream-200 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our loyal customers have to say about their BrewHaven experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-coffee-800 rounded-lg p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-coffee-400">
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <div className="flex mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-coffee-400 text-coffee-400" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl italic mb-6 text-cream-100">
                  "{currentTestimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-bold text-lg">{currentTestimonial.name}</p>
                  <p className="text-coffee-400">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial} 
              className="bg-coffee-700 hover:bg-coffee-600 text-white p-3 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="bg-coffee-700 hover:bg-coffee-600 text-white p-3 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-coffee-400' : 'bg-coffee-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
