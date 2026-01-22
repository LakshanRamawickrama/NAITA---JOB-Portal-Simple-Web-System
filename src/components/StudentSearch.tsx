import React, { useState } from 'react';
    import { Search, User, Award, Calendar, CheckCircle, XCircle } from 'lucide-react';

    interface Student {
      name: string;
      nic: string;
      trade: string;
      nvqLevel: string;
      completionStatus: 'Completed' | 'In Progress' | 'Not Started';
      date: string;
    }

    const mockStudents: Student[] = [
      {
        name: 'Kasun Perera',
        nic: '199512345678',
        trade: 'Electrical Technology',
        nvqLevel: 'Level 4',
        completionStatus: 'Completed',
        date: '2024-03-15'
      },
      {
        name: 'Nimali Silva',
        nic: '199687654321',
        trade: 'Information Technology',
        nvqLevel: 'Level 5',
        completionStatus: 'In Progress',
        date: '2024-01-20'
      },
      {
        name: 'Chaminda Fernando',
        nic: '199798765432',
        trade: 'Mechanical Technology',
        nvqLevel: 'Level 3',
        completionStatus: 'Completed',
        date: '2024-02-10'
      }
    ];

    const StudentSearch: React.FC = () => {
      const [nicNumber, setNicNumber] = useState('');
      const [searchResult, setSearchResult] = useState<Student | null>(null);
      const [isSearching, setIsSearching] = useState(false);
      const [notFound, setNotFound] = useState(false);

      const handleSearch = async () => {
        if (!nicNumber.trim()) return;
        
        setIsSearching(true);
        setNotFound(false);
        
        // Simulate API call
        setTimeout(() => {
          const student = mockStudents.find(s => s.nic === nicNumber.trim());
          setSearchResult(student || null);
          setNotFound(!student);
          setIsSearching(false);
        }, 1000);
      };

      const getStatusIcon = (status: string) => {
        switch (status) {
          case 'Completed':
            return <CheckCircle className="w-5 h-5 text-green-600" />;
          case 'In Progress':
            return <div className="w-5 h-5 rounded-full border-2 border-yellow-500 border-t-transparent animate-spin" />;
          default:
            return <XCircle className="w-5 h-5 text-red-600" />;
        }
      };

      const getStatusColor = (status: string) => {
        switch (status) {
          case 'Completed':
            return 'text-green-700 bg-green-100';
          case 'In Progress':
            return 'text-yellow-700 bg-yellow-100';
          default:
            return 'text-red-700 bg-red-100';
        }
      };

      return (
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
            <Search className="mr-3" />
            Student Information Search
          </h2>
          
          <div className="mb-6">
            <label htmlFor="nic-search" className="block text-sm font-medium text-gray-700 mb-2">
              Enter Student NIC Number
            </label>
            <div className="flex gap-3">
              <input
                id="nic-search"
                type="text"
                value={nicNumber}
                onChange={(e) => setNicNumber(e.target.value)}
                placeholder="e.g., 199512345678"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button
                onClick={handleSearch}
                disabled={isSearching || !nicNumber.trim()}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center"
              >
                {isSearching ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Search size={16} className="mr-2" />
                    Search
                  </>
                )}
              </button>
            </div>
          </div>

          {notFound && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-700">No student found with NIC number: {nicNumber}</p>
            </div>
          )}

          {searchResult && (
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <User className="mr-2" />
                Student Details
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="border border-gray-300 px-4 py-2 text-left text-blue-900 font-semibold">Name</th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-blue-900 font-semibold">NIC</th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-blue-900 font-semibold">Trade</th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-blue-900 font-semibold">NVQ Level</th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-blue-900 font-semibold">Status</th>
                      <th className="border border-gray-300 px-4 py-2 text-left text-blue-900 font-semibold">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">{searchResult.name}</td>
                      <td className="border border-gray-300 px-4 py-3">{searchResult.nic}</td>
                      <td className="border border-gray-300 px-4 py-3">{searchResult.trade}</td>
                      <td className="border border-gray-300 px-4 py-3 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-blue-600" />
                        {searchResult.nvqLevel}
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(searchResult.completionStatus)}`}>
                          {getStatusIcon(searchResult.completionStatus)}
                          <span className="ml-2">{searchResult.completionStatus}</span>
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-600" />
                        {searchResult.date}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>
      );
    };

    export default StudentSearch;