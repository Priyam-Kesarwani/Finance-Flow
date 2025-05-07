import React from "react";
import CARD_2 from "../../assets/images/CARD2.png";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section - Auth Forms */}
      <div className="w-full md:w-[60vw] px-6 md:px-12 pt-8 pb-12">
        <div className="flex items-center gap-2 mb-8">
          <LuTrendingUpDown className="text-2xl text-violet-600" />
          <h2 className="text-xl font-semibold text-gray-900">Finance Flow</h2>
        </div>
        {children}
      </div>

      {/* Right Section - Decorative Elements */}
      <div className="hidden md:block w-[40vw] h-screen bg-violet-50 overflow-hidden p-8 relative">
        {/* Decorative Shapes */}
        <div className="w-48 h-48 rounded-[40px] bg-violet-600/80 absolute -top-7 -left-5 blur-sm"></div>
        <div className="w-48 h-56 rounded-[40px] border-[20px] border-violet-400/60 absolute top-[30%] -right-10"></div>
        <div className="w-48 h-48 rounded-[40px] bg-violet-500/70 absolute -bottom-7 -left-5 blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 space-y-8">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="430,000"
            color="bg-violet-600"
          />
          <img
            src={CARD_2}
            alt="Finance Card"
            className="w-64 lg:w-[90%] rounded-xl shadow-xl shadow-violet-400/20 transition-transform hover:scale-105 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

// Stats Card Component
const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-lg shadow-violet-400/10 border border-violet-100/50 hover:shadow-xl transition-shadow duration-300">
      <div
        className={`w-12 h-12 flex items-center justify-center text-2xl text-white ${color} rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-sm text-gray-600 mb-1 font-medium">{label}</h6>
        <span className="text-xl font-semibold text-gray-900">₹{value}</span>
      </div>
    </div>
  );
};

export default AuthLayout;