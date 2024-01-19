import React from "react";

export const CertificationsTable = ({ selectedStudent }) => {
  return (
    <table className=" bg-white border border-gray-300">
      <thead>
        <tr>
          <th>CodeWars</th>
          <th>Scores</th>
          <th>Certifications</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div>
              <p>
                Current Total: {selectedStudent.codewars.current.total} points
              </p>
              <p>
                Last Week: {selectedStudent.codewars.current.lastWeek} points
              </p>
              <p>Goal: {selectedStudent.codewars.goal.total} points</p>
              <p>
                Percent of Goal Achieved:{" "}
                {(
                  (selectedStudent.codewars.current.total /
                    selectedStudent.codewars.goal.total) *
                  100
                ).toFixed(2)}
                %
              </p>
            </div>
          </td>
          <td>
            <div>
              <p>
                Assignments:
                {selectedStudent.cohort.scores.assignments * 100}%
              </p>
              <p>Projects:{selectedStudent.cohort.scores.projects * 100}%</p>
              <p>
                Assessments:{selectedStudent.cohort.scores.assessments * 100}%
              </p>
            </div>
          </td>
          <td>
            <div>
              <p>
                Resume: {selectedStudent.certifications.resume ? "🟢" : "🔴"}
              </p>
              <p>
                LinkedIn:{" "}
                {selectedStudent.certifications.linkedin ? "🟢" : "🔴"}
              </p>
              <p>
                Mock Interview:{" "}
                {selectedStudent.certifications.mockInterview ? "🟢" : "🔴"}
              </p>
              <p>
                Github: {selectedStudent.certifications.github ? "🟢" : "🔴"}
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
