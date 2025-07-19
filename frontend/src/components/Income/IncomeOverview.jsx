import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../Charts/CustomBarChart";
import { prepareIncomeBarChartData } from "../../utils/helper";

const IncomeOverview = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeBarChartData(transactions);
    setChartData(result);

    return () => {};
  }, [transactions]);
  
  return (
    <div className="card2">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-xl font-medium">Income Overview</h5>
          <p className="text-xs text-gray-700 mt-0.5">
            Track your earnings over time and analyze your income trends.
          </p>
        </div>
  
        <button className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-purple-600 whitespace-nowrap bg-purple-50 border border-purple-100 rounded-lg px-4 py-2 cursor-pointer" onClick={onAddIncome}>
          <LuPlus className="text-lg" />
          Add Income
        </button>
      </div>
  
      <div className="mt-10 card">
        <CustomBarChart data={chartData} />
      </div>
    </div>
  );
  
};
export default IncomeOverview;
