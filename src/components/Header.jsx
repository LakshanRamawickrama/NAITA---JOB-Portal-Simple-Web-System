import { LogIn, LogOut } from 'lucide-react';

export function Header({ isAuthenticated, onLoginClick, onLogoutClick, onDashboardClick }) {
    return (
        <header className="bg-primary text-white shadow-md border-b-4 border-yellow-500">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.location.href = "/"}>
                    {/* Placeholder Logo */}
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold text-2xl border-2 border-yellow-500 shadow-sm">
                        N
                    </div>
                    <div className="hidden sm:block">
                        <h1 className="text-xl font-bold font-sans uppercase tracking-wide">NAITA</h1>
                        <p className="text-xs text-yellow-100 font-light tracking-wider">National Apprentice and Industrial Training Authority</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    {isAuthenticated && (
                        <button
                            onClick={onDashboardClick}
                            className="text-sm font-medium hover:text-yellow-200 transition underline underline-offset-4"
                        >
                            Dashboard
                        </button>
                    )}

                    {isAuthenticated ? (
                        <button
                            onClick={onLogoutClick}
                            className="flex items-center space-x-2 text-sm bg-red-900/50 hover:bg-red-900 border border-red-700 px-4 py-2 rounded transition shadow-sm"
                        >
                            <LogOut size={16} />
                            <span>Logout</span>
                        </button>
                    ) : (
                        <button
                            onClick={onLoginClick}
                            className="flex items-center space-x-2 text-sm bg-white text-primary hover:bg-gray-100 border border-gray-200 px-4 py-2 rounded font-semibold transition shadow-sm"
                        >
                            <LogIn size={16} />
                            <span>Staff Login</span>
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}
