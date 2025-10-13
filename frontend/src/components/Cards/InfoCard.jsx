const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="p-4 rounded-xl shadow-md flex items-center hover:scale-[1.02] transition-transform duration-300 ease-in-out" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(124,92,255,0.06))', border: '1px solid var(--card-ring)' }}>
      <div className="text-3xl mr-3">{icon}</div>
      <div>
        <div className="text-[11px] uppercase tracking-wide font-semibold muted">{label}</div>
        <div className="text-xl font-bold mt-1" style={{ color: 'var(--text-0)' }}>{value}</div>
      </div>
    </div>
  );
};

export default InfoCard;
