import React, { useEffect, useState } from "react";
import { prepareExpenseBarChartData } from "../../utils/helper";
import CustomBarChart from "../Charts/CustomBarChart";

const Last30DaysExpenses = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseBarChartData(Array.isArray(data) ? data : []);
    setChartData(result);

    return () => {};
  }, [data]);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-center">
        <h5 className="text-xl font-medium">Last 30 Days Expenses</h5>
      </div>
      {chartData && chartData.length > 0 ? (
        <CustomBarChart data={chartData}/>
      ) : (
        <div className="mt-8 text-center muted">No expense data for the last 30 days.</div>
      )}
    </div>
  );
};
export default Last30DaysExpenses;
