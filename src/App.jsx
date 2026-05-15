import React, { useMemo } from 'react';
import { transactions } from './data';
import StatCard from './components/StatCard';
import TransactionsTable from './components/TransactionsTable';
import TransactionVolumeChart from './components/TransactionVolumeChart';
import TransactionTypeChart from './components/TransactionTypeChart';
import { DollarSign, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


function App() {
  const stats = useMemo(() => {
    const total = transactions.length;
    const successful = transactions.filter(tx => tx.status === 'Success').length;
    const failed = transactions.filter(tx => tx.status === 'Failed').length;
    const pending = transactions.filter(tx => tx.status === 'Pending').length;
    const successRate = total > 0 ? (successful / total) * 100 : 0;

    return {
      total,
      successRate: `${successRate.toFixed(1)}%`,
      failed,
      pending,
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Payment Operations Dashboard</h1>
        </header>
        <main>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <StatCard title="Total Transactions" value={stats.total} icon={<DollarSign className="h-4 w-4 text-muted-foreground" />} description="Total number of transactions" />
            <StatCard title="Success Rate" value={stats.successRate} icon={<CheckCircle className="h-4 w-4 text-muted-foreground" />} description="Percentage of successful transactions" />
            <StatCard title="Failed Transactions" value={stats.failed} icon={<XCircle className="h-4 w-4 text-muted-foreground" />} description="Total number of failed transactions" />
            <StatCard title="Pending Transactions" value={stats.pending} icon={<Clock className="h-4 w-4 text-muted-foreground" />} description="Total number of pending transactions" />
          </div>
          <div className="grid gap-8">
            <TransactionsTable />
            <div className="grid md:grid-cols-2 gap-8">
              <TransactionVolumeChart />
              <TransactionTypeChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
