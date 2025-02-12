import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  // Mock data
  const salesData = [
    { month: 'Jan', sales: 4000, orders: 240 },
    { month: 'Feb', sales: 3000, orders: 198 },
    { month: 'Mar', sales: 5000, orders: 305 },
    { month: 'Apr', sales: 4500, orders: 275 },
    { month: 'May', sales: 6000, orders: 410 },
    { month: 'Jun', sales: 5500, orders: 385 }
  ];

  const customerSegments = [
    { name: 'New', value: 400 },
    { name: 'Returning', value: 300 },
    { name: 'VIP', value: 200 },
    { name: 'At Risk', value: 100 }
  ];

  const productPerformance = [
    { category: 'Electronics', revenue: 5000 },
    { category: 'Clothing', revenue: 3500 },
    { category: 'Books', revenue: 2000 },
    { category: 'Home', revenue: 4000 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-6">E-commerce Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sales Trend */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Sales Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                  <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Customer Segmentation */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Customer Segmentation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={customerSegments}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {customerSegments.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Product Performance */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Product Category Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* KPI Summary */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Key Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-100 rounded-lg">
                <div className="text-lg font-semibold">Total Sales</div>
                <div className="text-2xl">$28,000</div>
              </div>
              <div className="p-4 bg-green-100 rounded-lg">
                <div className="text-lg font-semibold">Total Orders</div>
                <div className="text-2xl">1,813</div>
              </div>
              <div className="p-4 bg-yellow-100 rounded-lg">
                <div className="text-lg font-semibold">Avg Order Value</div>
                <div className="text-2xl">$154</div>
              </div>
              <div className="p-4 bg-purple-100 rounded-lg">
                <div className="text-lg font-semibold">Customer Count</div>
                <div className="text-2xl">1,000</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
