import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Card.css";
import { birthdayFormat, graduationTrack } from "./data/helper";
import "./index.css";

export const Card = ({ student }) => {
  const [track, setTrack] = useState(false);

  useEffect(() => {
    setTrack(graduationTrack(student));
  }, [student]);

  return (
    <div className="grid grid-cols-1 ">
      <div className=" bg-zinc-100 flex flex-row m-1 mx-6 rounded-xl">
        <div className="gradient-ring ml-20 m-4 ">
          <img
            src={student.profilePhoto}
            alt="profile photo"
            className="image-overlay"
          />
        </div>
        <div className="flex flex-col justify-center pl-20">
          <Link to={`/student/${student.id}`}>
            <h3 className="text-2xl underline hover:text-red-500">
              {student.names.preferredName} {student.names.middleName}{" "}
              {student.names.surname}
            </h3>
          </Link>
          <p className="text-lg">{student.username}</p>
          <p className="text-lg">
            <span className="text-red-500 font-bold">Birthday: </span>
            {birthdayFormat(student)}
          </p>
          {track && (
            <span className="text-green-500 font-bold text-lg  ">
              On track to graduate
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
