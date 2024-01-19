import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        <Link to={`/student/${student.id}`}>
          <h3>
            {student.names.preferredName} {student.names.middleName}{" "}
            {student.names.surname}
          </h3>
        </Link>
        <p>{student.username}</p>
        <p>
          <span>Birthday: </span>
          {birthdayFormat(student)}
        </p>
        {track && <span>On track to graduate</span>}
      </div>
    </div>
  );
};
