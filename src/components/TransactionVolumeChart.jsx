import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockData = [
  { date: 'May 10', volume: 65000 },
  { date: 'May 11', volume: 72000 },
  { date: 'May 12', volume: 80000 },
  { date: 'May 13', volume: 58000 },
  { date: 'May 14', volume: 76000 },
  { date: 'May 15', volume: 89000 },
  { date: 'May 16', volume: 82000 },
];

const TransactionVolumeChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>7-Day Transaction Volume</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis label={{ value: 'Volume (USD)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="volume" stroke="#8884d8" activeDot={{ r: 8 }} name="Transaction Volume" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TransactionVolumeChart;
