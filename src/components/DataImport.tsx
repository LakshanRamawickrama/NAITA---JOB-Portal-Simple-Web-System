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
            return 'text-green-700 bg-green-100';
          case 'Processing':
            return 'text-yellow-700 bg-yellow-100';
          default:
            return 'text-red-700 bg-red-100';
        }
      };

      return (
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <Upload className="mr-3" />
              Data Import
            </h2>
            
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-lg font-medium text-gray-900 mb-2">
                Upload Student Data File
              </p>
              <p className="text-gray-600 mb-4">
                Drag and drop your PDF or Excel file here, or click to browse
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 inline-block"
              >
                Choose File
              </label>
              <p className="text-sm text-gray-500 mt-2">
                Supported formats: PDF, Excel (.xlsx, .xls)
              </p>
            </div>

            {uploadedFile && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium">{uploadedFile.name}</span>
                    <span className="text-gray-500 ml-2">
                      ({(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                  </div>
                  <button
                    onClick={handleUpload}
                    disabled={isUploading}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-300 flex items-center"
                  >
                    {isUploading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Upload size={16} className="mr-2" />
                        Import Data
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
              <Download className="mr-2" />
              Recent Imports
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 px-4 py-2 text-left text-blue-900 font-semibold">File Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-blue-900 font-semibold">Upload Date</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-blue-900 font-semibold">Records</th>
                    <th className="border border-gray-300 px-4 py-2 text-left text-blue-900 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockImportHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-blue-600" />
                        {item.fileName}
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-gray-600" />
                          {item.uploadDate}
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-gray-600" />
                          {item.recordCount}
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      );
    };

    export default DataImport;