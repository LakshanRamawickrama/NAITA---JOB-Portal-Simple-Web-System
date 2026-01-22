import { useState, type FormEvent } from 'react';
import { Search } from 'lucide-react';
import { StudentTable } from '../components/StudentTable';
import { MOCK_STUDENTS } from '../types';

export function Home() {
    const [searchNic, setSearchNic] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    // Exact match or partial? User said "after entering... a table... appears". Search usually implies exact but partial is friendlier for mock.
    // I will do Filter.
    const filteredStudents = searchNic.trim()
        ? MOCK_STUDENTS.filter(s => s.nic.toLowerCase().includes(searchNic.trim().toLowerCase()))
        : [];

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        if (!searchNic.trim()) return;
        setHasSearched(true);
    };

    return (
        <div className="flex flex-col flex-grow bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary to-red-900 text-white py-20 text-center relative overflow-hidden">
                {/* Decorative circle */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans tracking-tight drop-shadow-sm">
                        Student Verification Portal
                    </h2>
                    <p className="text-lg md:text-xl text-red-100 max-w-2xl mx-auto leading-relaxed">
                        National Apprentice and Industrial Training Authority
                    </p>
                </div>
            </div>

            {/* Search Section */}
            <div className="container mx-auto px-4 -mt-8 relative z-20">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl max-w-4xl mx-auto border border-gray-100">
                    <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                <Search size={22} />
                            </div>
                            <input
                                type="text"
                                value={searchNic}
                                onChange={(e) => setSearchNic(e.target.value)}
                                placeholder="Enter Student NIC Number (e.g., 981234567V)"
                                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg text-lg focus:ring-4 focus:ring-red-100 focus:border-red-400 transition outline-none text-gray-800 placeholder-gray-400"

                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-secondary hover:bg-gray-800 text-white font-bold py-3 md:py-4 px-10 rounded-lg shadow-md hover:shadow-lg transition transform active:scale-95 flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
                        >
                            Search
                        </button>
                    </form>
                    <p className="text-xs text-center text-gray-400 mt-4">
                        Enter the full NIC number to view course completion status and details.
                    </p>
                </div>
            </div>

            {/* Results Section */}
            <main className="container mx-auto px-4 py-12 flex-grow max-w-6xl">
                {hasSearched ? (
                    <div className="animate-fade-in-up">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-primary pl-4">
                                Verification Results
                            </h3>
                            <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                                {filteredStudents.length} Record(s) Found
                            </span>
                        </div>
                        <StudentTable students={filteredStudents} />
                    </div>
                ) : (
                    <div className="text-center py-16 opacity-60">
                        <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
                            <Search size={40} className="text-gray-400" />
                        </div>
                        <h4 className="text-xl font-medium text-gray-600 mb-2">Ready to Search</h4>
                        <p className="text-gray-500 max-w-md mx-auto">
                            Please enter a valid National Identity Card number in the search box above to access student records.
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
}
