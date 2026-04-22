import { useState } from "react";

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) { setError("Name is required."); return; }
    if (score === "" || isNaN(score) || score < 0 || score > 100) {
      setError("Enter a valid score between 0–100.");
      return;
    }
    onAddStudent(name.trim(), score);
    setName("");
    setScore("");
    setError("");
  }

  return (
    <div className="form-panel">
      <div className="form-panel-header">
        <span className="form-panel-dot" />
        <span className="form-panel-label">Register Student</span>
        <span className="form-panel-right">New Entry</span>
      </div>
      {error && <p className="form-error">{error}</p>}
      <form onSubmit={handleSubmit} className="form-row">
        <input
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        <input
          type="number"
          placeholder="Score (0–100)"
          min="0"
          max="100"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="btn-add">+ Add</button>
      </form>
    </div>
  );
}

export default AddStudentForm;
