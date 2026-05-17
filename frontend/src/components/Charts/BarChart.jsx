import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { chartDataByPeriod } from '../../utils/chartData';
import { barChartOptions } from '../../utils/chartOptions';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

/**
 * BarChart Component
 * Displays task progress and status over different time periods
 * Supports Daily, Weekly, and Monthly views
 */
const BarChart = () => {
  const [period, setPeriod] = useState('daily');

  // Get data based on selected period
  const chartData = chartDataByPeriod.bar[period];

  // Get period label
  const getPeriodLabel = () => {
    const periodLabels = {
      daily: 'Daily Task Progress (This Week)',
      weekly: 'Weekly Task Progress (This Month)',
      monthly: 'Monthly Task Progress (This Year)',
    };
    return periodLabels[period];
  };

  return (
    <div className="bar-chart-container bg-white rounded-lg shadow-md p-6 w-full h-full flex flex-col">
      {/* Header with Title and Period Selector */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-1xl font-semibold text-[#424242]">
            Task Progress
          </h2>
          <p className="text-sm text-gray-500 mt-1">{getPeriodLabel()}</p>
        </div>

        {/* Period Selector Buttons */}
        <div className="flex gap-2">
          {['daily', 'weekly', 'monthly'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-2 rounded-[40px] font-medium transition-all duration-300 text-[.6rem] ${
                period === p
                  ? 'bg-(--primary-color) text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Container */}
      <div className="chart-wrapper flex-1 flex items-center justify-center min-h-0">
        <div className="w-full h-full flex items-center justify-center">
          <Bar
            data={chartData}
            options={barChartOptions}
            height={200}
          />
        </div>
      </div>

      
    </div>
  );
};

export default BarChart;
