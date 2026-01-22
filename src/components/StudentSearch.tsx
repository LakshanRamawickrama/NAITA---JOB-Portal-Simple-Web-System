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
        return 'text-green-700 bg-green-100 border border-green-200';
      case 'In Progress':
        return 'text-yellow-700 bg-yellow-100 border border-yellow-200';
      default:
        return 'text-red-700 bg-red-100 border border-red-200';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <div className="bg-red-100 p-2 rounded-lg mr-3">
            <Search className="w-6 h-6 text-[#8B0000]" />
          </div>
          <h2 className="text-2xl font-bold text-[#8B0000]">
            Search Student Information
          </h2>
        </div>
        <p className="text-gray-600 ml-11">
          Enter the student's NIC number to retrieve their training records and status
        </p>
      </div>
      
      <div className="mb-8">
        <label htmlFor="nic-search" className="block text-sm font-semibold text-gray-700 mb-3">
          Student NIC Number
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="nic-search"
              type="text"
              value={nicNumber}
              onChange={(e) => setNicNumber(e.target.value)}
              placeholder="Enter NIC Number (e.g., 199512345678)"
              className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent transition-all duration-300"
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <button
            onClick={handleSearch}
            disabled={isSearching || !nicNumber.trim()}
            className="bg-[#8B0000] hover:bg-[#6B0000] disabled:bg-gray-400 text-white px-8 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-300 font-medium flex items-center justify-center shadow-md hover:shadow-lg min-w-[140px]"
          >
            {isSearching ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Search size={20} className="mr-2" />
                Search Student
              </>
            )}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2 ml-1">
          Enter the 12-digit NIC number without spaces or special characters
        </p>
      </div>

      {notFound && (
        <div className="mb-8 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center">
            <XCircle className="w-6 h-6 text-red-500 mr-3" />
            <div>
              <h3 className="font-semibold text-red-700">Student Not Found</h3>
              <p className="text-red-600 mt-1">
                No student record found with NIC number: <span className="font-bold">{nicNumber}</span>
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Please verify the NIC number and try again. If the issue persists, contact the administrator.
              </p>
            </div>
          </div>
        </div>
      )}

      {searchResult && (
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] p-4">
            <h3 className="text-lg font-bold text-white flex items-center">
              <User className="mr-3" size={22} />
              Student Details Found
            </h3>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <div className="flex items-center mb-2">
                  <User className="w-5 h-5 text-[#8B0000] mr-2" />
                  <span className="font-semibold text-gray-700">Student Name</span>
                </div>
                <p className="text-lg font-bold text-gray-900">{searchResult.name}</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <div className="flex items-center mb-2">
                  <div className="w-5 h-5 bg-red-100 rounded flex items-center justify-center mr-2">
                    <span className="text-xs font-bold text-[#8B0000]">ID</span>
                  </div>
                  <span className="font-semibold text-gray-700">NIC Number</span>
                </div>
                <p className="text-lg font-bold text-gray-900">{searchResult.nic}</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-red-50">
                    <th className="px-6 py-3 text-left font-semibold text-[#8B0000] border-b border-gray-200">Trade</th>
                    <th className="px-6 py-3 text-left font-semibold text-[#8B0000] border-b border-gray-200">NVQ Level</th>
                    <th className="px-6 py-3 text-left font-semibold text-[#8B0000] border-b border-gray-200">Status</th>
                    <th className="px-6 py-3 text-left font-semibold text-[#8B0000] border-b border-gray-200">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-200">
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="font-medium">{searchResult.trade}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-100 text-blue-800">
                        {searchResult.nvqLevel}
                      </span>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200">
                      <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(searchResult.completionStatus)}`}>
                        {getStatusIcon(searchResult.completionStatus)}
                        <span className="ml-2">{searchResult.completionStatus}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                        <span>{searchResult.date}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded mr-3">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-yellow-800">
                    This information is for official use only. Please verify the details with the student's physical records if required for certification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentSearch;