import StudentRow from "./StudentRow";

function StudentTable({ students, onUpdateScore }) {
  return (
    <div className="table-panel">
      <div className="table-panel-header">
        <span className="table-panel-label">Student Records</span>
        <span className="table-panel-count">{students.length} entries</span>
      </div>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => (
            <StudentRow
              key={student.id}
              student={student}
              isLast={i === students.length - 1}
              onUpdateScore={onUpdateScore}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
