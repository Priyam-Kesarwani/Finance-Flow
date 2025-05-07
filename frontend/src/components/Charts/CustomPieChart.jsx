import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CustomToolTip from "./CustomToolTip";
import CustomLegend from "./CustomLegend";

const CustomPieChart = ({
  data,
  label,
  totalAmount,
  colors,
  showTextAnchor,
}) => {
  console.log("CustomPieChart props:", {
    data,
    label,
    totalAmount,
    colors,
    showTextAnchor
  });

  // Verify data is valid
  if (!data || data.length === 0) {
    console.warn("No data provided to CustomPieChart");
    return null;
  }
  
  return (
     
    <ResponsiveContainer width="100%" height={380}>
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={100}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={CustomToolTip} />
        <Legend content={CustomLegend}/>

        {showTextAnchor && (
          <g style={{ transform: 'translateZ(1px)' }}>
            <text
              x="50%"
              y="50%"
              dy={-30}
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#666"
              fontSize="14px"
              style={{ zIndex: 1000 }}
            >
              {label}
            </text>
            <text
              x="50%"
              y="50%"
              dy={2}
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#333"
              fontSize="24px"
              fontWeight="600"
              style={{ zIndex: 1000 }}
            >
              {totalAmount}
            </text>
            </g>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
