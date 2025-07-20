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

const CustomPieChart = ({ data, label, totalAmount, colors, showTextAnchor }) => {
  console.log("CustomPieChart props:", { data, label, totalAmount, colors, showTextAnchor });

  if (!data || data.length === 0) {
    console.warn("No data provided to CustomPieChart");
    return null;
  }

  const isMobile = window.innerWidth < 640;
  const outerRadius = isMobile ? 100 : 130;
  const innerRadius = isMobile ? 70 : 100;
  const fontSizeLabel = isMobile ? "12px" : "14px";
  const fontSizeAmount = isMobile ? "18px" : "24px";

  return (
    <ResponsiveContainer width="100%" minWidth={250} height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={outerRadius}
          innerRadius={innerRadius}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>

        <Tooltip content={CustomToolTip} />
        <Legend content={CustomLegend} />

        {showTextAnchor && (
          <g>
            <text
              x="50%"
              y="50%"
              dy={-30}
              textAnchor="middle"
              fill="#666"
              fontSize={fontSizeLabel}
            >
              {label}
            </text>
            <text
              x="50%"
              y="50%"
              dy={2}
              textAnchor="middle"
              fill="#333"
              fontSize={fontSizeAmount}
              fontWeight="600"
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
