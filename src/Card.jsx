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
    <div className="student-card grid grid-cols-3 ">
      <div>
        <img src={student.profilePhoto} alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <Link to={`/student/${student.id}`}>
          <h3 className="text-2xl underline">
            {student.names.preferredName} {student.names.middleName}{" "}
            {student.names.surname}
          </h3>
        </Link>
        <p className="text-lg">{student.username}</p>
        <p className="text-lg">
          <span className="text-red-500 font-bold">Birthday: </span>
          {birthdayFormat(student)}
        </p>
      </div>
      <div className="flex justify-end">
        {track && (
          <span className="text-green-500 font-bold text-lg text-right ml-auto p-4">
            On track to graduate
          </span>
        )}
      </div>
    </div>
  );
};
