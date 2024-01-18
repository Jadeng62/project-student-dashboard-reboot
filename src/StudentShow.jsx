import React from "react";
import { useParams } from "react-router-dom";

export const StudentShow = ({ students }) => {
  const { id } = useParams();
  const selectedStudent = students.find((student) => student.id === id);

  const birthMonths = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const [month, day, year] = selectedStudent.dob.split("/");

  const monthName = birthMonths[parseInt(month)];

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
        {`${monthName} ${day}, ${year}`}
      </h3>
    </div>
  );
};
