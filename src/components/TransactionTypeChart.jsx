import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { transactions } from '@/data';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TransactionTypeChart = () => {
  const data = useMemo(() => {
    const typeCounts = transactions.reduce((acc, tx) => {
      acc[tx.type] = (acc[tx.type] || 0) + 1;
      return acc;
    }, {});
    return Object.keys(typeCounts).map(key => ({ name: key, count: typeCounts[key] }));
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TransactionTypeChart;
