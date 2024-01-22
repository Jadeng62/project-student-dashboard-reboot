import React from "react";

export const CertificationsTable = ({ selectedStudent }) => {
  const percentage = (
    (selectedStudent.codewars.current.total /
      selectedStudent.codewars.goal.total) *
    100
  ).toFixed(2);

  return (
    <table className=" bg-white border-8 border-black">
      <thead>
        <tr className="text-lg grid grid-cols-3">
          <th className="py-5 text-red-500">CodeWars</th>
          <th className="py-5 text-orange-500">Scores</th>
          <th className="py-5 text-blue-600">Certifications</th>
        </tr>
      </thead>
      <tbody>
        <tr className="grid grid-cols-3">
          <td className="text-center">
            <div className="px-10">
              <p className="pb-5">
                Current Total: {selectedStudent.codewars.current.total} points
              </p>
              <p className="pb-5">
                Last Week: {selectedStudent.codewars.current.lastWeek} points
              </p>
              <p className="pb-5">
                Goal: {selectedStudent.codewars.goal.total} points
              </p>
              <p className="pb-5">
                Percent of Goal Achieved:{" "}
                <span
                  className={
                    percentage > 100 ? "text-green-600" : "text-red-500"
                  }
                >
                  {percentage}
                </span>
                %
              </p>
            </div>
          </td>
          <td className="text-center">
            <div className="px-10">
              <p className="pb-5">
                Assignments: {selectedStudent.cohort.scores.assignments * 100}%
              </p>
              <p className="pb-5">
                Projects: {selectedStudent.cohort.scores.projects * 100}%
              </p>
              <p className="pb-5">
                Assessments: {selectedStudent.cohort.scores.assessments * 100}%
              </p>
            </div>
          </td>
          <td className="text-center">
            <div className="px-10">
              <p className="pb-5 ">
                Resume: {selectedStudent.certifications.resume ? "✅" : "❌"}
              </p>
              <p className="pb-5 ">
                LinkedIn:{" "}
                {selectedStudent.certifications.linkedin ? "✅" : "❌"}
              </p>
              <p className="pb-5 ">
                Mock Interview:{" "}
                {selectedStudent.certifications.mockInterview ? "✅" : "❌"}
              </p>
              <p className="pb-5">
                Github: {selectedStudent.certifications.github ? "✅" : "❌"}
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
