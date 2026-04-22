import { useState } from "react";

function StudentRow({ student, isLast, onUpdateScore }) {
  const [inputScore, setInputScore] = useState(student.score);
  const isPassing = student.score >= 40;

  function handleSave() {
    if (inputScore === "" || isNaN(inputScore)) return;
    onUpdateScore(student.id, inputScore);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSave();
  }

  return (
    <tr className={`student-row ${isLast ? "student-row-last" : ""}`}>
      <td className="td-name">{student.name}</td>
      <td className="td-score">
        <span className={isPassing ? "score-pass" : "score-fail"}>{student.score}</span>
      </td>
      <td className="td-status">
        <span className={`badge ${isPassing ? "badge-pass" : "badge-fail"}`}>
          <span className="badge-dot" />
          {isPassing ? "Pass" : "Fail"}
        </span>
      </td>
      <td className="td-update">
        <div className="update-group">
          <input
            type="number"
            min="0"
            max="100"
            value={inputScore}
            onChange={(e) => setInputScore(e.target.value)}
            onKeyDown={handleKeyDown}
            className="score-input"
          />
          <button onClick={handleSave} className="btn-save">Save</button>
        </div>
      </td>
    </tr>
  );
}

export default StudentRow;
