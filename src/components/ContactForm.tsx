
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Send } from 'lucide-react';

interface ContactFormProps {
  isForBrochure: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isForBrochure }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hello, I am ${formData.name}. ${isForBrochure ? 'I would like to request a brochure for Bramhacorp Sunvalley.' : 'I am interested in Bramhacorp Sunvalley and would like more information.'} My contact details: Email: ${formData.email}, Phone: ${formData.phone}${formData.message ? '. Message: ' + formData.message : ''}`;
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/917350060260?text=${encodedMessage}`, '_blank');
    
    // Show success toast
    toast({
      title: isForBrochure ? "Brochure Request Sent" : "Enquiry Sent",
      description: "Thank you for your interest. We'll contact you shortly.",
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isForBrochure ? 'Download Brochure' : 'Contact Us'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            placeholder="Your Name"
          />
        </div>
        
        <div>
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        
        <div>
          <Label htmlFor="message">Message (Optional)</Label>
          <Textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Any specific requirements or questions"
            rows={3}
          />
        </div>
        
        <Button type="submit" className="w-full bg-sunvalley-gold hover:bg-sunvalley-blue">
          <Send className="mr-2 h-4 w-4" /> Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
