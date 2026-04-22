function StatsBar({ total, passCount, avgScore }) {
  return (
    <div className="stats-bar">
      <div className="stat-card">
        <span className="stat-label">Total</span>
        <span className="stat-value">{total}</span>
      </div>
      <div className="stat-divider" />
      <div className="stat-card">
        <span className="stat-label">Passed</span>
        <span className="stat-value stat-pass">{passCount}</span>
      </div>
      <div className="stat-divider" />
      <div className="stat-card">
        <span className="stat-label">Avg Score</span>
        <span className="stat-value stat-avg">{avgScore}</span>
      </div>
    </div>
  );
}

export default StatsBar;
