// components/charts/KPIMetrics.js
import React from 'react';
import { useMetricsData } from '../../hooks/useMetricsData';

const MetricCard = ({ title, value, bgColor }) => (
  <div className={`p-4 ${bgColor} rounded-lg`}>
    <div className="text-lg font-semibold">{title}</div>
    <div className="text-2xl">{value}</div>
  </div>
);

const KPIMetrics = () => {
  const { metricsData, isLoading, error } = useMetricsData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading metrics</div>;

  const formatCurrency = (value) => 
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);

  const formatNumber = (value) =>
    new Intl.NumberFormat('en-US').format(value);

  return (
    <div className="grid grid-cols-2 gap-4">
      <MetricCard
        title="Total Sales"
        value={formatCurrency(metricsData.totalSales)}
        bgColor="bg-blue-100"
      />
      <MetricCard
        title="Total Orders"
        value={formatNumber(metricsData.totalOrders)}
        bgColor="bg-green-100"
      />
      <MetricCard
        title="Avg Order Value"
        value={formatCurrency(metricsData.avgOrderValue)}
        bgColor="bg-yellow-100"
      />
      <MetricCard
        title="Customer Count"
        value={formatNumber(metricsData.customerCount)}
        bgColor="bg-purple-100"
      />
    </div>
  );
};

export default KPIMetrics;
