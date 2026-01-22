import { useState } from 'react';
import { Upload, Check, FileSpreadsheet } from 'lucide-react';
import { StudentTable } from '../components/StudentTable';
import { MOCK_STUDENTS } from '../types';

export function Dashboard() {
    const [isUploading, setIsUploading] = useState(false);
    const [uploadStatus, setUploadStatus] = useState('idle');

    const handleFileUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setIsUploading(true);
            setUploadStatus('idle');
            // Simulate upload
            setTimeout(() => {
                setIsUploading(false);
                setUploadStatus('success');
            }, 2000);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 bg-gray-50 flex-grow">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Officer Dashboard</h2>
                    <p className="text-sm text-gray-500">Manage student data imports</p>
                </div>
                <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full border border-green-200 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    System Online
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Upload Section */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-4">
                        <h3 className="text-lg font-bold mb-4 text-gray-800 flex items-center gap-2 border-b pb-2">
                            <Upload size={20} className="text-primary" /> Import New Data
                        </h3>
                        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                            Select an Excel file (.xlsx) or PDF document to parse and import student records into the central database.
                        </p>

                        <label className={`
                   border-2 border-dashed rounded-xl h-48 flex flex-col items-center justify-center cursor-pointer transition duration-200 ease-in-out
                   ${isUploading ? 'bg-gray-50 border-gray-300 cursor-wait' : 'bg-gray-50/50 hover:bg-red-50/30 border-gray-300 hover:border-primary'}
                `}>
                            <input type="file" className="hidden" accept=".xlsx,.xls,.pdf" onChange={handleFileUpload} disabled={isUploading} />

                            {isUploading ? (
                                <div className="flex flex-col items-center animate-pulse">
                                    <Upload size={32} className="text-primary mb-3" />
                                    <span className="text-sm font-medium text-gray-700">Importing Data...</span>
                                    <span className="text-xs text-gray-400 mt-1">Please wait</span>
                                </div>
                            ) : (
                                <div className="group flex flex-col items-center">
                                    <div className="bg-white p-4 rounded-full shadow-sm mb-3 text-gray-400 group-hover:text-primary transition-colors border border-gray-100">
                                        <FileSpreadsheet size={28} />
                                    </div>
                                    <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors">Click to Upload</span>
                                    <span className="text-xs text-gray-400 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</span>
                                </div>
                            )}
                        </label>

                        {uploadStatus === 'success' && (
                            <div className="mt-4 p-4 bg-green-50 text-green-800 text-sm rounded-lg flex items-start gap-3 border border-green-100 animate-in fade-in slide-in-from-top-2">
                                <Check size={18} className="mt-0.5 shrink-0" />
                                <div>
                                    <span className="font-bold block">Import Successful</span>
                                    Data has been verified and added to the table.
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Recent Data Section */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 min-h-[500px]">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-800">Recent Uploads</h3>
                            <button className="text-sm text-primary hover:underline">View All History</button>
                        </div>

                        <div className="border border-gray-100 rounded-lg overflow-hidden">
                            <StudentTable students={uploadStatus === 'success' ? [...MOCK_STUDENTS, ...MOCK_STUDENTS] : MOCK_STUDENTS} />
                            {/* Just doubling mock data to show effect on success for demo */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
