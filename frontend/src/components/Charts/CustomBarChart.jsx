import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Dark themed tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "var(--bg-2)", border: "1px solid var(--card-ring)", padding: 8, borderRadius: 8, color: 'var(--text-0)' }}>
        <p style={{ color: 'var(--text-1)', marginBottom: 4 }}>{label}</p>
        <p>{`Amount: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

// Dummy getBarColor if not defined elsewhere
const getBarColor = (index) => {
  const colors = ["#FF8042", "#0088FE", "#00C49F", "#FFBB28"];
  return colors[index % colors.length];
};

const CustomBarChart = ({ data }) => {
  // Function to alternate colors
  const getBarColor = (index) => {
    return index % 2 === 0 ? "#875cf5" : "#cfbefb";
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
          <p className="text-xs font-semibold text-purple-800 mb-1">
            {payload[0].payload.category}
          </p>
          <p className="text-sm text-gray-600 ">
            Amount:{" "}
            <span className="text-sm font-medium text-gray-900">
              ₹{payload[0].payload.amount}{" "}
            </span>
          </p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "var(--text-1)" }}
            stroke="none"
          />
          <YAxis tick={{ fontSize: 12, fill: "var(--text-1)" }} stroke="none" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="amount" fill="#FF8042" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={index} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
