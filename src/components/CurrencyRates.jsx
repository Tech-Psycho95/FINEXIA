import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const CurrencyRates = () => {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('/api/frankfurter/latest?from=USD&to=INR,EUR,GBP');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRates(data.rates);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Currency Rates (vs. USD)</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
          </div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <ul className="space-y-1">
            {rates && Object.entries(rates).map(([currency, rate]) => (
              <li key={currency} className="flex justify-between">
                <span>{currency}:</span>
                <span>{rate.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default CurrencyRates;