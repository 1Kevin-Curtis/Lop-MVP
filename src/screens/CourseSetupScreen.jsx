
import { useState } from "react";

export default function CourseSetupScreen({ onStart }) {
  const [course, setCourse] = useState("Sunningdale");
  const [tees, setTees] = useState("White");

  return (
    <div className="screen">
      <h1>Set Up Round</h1>

      <div className="card">
        <label>Course</label>

        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option>Sunningdale</option>
          <option>Wentworth</option>
          <option>St Andrews</option>
        </select>

        <label>Tees</label>

        <select value={tees} onChange={(e) => setTees(e.target.value)}>
          <option>White</option>
          <option>Yellow</option>
        </select>
      </div>

      <button
        className="primary-button"
        onClick={() => onStart(course, tees)}
      >
        Start Round
      </button>
    </div>
  );
}
