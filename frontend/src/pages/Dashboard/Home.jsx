import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import InfoCard from "../../components/Cards/InfoCard";
import { LuHandCoins, LuWalletMinimal } from "react-icons/lu";
import { IoMdCard } from "react-icons/io"
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
    if (loading) {
      console.log("Already loading, skipping fetch.");
      return;
    }
  
    console.log("Fetching dashboard data...");
    setLoading(true);
  
    try {
      const response = await axiosInstance.get("/api/v1/dashboard/get-data");
      console.log("API Response:", response); // Log the full response object
  
      if (response.data) {
        console.log("Dashboard Data:", response.data); // Log the actual data
        setDashboardData(response.data);
      } else {
        console.log("No data received from API.");
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error); // Log the error
    } finally {
      setLoading(false);
      console.log("Finished fetching dashboard data.");
    }
  };

  useEffect(() => {
    console.log("useEffect triggered, calling fetchDashboardData...");
    fetchDashboardData();
    return () => {
      console.log("Cleanup function executed.");
    };
  }, []);
  console.log("Dashboard data:", dashboardData); // Log the dashboard data
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            icon={<IoMdCard/>}
            label="Total Balance"
            value={addThousandsSeparator(dashboardData?.totalBalance || 0)}
            color="bg-purple-500"
          />
          <InfoCard
            icon={<LuWalletMinimal/>}
            label="Total Income"
            value={addThousandsSeparator(dashboardData?.totalIncome || 0)}
            color="bg-orange-500"
          />
          <InfoCard
            icon={<LuHandCoins/>}
            label="Total Expense"
            value={addThousandsSeparator(dashboardData?.totalExpense || 0)}
            color="bg-red-500"
          />
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <RecentTransactions 
          transactions={dashboardData?.recentTransactions}
          // onSeeMore={()=> navigate("/expense")}
          />
    
          <FinanceOverview
            totalBalance={dashboardData?.totalBalance || 0}
            totalIncome={dashboardData?.totalIncome || 0}
            totalExpense={dashboardData?.totalExpense || 0}
          />
          <ExpenseTransactions 
            transactions={dashboardData?.last30DaysExpenses?.transactions}
            onSeeMore={()=> navigate("/expense")}/>
          <Last30DaysExpenses 
            data={dashboardData?.last30DaysExpenses?.transactions || []}/>
          <RecentIncomeWithChart
            data={dashboardData?.last60DaysIncome?.transactions?.slice(0, 4) || []}
            totalIncome={dashboardData?.totalIncome || 0}
            />

          <RecentIncome 
            transactions={dashboardData?.last60DaysIncome?.transactions || []}
            onSeeMore={()=> navigate("/income")}/>


        </div>
      </div>
    </DashboardLayout>
  );
};

export default Home;
