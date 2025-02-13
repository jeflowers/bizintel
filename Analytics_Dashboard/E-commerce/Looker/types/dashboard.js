// types/dashboard.js
/**
 * @typedef {Object} SalesData
 * @property {string} month - The month of the sales data
 * @property {number} sales - Total sales amount
 * @property {number} orders - Number of orders
 */

/**
 * @typedef {Object} CustomerSegment
 * @property {string} name - Segment name
 * @property {number} value - Number of customers in segment
 * @property {number} [percentage] - Percentage of total customers
 */

/**
 * @typedef {Object} ProductPerformance
 * @property {string} category - Product category name
 * @property {number} revenue - Total revenue for category
 * @property {number} [percentage] - Percentage of total revenue
 * @property {string} [revenueFormatted] - Formatted revenue string
 */

/**
 * @typedef {Object} KPIMetrics
 * @property {number} totalSales - Total sales amount
 * @property {number} totalOrders - Total number of orders
 * @property {number} avgOrderValue - Average order value
 * @property {number} customerCount - Total number of customers
 */

/**
 * @typedef {Object} DateRange
 * @property {Date} startDate - Start date of the range
 * @property {Date} endDate - End date of the range
 */

/**
 * @typedef {Object} ChartConfig
 * @property {number} aspectRatio - Chart aspect ratio
 * @property {boolean} gridLines - Show grid lines
 * @property {boolean} animation - Enable animations
 * @property {boolean} tooltips - Show tooltips
 * @property {boolean} legend - Show legend
 */

// Export for documentation purposes
export const types = {
  SalesData: {},
  CustomerSegment: {},
  ProductPerformance: {},
  KPIMetrics: {},
  DateRange: {},
  ChartConfig: {}
};
