import React from 'react';
import {
  LuUtensils,
  LuTrash2,
  LuTrendingUp,
  LuTrendingDown,
} from 'react-icons/lu';

const TransactionInfoCard = ({
  title,
  icon,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete,
}) => {
  // Ensure we return the class string
  const getAmountStyles = () => {
    return type === 'income'
      ? 'bg-green-50 text-green-500'
      : 'bg-red-50 text-red-500';
  };

  return (
    <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg hover:bg-gray-100/50">
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center text-xl text-gray-800 bg-gray-100 rounded-full">
        {icon ? (
          <img src={icon} alt={title} className="w-6 h-6" />
        ) : (
          <LuUtensils />
        )}
      </div>

      {/* Details */}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-700">{title}</p>
        <p className="text-xs text-gray-400 mt-1">{date}</p>
      </div>

      {/* Amount and Delete Button */}
      <div className="flex items-center gap-2">
        {!hideDeleteBtn && onDelete && (
          <button
            onClick={onDelete}
            className="hover:text-red-500 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-1"
          >
            <LuTrash2 size={18} />
          </button>
        )}
        <div
          className={`flex items-center gap-2 px-3 py-1.5 rounded-md ${
            getAmountStyles()
          }`}
        >
          <h6 className="text-xs font-medium">
            {type === 'income' ? '+' : '-'}₹{amount}
          </h6>
          {type === 'income' ? <LuTrendingUp /> : <LuTrendingDown />}
        </div>
      </div>
    </div>
  );
};

export default TransactionInfoCard;
