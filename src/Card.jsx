import React, { useState } from "react";
import "./Card.css";
import { birthdayFormat, graduationTrack } from "./data/helper";

export const Card = ({ student }) => {
  const [track, setTrack] = useState(false);

  useEffect(() => {
    setTrack(graduationTrack(student));
  }, [student]);


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
          {birthdayFormat(student)}
        </p>
      </div>
    </div>
  );
};
