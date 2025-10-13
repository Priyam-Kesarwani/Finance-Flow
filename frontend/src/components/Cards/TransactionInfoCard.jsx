import React from "react";
import {
  LuUtensils,
  LuTrash2,
  LuTrendingUp,
  LuTrendingDown,
} from "react-icons/lu";

const TransactionInfoCard = ({
  title,
  icon,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete,
}) => {
  const getAmountStyles = () => {
    return type === "income"
      ? "stat-green bg-[rgba(34,197,94,0.08)]"
      : "stat-red bg-[rgba(239,68,68,0.08)]";
  };

  return (
    <div className="group relative flex flex-wrap items-center gap-3 mt-2 p-3 rounded-lg" style={{ backgroundColor: 'transparent' }}>
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center text-lg rounded-full flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'var(--text-0)' }}>
        {icon ? (
          <img src={icon} alt={title} className="w-5 h-5" />
        ) : (
          <LuUtensils />
        )}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-[50%]">
        <p className="text-sm font-medium break-words" style={{ color: 'var(--text-0)' }}>{title}</p>
        <p className="text-xs muted mt-1">{date}</p>
      </div>

      {/* Amount and Delete */}
      <div className="flex items-center gap-2 ml-auto">
        {!hideDeleteBtn && onDelete && (
          <button
            onClick={onDelete}
            className="hover:text-red-500 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-1"
          >
            <LuTrash2 size={18} />
          </button>
        )}
        <div
          className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${getAmountStyles()}`}
          style={{ border: '1px solid var(--card-ring)' }}
        >
          {type === "income" ? "+" : "-"}₹{amount}
          {type === "income" ? <LuTrendingUp /> : <LuTrendingDown />}
        </div>
      </div>
    </div>
  );
};

export default TransactionInfoCard;
