// hooks/useData.js

import { useState, useEffect } from 'react';

// Sales Data Hook
export const useSalesData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating API call with mock data
    const mockData = [
      { month: 'Jan', sales: 4000, orders: 240 },
      { month: 'Feb', sales: 3000, orders: 198 },
      { month: 'Mar', sales: 5000, orders: 305 },
      { month: 'Apr', sales: 4500, orders: 275 },
      { month: 'May', sales: 6000, orders: 410 },
      { month: 'Jun', sales: 5500, orders: 385 }
    ];

    setData(mockData);
    setIsLoading(false);
  }, []);

  return { salesData: data, isLoading, error };
};

// Customer Data Hook
export const useCustomerData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mockData = [
      { name: 'New', value: 400 },
      { name: 'Returning', value: 300 },
      { name: 'VIP', value: 200 },
      { name: 'At Risk', value: 100 }
    ];

    setData(mockData);
    setIsLoading(false);
  }, []);

  return { customerData: data, isLoading, error };
};

// Product Data Hook
export const useProductData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mockData = [
      { category: 'Electronics', revenue: 5000 },
      { category: 'Clothing', revenue: 3500 },
      { category: 'Books', revenue: 2000 },
      { category: 'Home', revenue: 4000 }
    ];

    setData(mockData);
    setIsLoading(false);
  }, []);

  return { productData: data, isLoading, error };
};

// Metrics Data Hook
export const useMetricsData = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mockData = {
      totalSales: 28000,
      totalOrders: 1813,
      avgOrderValue: 154,
      customerCount: 1000
    };

    setData(mockData);
    setIsLoading(false);
  }, []);

  return { metricsData: data, isLoading, error };
};
