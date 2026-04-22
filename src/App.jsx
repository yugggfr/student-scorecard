import { useState } from "react";
import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

const initialStudents = [
  { id: 1, name: "Aarav Sharma", score: 78 },
  { id: 2, name: "Priya Mehta", score: 35 },
  { id: 3, name: "Rohan Verma", score: 91 },
  { id: 4, name: "Sneha Iyer", score: 40 },
  { id: 5, name: "Karan Nair", score: 22 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  function updateScore(id, newScore) {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, score: Number(newScore) } : s))
    );
  }

  function addStudent(name, score) {
    setStudents((prev) => [...prev, { id: Date.now(), name, score: Number(score) }]);
  }

  const passCount = students.filter((s) => s.score >= 40).length;
  const avgScore = students.length
    ? Math.round(students.reduce((a, s) => a + s.score, 0) / students.length)
    : 0;

  return (
    <div className="app">
      <div className="app-inner">
        <Header />
        <AddStudentForm onAddStudent={addStudent} />
        <StatsBar total={students.length} passCount={passCount} avgScore={avgScore} />
        <StudentTable students={students} onUpdateScore={updateScore} />
        <footer className="footer">
          <span>Student Scoreboard</span>
          <span className="footer-dot">·</span>
          <span>Web Dev II — Lab Assignment 3</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
