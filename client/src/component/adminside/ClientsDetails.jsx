import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const TableComponent = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [sortByDate, setSortByDate] = useState(false);

    const handleGenerateReport = () => {
        // Handle report generation logic here
        console.log('Generating report...');
    };

    const handleSortByDate = () => {
        // Toggle sorting state
        setSortByDate(!sortByDate);
        // Implement sorting logic based on the sortByDate state
        console.log('Sorting by date...');
    };

    return (
        <div className="container mx-auto mt-20">
            <div className="flex justify-between mb-4">
                <div>
                    <button
                        className="px-4 py-2 font-semibold bg-green-500 text-white rounded-lg hover:bg-green-600"
                        onClick={handleGenerateReport}
                    >
                        Generate Report
                    </button>
                </div>
                <div>
                    <FaCalendarAlt
                        className="flex mr-top-3 cursor-pointer"
                        onClick={() => console.log('Calendar clicked')}
                    />
                </div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 border border-gray-300 rounded-lg w-64"
                    />
                    <button className="absolute inset-y-0 right-0 px-4 font-semibold bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">
                        Search
                    </button>

                </div>
            </div>

            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Column 1</th>
                        <th className="px-4 py-2">Column 2</th>
                        <th className="px-4 py-2">Column 3</th>
                        <th className="px-4 py-2">Column 4</th>
                        <th className="px-4 py-2">Column 5</th>
                        <th className="px-4 py-2">Column 6</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Populate table rows with data */}
                    <tr>
                        <td className="border px-4 py-2">Data 1</td>
                        <td className="border px-4 py-2">Data 2</td>
                        <td className="border px-4 py-2">Data 3</td>
                        <td className="border px-4 py-2">Data 4</td>
                        <td className="border px-4 py-2">Data 5</td>
                        <td className="border px-4 py-2">Data 6</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;