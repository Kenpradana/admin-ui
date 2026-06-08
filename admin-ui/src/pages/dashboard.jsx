// src/pages/dashboard.js
import React from 'react'
import MainLayout from '../components/Layouts/MainLayout';
import CardBalance from '../components/Fragments/CardBalance';
import CardGoal from '../components/Fragments/CardGoal';
import CardUpcomingBill from '../components/Fragments/CardUpcomingBill';
import CardRecentTransaction from '../components/Fragments/CardRecentTransaction';
import CardStatistics from '../components/Fragments/CardStatistic';
import CardExpensesBreakdown from '../components/Fragments/CardExpenseBreakdown';
import {transactions, bills, expensesBreakdowns, balances, goals, expensesStatistics,} from '../data';
import BarsDataset from "../components/Elements/BarsDataset";

const chartDataset = {
  dataKey: "day",  // ← untuk sumbu X
  data: [
    { day: "Sun", amountThisweek: 5000, amountLastweek: 25000 },
    { day: "Mon", amountThisweek: 50000, amountLastweek: 10000 },
    { day: "Tue", amountThisweek: 50000, amountLastweek: 5000 },
    { day: "Wed", amountThisweek: 50000, amountLastweek: 5000 },
    { day: "Thu", amountThisweek: 50000, amountLastweek: 10000 },
    { day: "Fri", amountThisweek: 10000, amountLastweek: 25000 },
    { day: "Sat", amountThisweek: 50000, amountLastweek: 10000 },
  ],
  series: [
    { datakey: "amountThisweek", label: "This Week" },   // ← pakai 'datakey' (huruf kecil)
    { datakey: "amountLastweek", label: "Last Week" },   // ← pakai 'datakey' (huruf kecil)
  ]
};

function dashboard() {
  return (
    <>
      <MainLayout>
        <div className="grid sm:grid-cols-12 sm:grid-rows-3 gap-6 h-full"> 
          <div className="sm:col-span-4">
            <CardBalance data={balances} />
          </div>
          <div className="sm:col-span-4">
            <CardGoal data={goals} />
          </div>
          <div className="sm:col-span-4">
            <CardUpcomingBill data={bills} />
          </div>
          <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction data={transactions} />
          </div>
          <div className="sm:col-span-8">
            <CardStatistics data={expensesStatistics} />
          </div>
          <div className="sm:col-span-8">
            <CardExpensesBreakdown data={expensesBreakdowns} />
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default dashboard;  // ← Export dengan huruf besar