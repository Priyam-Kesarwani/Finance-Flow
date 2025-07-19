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
    <header className="sticky top-0 z-30 bg-gradient-to-r from-green-300 to-pink-300 border-b border-gray-200 backdrop-blur-md px-6 py-4 shadow-sm flex items-center justify-between">
      {/* Left: Menu + Brand */}
      <div className="flex items-center gap-4">
        <button
          className="lg:hidden text-gray-700 hover:text-black transition"
          onClick={() => setOpenSideMenu(!openSideMenu)}
        >
          {openSideMenu ? (
            <HiOutlineX className="text-2xl" />
          ) : (
            <HiOutlineMenu className="text-2xl" />
          )}
        </button>
        <h2 className="text-xl font-semibold text-indigo-700">Finance Flow</h2>
      </div>

      {/* Right: Stats Summary */}
      {location.pathname !== "/dashboard" && (
        <div className="hidden md:flex items-center gap-6">
          {stats.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className={`text-xl ${item.color}`}>{item.icon}</div>
              <div>
                <div className="text-sm text-gray-500 font-medium">
                  {item.label}
                </div>
                <div className="text-base font-semibold text-gray-800">
                  ₹{item.value.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mobile Side Menu */}
      {openSideMenu && (
        <div className="fixed top-[64px] left-0 w-[75vw] max-w-xs h-full bg-white shadow-lg">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
