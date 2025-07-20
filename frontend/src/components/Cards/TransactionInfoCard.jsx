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
      ? "bg-green-50 text-green-500"
      : "bg-red-50 text-red-500";
  };

  return (
    <div className="group relative flex flex-wrap items-center gap-3 mt-2 p-3 rounded-lg hover:bg-gray-100/50">
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center text-lg text-gray-800 bg-gray-100 rounded-full flex-shrink-0">
        {icon ? (
          <img src={icon} alt={title} className="w-5 h-5" />
        ) : (
          <LuUtensils />
        )}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-[50%]">
        <p className="text-sm font-medium text-gray-700 break-words">{title}</p>
        <p className="text-xs text-gray-400 mt-1">{date}</p>
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
        >
          {type === "income" ? "+" : "-"}₹{amount}
          {type === "income" ? <LuTrendingUp /> : <LuTrendingDown />}
        </div>
      </div>
    </div>
  );
};

export default TransactionInfoCard;
