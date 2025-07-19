import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import InfoCard from "../../components/Cards/InfoCard";
import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
import { IoMdCard } from "react-icons/io";
import { addThousandsSeparator } from "../../utils/helper";
import RecentTransactions from "../../components/Dashboard/RecenTransactions";
import FinanceOverview from "../../components/Dashboard/FinanceOverview";
import ExpenseTransactions from "../../components/Dashboard/ExpenseTransactions";
import Last30DaysExpenses from "../../components/Dashboard/Last30DaysExpenses";
import RecentIncomeWithChart from "../../components/Dashboard/RecentIncomeWithChart";
import RecentIncome from "../../components/Dashboard/RecentIncome";

const Home = () => {
  useUserAuth();
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axiosInstance.get("/api/v1/dashboard/get-data");
      if (response.data) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="mx-auto max-w-7xl px-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 mt-4">
          {[
            {
              icon: <IoMdCard />,
              label: "Total Balance",
              value: addThousandsSeparator(dashboardData?.totalBalance || 0),
              color: "bg-indigo-600",
            },
            {
              icon: <LuWalletMinimal />,
              label: "Total Income",
              value: addThousandsSeparator(dashboardData?.totalIncome || 0),
              color: "bg-emerald-500",
            },
            {
              icon: <LuHandCoins />,
              label: "Total Expense",
              value: addThousandsSeparator(dashboardData?.totalExpense || 0),
              color: "bg-rose-500",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`flex items-center p-6 rounded-xl shadow-md ${card.color} text-white hover:scale-[1.02] transition-transform duration-300 ease-in-out`}
            >
              <div className="text-3xl mr-4">{card.icon}</div>
              <div>
                <div className="text-sm uppercase tracking-wide font-semibold">
                  {card.label}
                </div>
                <div className="text-2xl font-bold mt-1">{card.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="hover:-translate-y-1.5 transition-transform-duration-300 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 backdrop-blur-md rounded-2xl shadow-lg p-5">
            <RecentTransactions
              transactions={dashboardData?.recentTransactions}
            />
          </div>

          <div className="hover:-translate-y-1.5 transition-transform-duration-300 bg-gradient-to-b from-yellow-100 via-yellow-200 to-yellow-300  backdrop-blur-md rounded-2xl shadow-lg p-5">
            <FinanceOverview
              totalBalance={dashboardData?.totalBalance || 0}
              totalIncome={dashboardData?.totalIncome || 0}
              totalExpense={dashboardData?.totalExpense || 0}
            />
          </div>

          <div className="hover:-translate-y-1.5 transition-transform-duration-300 bg-gradient-to-b from-green-100 via-green-200 to-green-300 backdrop-blur-md rounded-2xl shadow-lg p-5">
            <ExpenseTransactions
              transactions={dashboardData?.last30DaysExpenses?.transactions}
              onSeeMore={() => navigate("/expense")}
            />
          </div>

          <div className="hover:-translate-y-1.5 transition-transform-duration-300 bg-gradient-to-b from-pink-200 via-pink-300 to-pink-400 backdrop-blur-md rounded-2xl shadow-lg p-5">
            <Last30DaysExpenses
              data={dashboardData?.last30DaysExpenses?.transactions || []}
            />
          </div>

          <div className="hover:-translate-y-1.5 transition-transform-duration-300 bg-gradient-to-b from-orange-100 via-orange-200 to-orange-300 backdrop-blur-md rounded-2xl shadow-lg p-5">
            <RecentIncomeWithChart
              data={
                dashboardData?.last60DaysIncome?.transactions?.slice(0, 4) || []
              }
              totalIncome={dashboardData?.totalIncome || 0}
            />
          </div>

          <div className="hover:-translate-y-1.5 transition-transform-duration-300 bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-400 backdrop-blur-md rounded-2xl shadow-lg p-5">
            <RecentIncome
              transactions={dashboardData?.last60DaysIncome?.transactions || []}
              onSeeMore={() => navigate("/income")}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
