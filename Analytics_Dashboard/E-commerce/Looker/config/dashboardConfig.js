// config/dashboardConfig.js
export const chartColors = {
  primary: '#8884d8',
  secondary: '#82ca9d',
  tertiary: '#ffc658',
  danger: '#ff8042',
  success: '#00C49F',
  warning: '#FFBB28',
  info: '#0088FE'
};

export const chartConfig = {
  sales: {
    aspectRatio: 16/9,
    gridLines: true,
    animation: true,
    tooltips: true,
    legend: true
  },
  customers: {
    aspectRatio: 1,
    tooltips: true,
    legend: true,
    animation: true
  },
  products: {
    aspectRatio: 16/9,
    gridLines: true,
    animation: true,
    tooltips: true,
    legend: true
  }
};

export const dateRanges = {
  last7Days: '7d',
  last30Days: '30d',
  lastQuarter: 'quarter',
  lastYear: 'year',
  custom: 'custom'
};

export const metrics = {
  sales: {
    label: 'Total Sales',
    format: 'currency',
    bgColor: 'bg-blue-100'
  },
  orders: {
    label: 'Total Orders',
    format: 'number',
    bgColor: 'bg-green-100'
  },
  averageOrder: {
    label: 'Average Order Value',
    format: 'currency',
    bgColor: 'bg-yellow-100'
  },
  customers: {
    label: 'Total Customers',
    format: 'number',
    bgColor: 'bg-purple-100'
  }
};

export const refreshIntervals = {
  live: 5000,  // 5 seconds
  normal: 300000,  // 5 minutes
  slow: 3600000  // 1 hour
};
