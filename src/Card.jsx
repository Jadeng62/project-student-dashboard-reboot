import React, { useState } from "react";
import "./Card.css";

export const Card = ({ student }) => {
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

  const [month, day, year] = student.dob.split("/");

  const monthName = birthMonths[parseInt(month)];

  return (
    <div className="student-card">
      <div>
        <img src={student.profilePhoto} alt="" />
      </div>
      <div>
        <h3>
          {student.names.preferredName} {student.names.middleName}{" "}
          {student.names.surname}
        </h3>
        <p>{student.username}</p>
        <p>
          <span>Birthday: </span>
          {`${monthName} ${day}, ${year}`}
        </p>
      </div>
    </div>
  );
};
