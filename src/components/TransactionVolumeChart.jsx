import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TransactionVolumeChart = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_COINGECKO_API_URL}/coins/bitcoin/market_chart?vs_currency=usd&days=7`);
        if (!response.ok) {
          throw new Error("Failed to fetch transaction volume");
        }
        const data = await response.json();
        const formattedData = data.prices
          .filter((_, index) => index % 24 === 0)
          .map(price => ({
            date: new Date(price[0]).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            volume: price[1],
        }));
        setChartData(formattedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>7-Day Transaction Volume</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="h-[300px] flex items-center justify-center">
            <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900"></div>
          </div>
        ) : error ? (
          <div className="h-[300px] flex items-center justify-center text-red-500">{error}</div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis label={{ value: 'Volume (USD)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="volume" stroke="#8884d8" activeDot={{ r: 8 }} name="Transaction Volume" />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default TransactionVolumeChart;
