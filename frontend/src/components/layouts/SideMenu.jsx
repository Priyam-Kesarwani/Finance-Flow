import React, { useContext } from "react";
import { SIDE_MENU_DATA } from "../../utils/data";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import CharAvatar from "../Cards/CharAvatar";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
    } else {
      navigate(route);
    }
  };

  return (
    <div className="h-[calc(100vh-61px)] w-64 p-5 sticky top-[61px] z-20" style={{ backgroundColor: 'var(--bg-1)', borderRight: '1px solid var(--card-ring)' }}>
      {/* User Info Section */}
      <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
        {user?.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt="Profile"
            className="w-22 h-22 rounded-full object-cover border-4 border-white shadow-md hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <CharAvatar
            fullName={user?.fullName || ""}
            width="w-20"
            height="h-20"
            style="text-xl"
          />
        )}

        <h5 className="font-medium leading-6" style={{ color: 'var(--text-0)' }}>
          {user?.fullName || ""}
        </h5>
      </div>

      {/* Menu Buttons */}
      {SIDE_MENU_DATA.map((item, index) => (
        <button
          key={`menu_${index}`}
          className={`w-full flex items-center gap-4 text-[15px] px-4 py-3 rounded-lg mb-2 transition`}
          style={
            activeMenu === item.label
              ? { background: 'rgba(20,184,166,0.18)', color: '#d2f5ef', border: '1px solid rgba(20,184,166,0.35)' }
              : { color: 'var(--text-1)' }
          }
          onClick={() => handleClick(item.path)}
        >
          <item.icon className="text-xl" />
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default SideMenu;
