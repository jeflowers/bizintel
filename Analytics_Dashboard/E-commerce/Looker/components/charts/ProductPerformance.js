// components/charts/ProductPerformance.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useProductData } from '../../hooks/useProductData';

const ProductPerformance = () => {
  const { productData, isLoading, error } = useProductData();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product data</div>;

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={productData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip 
            formatter={(value) => [`$${value}`, 'Revenue']}
          />
          <Legend />
          <Bar 
            dataKey="revenue" 
            fill="#8884d8" 
            name="Revenue"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductPerformance;
