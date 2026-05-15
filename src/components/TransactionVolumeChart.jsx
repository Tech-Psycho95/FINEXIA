import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { transactions } from '@/data';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TransactionVolumeChart = () => {
  const data = useMemo(() => {
    const last7Days = [...Array(7)].map((_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - i);
      return d.toISOString().split('T')[0];
    }).reverse();

    const dailyVolume = last7Days.map(day => {
      const total = transactions
        .filter(tx => tx.date.startsWith(day))
        .reduce((sum, tx) => sum + tx.amount, 0);
      return { date: new Date(day).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), volume: total };
    });
    return dailyVolume;
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>7-Day Transaction Volume</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="volume" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TransactionVolumeChart;
