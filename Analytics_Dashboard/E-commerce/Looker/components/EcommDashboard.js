// components/EcommDashboard.js
import React from 'react';
import SalesChart from './charts/SalesChart';
import CustomerSegmentation from './charts/CustomerSegmentation';
import ProductPerformance from './charts/ProductPerformance';
import KPIMetrics from './charts/KPIMetrics';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-6">E-commerce Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Sales Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <SalesChart />
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Customer Segmentation</CardTitle>
          </CardHeader>
          <CardContent>
            <CustomerSegmentation />
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Product Category Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ProductPerformance />
          </CardContent>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Key Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <KPIMetrics />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EcommDashboard;
