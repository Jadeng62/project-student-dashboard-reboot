import React from "react";
import { useParams } from "react-router-dom";
import { birthdayFormat } from "./data/helper";

export const StudentShow = ({ students }) => {
  const { id } = useParams();
  const selectedStudent = students.find((student) => student.id === id);

  if (!selectedStudent) {
    return <div>Student not found</div>;
  }

  return (
    <div>
      <div>
        <img src={selectedStudent.profilePhoto} alt="" />
      </div>
      <h3>
        {selectedStudent.names.preferredName} {selectedStudent.names.middleName}{" "}
        {selectedStudent.names.surname}
      </h3>
      <h3>{selectedStudent.username}</h3>
      <h3>
        <span>Birthday: </span>
        {birthdayFormat(selectedStudent)}
      </h3>
      <table>
        <thead>
          <tr>
            <th>CodeWars</th>
            <th>Scores</th>
            <th>Certifications</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};
