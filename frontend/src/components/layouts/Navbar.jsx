import React, { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { IoMdCard } from "react-icons/io";
import { LuWalletMinimal, LuHandCoins } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import SideMenu from "./SideMenu";
import axiosInstance from "../../utils/axiosInstance"; // Adjust path if needed

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const location = useLocation();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDashboardData = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axiosInstance.get("/api/v1/dashboard/get-data");
      if (response.data) {
        setDashboardData(response.data);
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const stats = [
    {
      icon: <IoMdCard />,
      label: "Balance",
      value: dashboardData?.totalBalance || 0,
      color: "text-indigo-600",
    },
    {
      icon: <LuWalletMinimal />,
      label: "Income",
      value: dashboardData?.totalIncome || 0,
      color: "text-emerald-600",
    },
    {
      icon: <LuHandCoins />,
      label: "Expense",
      value: dashboardData?.totalExpense || 0,
      color: "text-rose-500",
    },
  ];

  return (
    <header className="sticky top-0 z-30 px-6 py-4 shadow-sm flex items-center justify-between" style={{ backgroundColor: 'var(--bg-2)', borderBottom: '1px solid var(--card-ring)' }}>
      {/* Left: Menu + Brand */}
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden transition"
          style={{ color: 'var(--text-1)' }}
          onClick={() => setOpenSideMenu(!openSideMenu)}
        >
          {openSideMenu ? (
            <HiOutlineX className="text-2xl" />
          ) : (
            <HiOutlineMenu className="text-2xl" />
          )}
        </button>
        <div className="flex items-center gap-2">
          {/* Turquoise droplet icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#14b8a6" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2c-3.5 4.6-7 8.1-7 11.6C5 17.8 8.6 21 12 21s7-3.2 7-7.4C19 10.1 15.5 6.6 12 2zM7 13.6C7 10.9 9.2 8.3 12 5c2.8 3.3 5 5.9 5 8.6 0 3-2.2 5.4-5 5.4s-5-2.4-5-5.4z"/>
          </svg>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-0)' }}>Finance Flow</h2>
        </div>
      </div>

      {/* Right: Stats Summary */}
      {location.pathname !== "/dashboard" && (
        <div className="hidden md:flex items-center gap-6">
          {stats.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className={`text-xl ${item.color}`}>{item.icon}</div>
              <div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-1)' }}>
                  {item.label}
                </div>
                <div className="text-base font-semibold" style={{ color: 'var(--text-0)' }}>
                  ₹{item.value.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mobile Side Menu */}
      {openSideMenu && (
        <div className="fixed top-[64px] left-0 w-[75vw] max-w-xs h-full shadow-lg" style={{ backgroundColor: 'var(--bg-1)' }}>
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
