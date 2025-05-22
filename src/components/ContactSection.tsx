
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
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
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-cream-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-coffee-600 font-medium mb-2 block">Get In Touch</span>
          <h2 className="text-4xl font-bold mb-4 text-coffee-950">
            Contact Us
          </h2>
          <p className="text-coffee-700 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out to our team using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-coffee-800">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-coffee-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full border-coffee-200 focus:border-coffee-500 focus:ring-coffee-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-coffee-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full border-coffee-200 focus:border-coffee-500 focus:ring-coffee-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-coffee-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full border-coffee-200 focus:border-coffee-500 focus:ring-coffee-500"
                  rows={5}
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-coffee-600 hover:bg-coffee-700 text-white py-6"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-coffee-800 text-white p-8 rounded-lg shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <MapPin className="mr-3 text-coffee-400 shrink-0 mt-1" />
                  <div>
                    <span className="font-medium block mb-1">Our Location</span>
                    <p className="text-cream-200">123 Coffee Street, Brewville, CA 94123</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Phone className="mr-3 text-coffee-400 shrink-0 mt-1" />
                  <div>
                    <span className="font-medium block mb-1">Phone Number</span>
                    <p className="text-cream-200">(555) 123-4567</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail className="mr-3 text-coffee-400 shrink-0 mt-1" />
                  <div>
                    <span className="font-medium block mb-1">Email Address</span>
                    <p className="text-cream-200">info@brewhaven.com</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Clock className="mr-3 text-coffee-400 shrink-0 mt-1" />
                  <div>
                    <span className="font-medium block mb-1">Opening Hours</span>
                    <p className="text-cream-200">Mon-Fri: 8AM-8PM</p>
                    <p className="text-cream-200">Sat: 9AM-7PM, Sun: 10AM-6PM</p>
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
