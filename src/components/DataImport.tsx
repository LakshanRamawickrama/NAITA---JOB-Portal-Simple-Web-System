import React, { useState } from 'react';
import { Upload, FileText, Download, Calendar, Users } from 'lucide-react';

interface ImportedData {
  id: string;
  fileName: string;
  uploadDate: string;
  recordCount: number;
  status: 'Success' | 'Processing' | 'Failed';
}

const mockImportHistory: ImportedData[] = [
  {
    id: '1',
    fileName: 'student_data_march_2024.xlsx',
    uploadDate: '2024-03-15',
    recordCount: 150,
    status: 'Success'
  },
  {
    id: '2',
    fileName: 'nvq_completions_february.pdf',
    uploadDate: '2024-02-28',
    recordCount: 89,
    status: 'Success'
  },
  {
    id: '3',
    fileName: 'new_registrations_march.xlsx',
    uploadDate: '2024-03-10',
    recordCount: 45,
    status: 'Processing'
  },
  {
    id: '4',
    fileName: 'apprentice_records.xlsx',
    uploadDate: '2024-03-05',
    recordCount: 200,
    status: 'Failed'
  }
];

const DataImport: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.includes('pdf') || file.type.includes('excel') || file.type.includes('spreadsheet')) {
        setUploadedFile(file);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!uploadedFile) return;
    
    setIsUploading(true);
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      setUploadedFile(null);
      // In real app, refresh import history
    }, 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Success':
        return 'text-green-700 bg-green-100 border border-green-200';
      case 'Processing':
        return 'text-yellow-700 bg-yellow-100 border border-yellow-200';
      default:
        return 'text-red-700 bg-red-100 border border-red-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Success':
        return '✅';
      case 'Processing':
        return '⏳';
      default:
        return '❌';
    }
  };

  return (
    <div className="space-y-8 p-6">
      <section className="bg-white rounded-lg">
        <h2 className="text-xl font-bold text-[#8B0000] mb-6 flex items-center">
          <Upload className="mr-3" size={24} />
          Upload Student Data File
        </h2>
        
        <div
          className={`border-2 ${dragActive ? 'border-[#8B0000]' : 'border-dashed border-gray-300'} rounded-lg p-8 text-center transition-all duration-300 ${
            dragActive 
              ? 'bg-red-50 border-[#8B0000]' 
              : 'bg-gray-50 hover:border-gray-400 hover:bg-gray-100'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <FileText className="h-8 w-8 text-[#8B0000]" />
          </div>
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Drag & Drop your file here
          </p>
          <p className="text-gray-600 mb-6">
            Upload PDF or Excel files containing student data
          </p>
          <input
            type="file"
            accept=".pdf,.xlsx,.xls"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="bg-[#8B0000] hover:bg-[#6B0000] text-white px-8 py-3 rounded-lg cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-300 font-medium inline-flex items-center shadow-md hover:shadow-lg"
          >
            <Upload size={18} className="mr-2" />
            Choose File
          </label>
          <p className="text-sm text-gray-500 mt-4">
            Supported formats: PDF, Excel (.xlsx, .xls) | Max size: 10MB
          </p>
        </div>

        {uploadedFile && (
          <div className="mt-6 p-6 bg-gradient-to-r from-red-50 to-white rounded-lg border border-red-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="bg-red-100 p-2 rounded-lg mr-3">
                  <FileText className="h-6 w-6 text-[#8B0000]" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900 block">{uploadedFile.name}</span>
                  <span className="text-gray-500 text-sm">
                    Size: {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                </div>
              </div>
              <button
                onClick={handleUpload}
                disabled={isUploading}
                className="bg-[#8B0000] hover:bg-[#6B0000] disabled:bg-gray-400 text-white px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-300 font-medium inline-flex items-center shadow-md hover:shadow-lg"
              >
                {isUploading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Processing Upload...
                  </>
                ) : (
                  <>
                    <Upload size={18} className="mr-2" />
                    Import Data
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="bg-white rounded-lg">
        <h3 className="text-xl font-bold text-[#8B0000] mb-6 flex items-center">
          <Download className="mr-3" size={24} />
          Recent Import History
        </h3>
        
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#8B0000] text-white">
                <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider">File Name</th>
                <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider">Upload Date</th>
                <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider">Records</th>
                <th className="px-6 py-4 text-left font-semibold text-sm uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockImportHistory.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="bg-red-50 p-2 rounded mr-3">
                        <FileText className="w-4 h-4 text-[#8B0000]" />
                      </div>
                      <span className="font-medium text-gray-900">{item.fileName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-gray-700">{item.uploadDate}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="font-medium text-gray-900">{item.recordCount.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                      <span className="mr-2">{getStatusIcon(item.status)}</span>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
          <div>
            Showing {mockImportHistory.length} recent imports
          </div>
          <button className="text-[#8B0000] hover:text-[#6B0000] font-medium flex items-center">
            View All History
            <Download size={16} className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default DataImport;