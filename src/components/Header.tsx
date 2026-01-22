import React from 'react';
    import { LogOut } from 'lucide-react';

    interface HeaderProps {
      isLoggedIn: boolean;
      onLogout: () => void;
    }

    const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLogout }) => {
      return (
        <header className="bg-blue-900 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=60&h=60&fit=crop&crop=center" 
                  alt="NAITA Logo" 
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h1 className="text-xl font-bold">NAITA</h1>
                  <p className="text-sm text-blue-200">National Apprentice & Industrial Training Authority</p>
                </div>
              </div>
              {isLoggedIn && (
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 bg-blue-800 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
                  aria-label="Logout"
                >
                  <LogOut size={16} />
                  <span>Logout</span>
                </button>
              )}
            </div>
          </div>
        </header>
      );
    };

    export default Header;