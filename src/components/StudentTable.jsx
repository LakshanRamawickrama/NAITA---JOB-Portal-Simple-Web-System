export function StudentTable({ students }) {
    if (students.length === 0) {
        return (
            <div className="text-center py-12 bg-white rounded-lg border border-dashed border-gray-300">
                <p className="text-gray-500">No student details found matching your search.</p>
            </div>
        );
    }

    return (
        <div className="overflow-hidden bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-600">
                    <thead className="bg-gray-50 uppercase text-xs font-bold text-gray-500 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 tracking-wider">NIC No</th>
                            <th className="px-6 py-4 tracking-wider">Full Name</th>
                            <th className="px-6 py-4 tracking-wider">Trade / Course</th>
                            <th className="px-6 py-4 tracking-wider text-center">NVQ Level</th>
                            <th className="px-6 py-4 tracking-wider">Date</th>
                            <th className="px-6 py-4 tracking-wider text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {students.map((student) => (
                            <tr key={student.id} className="hover:bg-blue-50/30 transition duration-150">
                                <td className="px-6 py-4 font-semibold text-gray-800 font-mono">{student.nic}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">{student.name}</td>
                                <td className="px-6 py-4 text-gray-700">{student.trade}</td>
                                <td className="px-6 py-4 text-center text-gray-700">
                                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded font-bold">
                                        {student.nvqLevel}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-500 whitespace-nowrap">{student.date}</td>
                                <td className="px-6 py-4 text-center">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${student.completionStatus === 'Completed' ? 'bg-green-100 text-green-700 border border-green-200' :
                                            student.completionStatus === 'Drop Out' ? 'bg-red-100 text-red-700 border border-red-200' :
                                                student.completionStatus === 'Following' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                                                    'bg-yellow-100 text-yellow-700 border border-yellow-200'
                                        }`}>
                                        {student.completionStatus}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
