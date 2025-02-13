// utils/transformations.js
import { formatDate } from './formatters';

/**
 * Calculate growth percentage between two values
 */
export const calculateGrowth = (current, previous) => {
  if (!previous) return 0;
  return ((current - previous) / previous) * 100;
};

/**
 * Aggregate data by time period
 */
export const aggregateByPeriod = (data, periodKey = 'date', valueKey = 'value', period = 'month') => {
  const grouped = data.reduce((acc, item) => {
    const date = new Date(item[periodKey]);
    let key;

    switch (period) {
      case 'day':
        key = date.toISOString().split('T')[0];
        break;
      case 'month':
        key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        break;
      case 'year':
        key = `${date.getFullYear()}`;
        break;
      default:
        key = date.toISOString().split('T')[0];
    }

    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key] += Number(item[valueKey]) || 0;
    return acc;
  }, {});

  return Object.entries(grouped).map(([date, value]) => ({
    date: formatDate(date),
    value
  }));
};

/**
 * Transform raw sales data into chart format
 */
export const transformSalesData = (data) => {
  return data.map(item => ({
    month: item.month,
    sales: Number(item.sales),
    orders: Number(item.orders),
    averageOrderValue: item.sales / item.orders
  }));
};

/**
 * Calculate customer segmentation percentages
 */
export const calculateSegmentationPercentages = (data) => {
  const total = data.reduce((sum, segment) => sum + segment.value, 0);
  return data.map(segment => ({
    ...segment,
    percentage: (segment.value / total) * 100
  }));
};

/**
 * Transform product performance data
 */
export const transformProductData = (data) => {
  const totalRevenue = data.reduce((sum, product) => sum + product.revenue, 0);
  return data.map(product => ({
    ...product,
    percentage: (product.revenue / totalRevenue) * 100,
    revenueFormatted: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(product.revenue)
  }));
};

/**
 * Calculate KPI metrics
 */
export const calculateKPIMetrics = (salesData) => {
  const totalSales = salesData.reduce((sum, item) => sum + item.sales, 0);
  const totalOrders = salesData.reduce((sum, item) => sum + item.orders, 0);
  
  return {
    totalSales,
    totalOrders,
    avgOrderValue: totalSales / totalOrders,
    salesGrowth: calculateGrowth(
      salesData[salesData.length - 1].sales,
      salesData[salesData.length - 2].sales
    )
  };
};

/**
 * Create time comparison data (e.g., year-over-year, month-over-month)
 */
export const createTimeComparison = (data, period = 'month') => {
  return data.map((current, index) => {
    const previous = data[index - 1];
    return {
      period: current.month,
      current: current.sales,
      previous: previous ? previous.sales : null,
      growth: previous ? calculateGrowth(current.sales, previous.sales) : null
    };
  });
};

/**
 * Filter data by date range
 */
export const filterByDateRange = (data, startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return data.filter(item => {
    const date = new Date(item.date);
    return date >= start && date <= end;
  });
};

/**
 * Create moving averages for trend analysis
 */
export const calculateMovingAverage = (data, periods = 3) => {
  return data.map((item, index) => {
    if (index < periods - 1) return { ...item, movingAverage: null };
    
    const sum = data
      .slice(index - periods + 1, index + 1)
      .reduce((acc, curr) => acc + curr.sales, 0);
    
    return {
      ...item,
      movingAverage: sum / periods
    };
  });
};
