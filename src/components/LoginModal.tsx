import React, { useState } from 'react';
    import { X, Lock, User } from 'lucide-react';

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
            setError('Invalid username or password');
          }
          setIsLoading(false);
        }, 1000);
      };

      if (!isOpen) return null;

      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold text-blue-900">Data Entry Login</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                aria-label="Close login modal"
              >
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter username"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter password"
                    required
                  />
                </div>
              </div>
              
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    'Login'
                  )}
                </button>
              </div>
              
              <div className="mt-4 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                <p><strong>Demo Credentials:</strong></p>
                <p>Username: admin</p>
                <p>Password: admin123</p>
              </div>
            </form>
          </div>
        </div>
      );
    };

    export default LoginModal;