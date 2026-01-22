import React, { useState } from 'react';
    import Header from '../components/Header';
    import StudentSearch from '../components/StudentSearch';
    import LoginModal from '../components/LoginModal';
    import DataImport from '../components/DataImport';
    import Footer from '../components/Footer';
    import { LogIn, GraduationCap } from 'lucide-react';

    export default function Home() {
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [showLoginModal, setShowLoginModal] = useState(false);

      const handleLogin = () => {
        setIsLoggedIn(true);
      };

      const handleLogout = () => {
        setIsLoggedIn(false);
      };

      return (
        <div className="min-h-screen bg-gray-50">
          <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          
          <main className="container mx-auto px-4 py-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <GraduationCap className="w-12 h-12 text-blue-600 mr-3" />
                <h1 className="text-3xl font-bold text-blue-900">
                  Student Data Management System
                </h1>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Search for student information and manage training records efficiently. 
                Data entry officers can login to import and manage student data.
              </p>
            </div>

            {!isLoggedIn && (
              <div className="mb-8 text-center">
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 inline-flex items-center"
                >
                  <LogIn size={20} className="mr-2" />
                  Data Entry Login
                </button>
              </div>
            )}

            <div className="space-y-8">
              <StudentSearch />
              
              {isLoggedIn && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h2 className="text-xl font-bold text-blue-900 mb-2">Data Entry Portal</h2>
                  <p className="text-blue-700">
                    Welcome! You can now import student data files and manage records.
                  </p>
                </div>
              )}
              
              {isLoggedIn && <DataImport />}
            </div>
          </main>

          <Footer />
          
          <LoginModal
            isOpen={showLoginModal}
            onClose={() => setShowLoginModal(false)}
            onLogin={handleLogin}
          />
        </div>
      );
    }