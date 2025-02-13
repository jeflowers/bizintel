// services/api.js
import { API_ENDPOINTS, ERROR_MESSAGES } from '../constants';

/**
 * Base API call handler
 */
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(endpoint, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`API Error: ${error.message}`);
    throw new Error(ERROR_MESSAGES.API_ERROR);
  }
};

/**
 * Fetch dashboard data
 */
export const fetchDashboardData = async (dateRange) => {
  try {
    const [sales, customers, products, metrics] = await Promise.all([
      apiCall(`${API_ENDPOINTS.SALES}?range=${dateRange}`),
      apiCall(API_ENDPOINTS.CUSTOMERS),
      apiCall(API_ENDPOINTS.PRODUCTS),
      apiCall(API_ENDPOINTS.METRICS)
    ]);

    return {
      salesData: sales,
      customerData: customers,
      productData: products,
      metricsData: metrics
    };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw new Error(ERROR_MESSAGES.LOADING_ERROR);
  }
};

/**
 * Update dashboard settings
 */
export const updateDashboardSettings = async (settings) => {
  return apiCall('/api/settings', {
    method: 'POST',
    body: JSON.stringify(settings)
  });
};

/**
 * Export dashboard data
 */
export const exportDashboardData = async (format = 'csv') => {
  try {
    const response = await fetch(`/api/export?format=${format}`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dashboard-export-${new Date().toISOString()}.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.
