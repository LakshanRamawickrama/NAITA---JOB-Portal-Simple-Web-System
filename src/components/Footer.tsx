import React from 'react';
    import { Mail, Phone, MapPin } from 'lucide-react';

    const Footer: React.FC = () => {
      return (
        <footer className="bg-blue-900 text-white mt-12">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">NAITA</h3>
                <p className="text-blue-200 text-sm">
                  National Apprentice & Industrial Training Authority
                </p>
                <p className="text-blue-200 text-sm mt-2">
                  Empowering Sri Lanka's workforce through quality technical education and training.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Phone size={16} className="mr-2" />
                    <span>+94 11 2 123 456</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={16} className="mr-2" />
                    <span>info@naita.gov.lk</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>Colombo, Sri Lanka</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-blue-200 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="block text-blue-200 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="block text-blue-200 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-blue-800 mt-8 pt-4 text-center text-sm text-blue-200">
              <p>&copy; 2026 National Apprentice & Industrial Training Authority. All rights reserved.</p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;