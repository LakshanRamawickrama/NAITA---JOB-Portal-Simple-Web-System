import React, { useState } from 'react';
import { X, Lock, User, Shield } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Mock authentication
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        onLogin();
        onClose();
        setUsername('');
        setPassword('');
      } else {
        setError('Invalid username or password. Please try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-lg mr-3">
                <Shield className="w-6 h-6 text-[#8B0000]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Data Entry Login</h2>
                <p className="text-red-100 text-sm">Secure Access Portal</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white hover:bg-opacity-20 p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close login modal"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        
        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6">
          {error && (
            <div className="mb-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <div className="bg-red-100 p-2 rounded mr-3">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            </div>
          )}
          
          <div className="mb-6">
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent transition-all duration-300"
                placeholder="Enter your username"
                required
                disabled={isLoading}
              />
            </div>
          </div>
          
          <div className="mb-8">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent transition-all duration-300"
                placeholder="Enter your password"
                required
                disabled={isLoading}
              />
            </div>
            <div className="flex justify-end mt-2">
              <a href="#" className="text-sm text-[#8B0000] hover:text-[#6B0000] font-medium">
                Forgot Password?
              </a>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium transition-all duration-300 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] hover:from-[#6B0000] hover:to-[#8B0000] disabled:from-gray-400 disabled:to-gray-500 text-white px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-300 font-bold shadow-md hover:shadow-lg flex items-center justify-center"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Lock size={18} className="mr-2" />
                  Login to System
                </>
              )}
            </button>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                <Shield size={16} className="mr-2 text-[#8B0000]" />
                Demo Credentials
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 font-medium">Username:</p>
                  <p className="font-bold text-[#8B0000]">admin</p>
                </div>
                <div>
                  <p className="text-gray-600 font-medium">Password:</p>
                  <p className="font-bold text-[#8B0000]">admin123</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Note: This is a demonstration system. For production use, please contact the system administrator for proper credentials.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;