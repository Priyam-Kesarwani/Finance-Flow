import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import InfoCard from "../../components/Cards/InfoCard";
import toast from "react-hot-toast";
import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
import { IoMdCard } from "react-icons/io";
import { addThousandsSeparator } from "../../utils/helper";
import RecentTransactions from "../../components/Dashboard/RecenTransactions";
import FinanceOverview from "../../components/Dashboard/FinanceOverview";
import ExpenseTransactions from "../../components/Dashboard/ExpenseTransactions";
import Last30DaysExpenses from "../../components/Dashboard/Last30DaysExpenses";
import RecentIncomeWithChart from "../../components/Dashboard/RecentIncomeWithChart";
import RecentIncome from "../../components/Dashboard/RecentIncome";
import { LuPlus } from "react-icons/lu";
import Modal from "../../components/Modal";
import AddIncomeForm from "../../components/Income/AddIncomeForm";
import AddExpenseForm from "../../components/Expense/AddExpenseForm";

const Home = () => {
  useUserAuth();
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [openAddIncome, setOpenAddIncome] = useState(false);
  const [openAddExpense, setOpenAddExpense] = useState(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddIncomeFromHome = async (income) => {
    const { source, amount, date, icon } = income || {};
    if (!source || !amount || !date) {
      setOpenAddIncome(false);
      return;
    }
    try {
      await axiosInstance.post(API_PATHS.INCOME.ADD_INCOME, {
        source,
        amount,
        date,
        icon,
      });
      setOpenAddIncome(false);
      toast.success("Income added successfully");
      fetchDashboardData();
    } catch {
      setOpenAddIncome(false);
      toast.error("Failed to add income");
    }
  };

  const handleAddExpenseFromHome = async (expense) => {
    const { category, amount, date, icon } = expense || {};
    if (!category || !amount || !date) {
      setOpenAddExpense(false);
      return;
    }
    try {
      await axiosInstance.post(API_PATHS.EXPENSE.ADD_EXPENSE, {
        category,
        amount,
        date,
        icon,
      });
      setOpenAddExpense(false);
      toast.success("Expense added successfully");
      fetchDashboardData();
    } catch {
      setOpenAddExpense(false);
      toast.error("Failed to add expense");
    }
  };

  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="mx-auto max-w-7xl px-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 mt-4">
          {[
            {
              icon: <IoMdCard />,
              label: "Total Balance",
              value: addThousandsSeparator(dashboardData?.totalBalance || 0),
              color: "",
            },
            {
              icon: <LuWalletMinimal />,
              label: "Total Income",
              value: addThousandsSeparator(dashboardData?.totalIncome || 0),
              color: "",
            },
            {
              icon: <LuHandCoins />,
              label: "Total Expense",
              value: addThousandsSeparator(dashboardData?.totalExpense || 0),
              color: "",
            },
          ].map((card, index) => (
            <InfoCard
              key={index}
              icon={card.icon}
              label={card.label}
              value={card.value}
              color={card.color}
            />
          ))}
        </div>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="flex items-center justify-end gap-3 md:col-span-2">
            <button className="btn" onClick={() => setOpenAddIncome(true) }>
              <LuPlus className="text-lg" /> Add Income
            </button>
            <button className="btn" onClick={() => setOpenAddExpense(true) }>
              <LuPlus className="text-lg" /> Add Expense
            </button>
          </div>
          <div className="rounded-2xl p-5 card">
            <RecentTransactions
              transactions={dashboardData?.recentTransactions}
            />
          </div>

          <div className="rounded-2xl p-5 card">
            <FinanceOverview
              totalBalance={dashboardData?.totalBalance || 0}
              totalIncome={dashboardData?.totalIncome || 0}
              totalExpense={dashboardData?.totalExpense || 0}
            />
          </div>

          <div className="rounded-2xl p-5 card">
            <ExpenseTransactions
              transactions={dashboardData?.last30DaysExpenses?.transactions}
              onSeeMore={() => navigate("/expense")}
            />
          </div>

          <div className="rounded-2xl p-5 card">
            <Last30DaysExpenses
              data={dashboardData?.last30DaysExpenses?.transactions || []}
            />
          </div>

          <div className="rounded-2xl p-5 card">
            <RecentIncomeWithChart
              data={
                dashboardData?.last60DaysIncome?.transactions?.slice(0, 4) || []
              }
              totalIncome={dashboardData?.totalIncome || 0}
            />
          </div>

          <div className="rounded-2xl p-5 card">
            <RecentIncome
              transactions={dashboardData?.last60DaysIncome?.transactions || []}
              onSeeMore={() => navigate("/income")}
            />
          </div>
        </div>
        {/* Add Income Modal */}
        <Modal isOpen={openAddIncome} onClose={() => setOpenAddIncome(false)} title="Add Income">
          <AddIncomeForm onAddIncome={handleAddIncomeFromHome} />
        </Modal>

        {/* Add Expense Modal */}
        <Modal isOpen={openAddExpense} onClose={() => setOpenAddExpense(false)} title="Add Expense">
          <AddExpenseForm onAddExpense={handleAddExpenseFromHome} />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Home;
