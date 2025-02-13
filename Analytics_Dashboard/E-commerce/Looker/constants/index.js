// constants/index.js
export const CHART_TYPES = {
  LINE: 'line',
  BAR: 'bar',
  PIE: 'pie',
  AREA: 'area'
};

export const TIME_PERIODS = {
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month',
  QUARTER: 'quarter',
  YEAR: 'year'
};

export const CUSTOMER_SEGMENTS = {
  NEW: 'New',
  RETURNING: 'Returning',
  VIP: 'VIP',
  AT_RISK: 'At Risk',
  CHURNED: 'Churned'
};

export const PRODUCT_CATEGORIES = {
  ELECTRONICS: 'Electronics',
  CLOTHING: 'Clothing',
  BOOKS: 'Books',
  HOME: 'Home',
  BEAUTY: 'Beauty'
};

export const API_ENDPOINTS = {
  SALES: '/api/sales',
  CUSTOMERS: '/api/customers',
  PRODUCTS: '/api/products',
  METRICS: '/api/metrics'
};

export const ERROR_MESSAGES = {
  LOADING_ERROR: 'Error loading dashboard data',
  NO_DATA: 'No data available',
  INVALID_DATE: 'Invalid date range',
  API_ERROR: 'API request failed'
};

export const DATE_FORMATS = {
  SHORT_DATE: 'MMM DD, YYYY',
  MONTH_YEAR: 'MMM YYYY',
  FULL_DATE: 'MMMM DD, YYYY'
};

export const METRIC_FORMATS = {
  CURRENCY: 'currency',
  NUMBER: 'number',
  PERCENTAGE: 'percentage'
};

export const DEFAULT_SETTINGS = {
  REFRESH_INTERVAL: 300000, // 5 minutes
  DATE_RANGE: 30, // 30 days
  CHART_HEIGHT: 400,
  ANIMATION_DURATION: 500
};

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536
};
