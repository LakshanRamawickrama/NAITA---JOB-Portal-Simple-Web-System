import React from 'react';
import { LogOut, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <header className="bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-[#8B0000] text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone size={14} className="mr-1" />
                <span>+94 11 2 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail size={14} className="mr-1" />
                <span>info@naita.gov.lk</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-200">Sitemap</a>
              <a href="#" className="hover:text-gray-200">Contact</a>
              <a href="#" className="hover:text-gray-200">FAQ</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-3">
              <img 
                src="https://naita.gov.lk/images/naita-logo.png" 
                alt="NAITA Logo" 
                className="h-16"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=64&h=64&fit=crop&crop=center";
                  e.currentTarget.className = "h-12 w-12 rounded-full";
                }}
              />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-[#8B0000]">
                  National Apprentice and Industrial Training Authority
                </h1>
                <p className="text-sm text-gray-600">
                  Ministry of Skills Development and Vocational Training
                </p>
              </div>
            </div>
          </div>
          
          {isLoggedIn && (
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 bg-[#8B0000] hover:bg-[#6B0000] text-white px-4 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
              aria-label="Logout"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#8B0000]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <a href="#" className="text-white hover:bg-[#6B0000] px-4 py-3 transition-colors font-medium">
              Home
            </a>
            <a href="#" className="text-white hover:bg-[#6B0000] px-4 py-3 transition-colors font-medium">
              About Us
            </a>
            <a href="#" className="text-white hover:bg-[#6B0000] px-4 py-3 transition-colors font-medium">
              Services
            </a>
            <a href="#" className="text-white hover:bg-[#6B0000] px-4 py-3 transition-colors font-medium">
              Downloads
            </a>
            <a href="#" className="text-white hover:bg-[#6B0000] px-4 py-3 transition-colors font-medium">
              Tenders
            </a>
            <a href="#" className="text-white hover:bg-[#6B0000] px-4 py-3 transition-colors font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;