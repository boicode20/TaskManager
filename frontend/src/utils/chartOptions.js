// Chart.js options configuration for responsive charts

export const doughnutChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        font: {
          size: 12,
          weight: '500',
        },
        padding: 15,
        usePointStyle: true,
      },
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: 12,
      titleFont: {
        size: 13,
        weight: 'bold',
      },
      bodyFont: {
        size: 12,
      },
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
      usePointStyle: true,
      callbacks: {
        label: function (context) {
          const label = context.label || '';
          const value = context.parsed || 0;
          const total = context.dataset.data.reduce((a, b) => a + b, 0);
          const percentage = ((value / total) * 100).toFixed(1);
          return `${label}: ${value} (${percentage}%)`;
        },
      },
    },
  },
};

export const barChartOptions = {
  indexAxis: 'y' === 'x' ? 'x' : 'x',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: {
          size: 12,
          weight: '500',
        },
        padding: 15,
        usePointStyle: true,
      },
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: 12,
      titleFont: {
        size: 13,
        weight: 'bold',
      },
      bodyFont: {
        size: 12,
      },
      borderColor: 'rgba(255, 255, 255, 0.2)',
      borderWidth: 1,
      callbacks: {
        label: function (context) {
          return `${context.dataset.label}: ${context.parsed.y}`;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        font: {
          size: 11,
        },
      },
      grid: {
        color: 'rgba(200, 200, 200, 0.1)',
        drawBorder: false,
      },
    },
    x: {
      ticks: {
        font: {
          size: 11,
        },
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
};
