// Sample chart data for different time periods
// Based on task status labels from useDataCards hook

export const chartDataByPeriod = {
  // Doughnut Chart Data - Task Status Distribution
  doughnut: {
    daily: {
      labels: ['Completed', 'Pending', 'In Progress', 'Over Due'],
      datasets: [
        {
          label: 'Daily Tasks',
          data: [3, 2, 1, 1],
          backgroundColor: [
            '#77D56F', // Completed - Green
            '#DCC470', // Pending - Yellow
            '#B65ED6', // In Progress - Purple
            '#E74C3C', // Over Due - Red
          ],
          borderColor: [
            '#65BB5D',
            '#C9A955',
            '#A44BC0',
            '#C0392B',
          ],
          borderWidth: 2,
          hoverOffset: 4,
        },
      ],
    },
    weekly: {
      labels: ['Completed', 'Pending', 'In Progress', 'Over Due'],
      datasets: [
        {
          label: 'Weekly Tasks',
          data: [15, 8, 6, 4],
          backgroundColor: [
            '#77D56F',
            '#DCC470',
            '#B65ED6',
            '#E74C3C',
          ],
          borderColor: [
            '#65BB5D',
            '#C9A955',
            '#A44BC0',
            '#C0392B',
          ],
          borderWidth: 2,
          hoverOffset: 4,
        },
      ],
    },
    monthly: {
      labels: ['Completed', 'Pending', 'In Progress', 'Over Due'],
      datasets: [
        {
          label: 'Monthly Tasks',
          data: [65, 32, 28, 15],
          backgroundColor: [
            '#77D56F',
            '#DCC470',
            '#B65ED6',
            '#E74C3C',
          ],
          borderColor: [
            '#65BB5D',
            '#C9A955',
            '#A44BC0',
            '#C0392B',
          ],
          borderWidth: 2,
          hoverOffset: 4,
        },
      ],
    },
  },

  // Bar Chart Data - Task Progress Over Time
  bar: {
    daily: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Completed',
          data: [3, 4, 2, 5, 3, 2, 1],
          backgroundColor: '#77D56F',
          borderColor: '#65BB5D',
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: 'In Progress',
          data: [1, 2, 2, 1, 3, 1, 0],
          backgroundColor: '#B65ED6',
          borderColor: '#A44BC0',
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: 'Pending',
          data: [2, 1, 2, 2, 1, 1, 2],
          backgroundColor: '#DCC470',
          borderColor: '#C9A955',
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    weekly: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Completed',
          data: [15, 18, 20, 12],
          backgroundColor: '#77D56F',
          borderColor: '#65BB5D',
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: 'In Progress',
          data: [6, 8, 5, 7],
          backgroundColor: '#B65ED6',
          borderColor: '#A44BC0',
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: 'Pending',
          data: [8, 7, 9, 6],
          backgroundColor: '#DCC470',
          borderColor: '#C9A955',
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
    monthly: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Completed',
          data: [65, 72, 68, 75, 82, 78],
          backgroundColor: '#77D56F',
          borderColor: '#65BB5D',
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: 'In Progress',
          data: [28, 32, 30, 35, 38, 35],
          backgroundColor: '#B65ED6',
          borderColor: '#A44BC0',
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: 'Pending',
          data: [32, 28, 35, 30, 28, 32],
          backgroundColor: '#DCC470',
          borderColor: '#C9A955',
          borderWidth: 1,
          borderRadius: 4,
        },
      ],
    },
  },
};
