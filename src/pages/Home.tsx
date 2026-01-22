import React, { useState } from 'react';
import Header from '../components/Header';
import StudentSearch from '../components/StudentSearch';
import LoginModal from '../components/LoginModal';
import DataImport from '../components/DataImport';
import Footer from '../components/Footer';
import { LogIn, GraduationCap, Users, BookOpen, Award, Search, Upload } from 'lucide-react';

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
      
      {/* Hero Section with NAITA Red Theme */}
      <div className="bg-gradient-to-r from-[#8B0000] via-[#A52A2A] to-[#8B0000] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-3/5 mb-10 lg:mb-0">
              <div className="inline-block bg-yellow-500 text-[#8B0000] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                OFFICIAL PORTAL
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Student Data Management System
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                Manage student records, track training progress, and maintain comprehensive data 
                for the National Apprentice and Industrial Training Authority of Sri Lanka.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {!isLoggedIn ? (
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="bg-white text-[#8B0000] hover:bg-gray-100 px-8 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white inline-flex items-center font-bold text-lg shadow-lg hover:shadow-xl"
                  >
                    <LogIn size={22} className="mr-3" />
                    Data Entry Officer Login
                  </button>
                ) : (
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <p className="text-[#8B0000] font-bold">Welcome, Data Entry Officer!</p>
                    <p className="text-gray-600 text-sm">You can now access all data management features.</p>
                  </div>
                )}
                
              </div>
            </div>
            <div className="lg:w-2/5 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-yellow-400 rounded-full opacity-20 blur-lg"></div>
                <GraduationCap className="w-64 h-64 text-white relative z-10" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Design */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,176C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center border-l-4 border-[#8B0000] transform hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-red-50 p-3 rounded-lg mr-4">
              <Users className="w-8 h-8 text-[#8B0000]" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">50,000+</h3>
              <p className="text-gray-600 font-medium">Students Trained</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center border-l-4 border-[#8B0000] transform hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-red-50 p-3 rounded-lg mr-4">
              <BookOpen className="w-8 h-8 text-[#8B0000]" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">100+</h3>
              <p className="text-gray-600 font-medium">Training Programs</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center border-l-4 border-[#8B0000] transform hover:-translate-y-1 transition-transform duration-300">
            <div className="bg-red-50 p-3 rounded-lg mr-4">
              <Award className="w-8 h-8 text-[#8B0000]" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">25</h3>
              <p className="text-gray-600 font-medium">NVQ Levels</p>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          {/* Student Search Section */}
          <div className="relative">
            <div className="absolute -top-3 left-0">
              <div className="flex items-center bg-[#8B0000] text-white px-4 py-2 rounded-t-lg">
                <Search size={20} className="mr-2" />
                <span className="font-bold">STUDENT SEARCH</span>
              </div>
            </div>
            <div className="border-2 border-[#8B0000] rounded-lg pt-8">
              <StudentSearch />
            </div>
          </div>
          
          {isLoggedIn && (
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#8B0000] p-2 rounded-lg mr-3">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[#8B0000]">Data Entry Portal - Access Granted</h2>
              </div>
              <p className="text-gray-700 text-lg mb-4">
                Welcome to the Data Management System. You now have full access to import student data files 
                and manage training records securely.
              </p>
              <div className="bg-white p-4 rounded-lg border border-red-100">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-[#8B0000]">Note:</span> You can import Excel and PDF files containing student data. 
                  All imports are logged and can be tracked in the Recent Imports section.
                </p>
              </div>
            </div>
          )}
          
          {isLoggedIn && (
            <div className="relative">
              <div className="absolute -top-3 left-0">
                <div className="flex items-center bg-[#8B0000] text-white px-4 py-2 rounded-t-lg">
                  <Upload size={20} className="mr-2" />
                  <span className="font-bold">DATA IMPORT</span>
                </div>
              </div>
              <div className="border-2 border-[#8B0000] rounded-lg pt-8">
                <DataImport />
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Features Section for Non-Logged In Users */}
      {!isLoggedIn && (
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#8B0000] mb-4">System Features</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Our comprehensive data management system provides efficient tools for managing student records
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Search className="w-7 h-7 text-[#8B0000]" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">Student Search</h3>
                <p className="text-gray-600">
                  Quickly search for student records using NIC numbers and view comprehensive 
                  training history, NVQ levels, and completion status.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Upload className="w-7 h-7 text-[#8B0000]" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">Data Import</h3>
                <p className="text-gray-600">
                  Securely import bulk student data from Excel and PDF files with validation 
                  and error checking. Track all imports with detailed history.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-[#8B0000]" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">Progress Tracking</h3>
                <p className="text-gray-600">
                  Monitor student progress through various NVQ levels and training programs.
                  Generate reports and analytics for better decision making.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}