import { useState, type FormEvent } from 'react';
import { X, Lock, User } from 'lucide-react';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLogin: () => void;
}

export function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            setError('');
            onLogin();
            onClose();
        } else {
            setError('Invalid username or password. Try admin/admin');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 relative scale-100 animate-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition p-1 hover:bg-gray-100 rounded-full"
                >
                    <X size={20} />
                </button>

                <div className="text-center mb-6">
                    <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary ring-4 ring-red-50">
                        <Lock size={28} />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">Staff Portal Access</h2>
                    <p className="text-sm text-gray-500 mt-1">Please authenticate to continue.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-xs font-semibold text-center border border-red-100 flex items-center justify-center gap-2">
                            <AlertIcon /> {error}
                        </div>
                    )}

                    <div className="space-y-1">
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">Username</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-100 focus:border-primary transition outline-none text-sm"
                                placeholder="Enter username"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-100 focus:border-primary transition outline-none text-sm"
                                placeholder="Enter password"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-red-800 text-white font-bold py-3 rounded-lg transition shadow-lg shadow-red-100 mt-2 text-sm uppercase tracking-wide"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 pt-4 border-t border-gray-100 text-center text-[10px] text-gray-400 uppercase tracking-widest">
                    Secured by NAITA IT System
                </div>
            </div>
        </div>
    );
}

function AlertIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
    );
}
