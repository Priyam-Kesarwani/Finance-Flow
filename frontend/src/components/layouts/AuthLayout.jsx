import React from "react";
import CARD_2 from "../../assets/images/CARD2.png";
import { LuTrendingUpDown } from "react-icons/lu";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen" style={{ backgroundColor: 'var(--bg-0)', color: 'var(--text-0)' }}>
      {/* Left Section - Auth Forms */}
      <div className="w-full md:w-[60vw] px-6 md:px-12 pt-8 pb-12">
        <div className="flex items-center gap-2 mb-8">
          <LuTrendingUpDown className="text-2xl" style={{ color: '#14b8a6' }} />
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-0)' }}>Finance Flow</h2>
        </div>
        {children}
      </div>

      {/* Right Section - Decorative Elements */}
      <div className="hidden md:block w-[40vw] h-screen overflow-hidden p-8 relative" style={{ background: 'linear-gradient(180deg, rgba(20,184,166,0.08), rgba(124,92,255,0.08))' }}>
        {/* Decorative Shapes */}
        <div className="w-48 h-48 rounded-[40px] absolute -top-7 -left-5 blur-sm" style={{ backgroundColor: 'rgba(124,92,255,0.35)' }}></div>
        <div className="w-48 h-56 rounded-[40px] border-[20px] absolute top-[30%] -right-10" style={{ borderColor: 'rgba(20,184,166,0.35)' }}></div>
        <div className="w-48 h-48 rounded-[40px] absolute -bottom-7 -left-5 blur-sm" style={{ backgroundColor: 'rgba(124,92,255,0.25)' }}></div>

        {/* Content */}
        <div className="relative z-10 space-y-8">
          <StatsInfoCard
            icon={<LuTrendingUpDown />}
            label="Track Your Income & Expenses"
            value="430,000"
            color="bg-teal-500"
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
    <div className="flex gap-6 backdrop-blur-sm p-5 rounded-xl transition-shadow duration-300" style={{ backgroundColor: 'var(--bg-1)', border: '1px solid var(--card-ring)', boxShadow: '0 10px 24px rgba(0,0,0,0.35)' }}>
      <div
        className={`w-12 h-12 flex items-center justify-center text-2xl text-white ${color} rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300`}
      >
        {icon}
      </div>
      <div>
        <h6 className="text-sm mb-1 font-medium muted">{label}</h6>
        <span className="text-xl font-semibold" style={{ color: 'var(--text-0)' }}>₹{value}</span>
      </div>
    </div>
  );
};

export default AuthLayout;