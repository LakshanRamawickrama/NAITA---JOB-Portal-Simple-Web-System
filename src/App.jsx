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
                showBackButton={currentPage === 'home'}
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

            <footer className="bg-primary text-white py-4 border-t-4 border-yellow-500 mt-auto">
                <div className="container mx-auto px-4 text-center">
                    <div className="mb-2">
                        <a href="https://www.naita.gov.lk/" target="_blank" rel="noopener noreferrer" className="font-bold text-white text-lg tracking-wider hover:text-yellow-500 transition-colors">
                            NAITA
                        </a>
                    </div>
                    <p className="text-sm font-medium text-red-100">National Apprentice and Industrial Training Authority</p>
                    <p className="text-xs mt-2 text-red-200">&copy; {new Date().getFullYear()} Information Systems Division. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
