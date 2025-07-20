const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div
      className={`flex items-center p-4 rounded-xl shadow-md ${color} text-white hover:scale-[1.02] transition-transform duration-300 ease-in-out`}
    >
      <div className="text-3xl mr-3">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-wide font-semibold">
          {label}
        </div>
        <div className="text-xl font-bold mt-1">{value}</div>
      </div>
    </div>
  );
};

export default InfoCard;
