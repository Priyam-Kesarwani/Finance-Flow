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
  if (!data || data.length === 0) return null;

  const isMobile = window.innerWidth < 640;
  const outerRadius = isMobile ? 80 : 130;
  const innerRadius = isMobile ? 50 : 100;
  const fontSizeLabel = isMobile ? "12px" : "14px";
  const fontSizeAmount = isMobile ? "16px" : "24px";

  return (
    <div className="flex justify-center items-center w-full">
      <ResponsiveContainer width="100%" height={isMobile ? 250 : 350}>
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
          <Legend content={CustomLegend} verticalAlign="bottom" />

          {showTextAnchor && (
            <>
              <text
                x="50%"
                y="45%"
                textAnchor="middle"
                fill="#666"
                fontSize={fontSizeLabel}
              >
                {label}
              </text>
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                fill="#333"
                fontSize={fontSizeAmount}
                fontWeight="600"
              >
                {totalAmount}
              </text>
            </>
          )}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
