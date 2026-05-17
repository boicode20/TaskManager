import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { chartDataByPeriod } from '../../utils/chartData';
import { doughnutChartOptions } from '../../utils/chartOptions';

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * DoughnutChart Component
 * Displays task status distribution as a doughnut chart
 * Supports Daily, Weekly, and Monthly views
 */
const DoughnutChart = () => {
  const [period, setPeriod] = useState('daily');

  // Get data based on selected period
  const chartData = chartDataByPeriod.doughnut[period];

  return (
    <div className="doughnut-chart-container bg-white rounded-lg shadow-md p-6 w-full h-full flex flex-col">
      {/* Header with Title and Period Selector */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Task Status Distribution
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {period.charAt(0).toUpperCase() + period.slice(1)} Overview
          </p>
        </div>

        {/* Period Selector Buttons */}
        <div className="flex gap-2">
          {['daily', 'weekly', 'monthly'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-2 rounded-[40px] font-medium transition-all duration-300 text-sm text-[.6rem]  ${
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
      <div className="chart-wrapper flex-1 flex items-center justify-center">
        <Doughnut
          data={chartData}
          options={doughnutChartOptions}
          height={200}
        />
      </div>

     
    </div>
  );
};

export default DoughnutChart;
