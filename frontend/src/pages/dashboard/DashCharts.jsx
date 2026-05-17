import React from 'react';
import DoughnutChart from '../../components/Charts/DoughnutChart';
import BarChart from '../../components/Charts/BarChart';

/**
 * DashCharts Component
 * Displays responsive Doughnut and Bar charts for task analytics
 * Shows Daily, Weekly, and Monthly views for task status and progress
 */
const DashCharts = ({ role }) => {
  return (
    <div className="DashCharts w-full h-auto max:h-150 grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 px-4">
      {/* Doughnut Chart - Task Status Distribution */}
      <div className="doughnut-wrapper h-80 lg:h-full">
        <DoughnutChart />
      </div>

      {/* Bar Chart - Task Progress Over Time */}
      <div className="bar-wrapper h-80 lg:h-full">
        <BarChart />
      </div>
    </div>
  );
};

export default DashCharts;
