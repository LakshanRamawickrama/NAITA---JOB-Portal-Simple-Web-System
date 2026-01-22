import { useState } from 'react';
import { Header } from './components/Header';
import { LoginModal } from './components/LoginModal';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');

    const handleLogin = () => {
        setIsAuthenticated(true);
        setCurrentPage('dashboard');
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setCurrentPage('home');
    };

    const navigateToDashboard = () => {
        if (isAuthenticated) {
            setCurrentPage('dashboard');
        }
    };

    return (
        <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50">
            <Header
                isAuthenticated={isAuthenticated}
                onLoginClick={() => setShowLoginModal(true)}
                onLogoutClick={handleLogout}
                onDashboardClick={navigateToDashboard}
            />

            <div className="flex-grow flex flex-col">
                {currentPage === 'home' && <Home />}
                {currentPage === 'dashboard' && isAuthenticated && <Dashboard />}
                {currentPage === 'dashboard' && !isAuthenticated && (
                    <div className="flex-grow flex items-center justify-center">
                        <p>Access Denied. Please login.</p>
                    </div>
                )}
            </div>

            <LoginModal
                isOpen={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                onLogin={handleLogin}
            />

            <footer className="bg-gray-900 text-gray-400 py-8 border-t-4 border-yellow-500 mt-auto">
                <div className="container mx-auto px-4 text-center">
                    <div className="mb-4">
                        <span className="font-bold text-white text-lg tracking-wider">NAITA</span>
                    </div>
                    <p className="text-sm font-medium text-gray-500">National Apprentice and Industrial Training Authority</p>
                    <p className="text-xs mt-4 text-gray-600">&copy; {new Date().getFullYear()} Information Systems Division. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
