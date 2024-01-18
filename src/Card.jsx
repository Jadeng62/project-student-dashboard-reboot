import React from "react";
import "./Card.css";

export const Card = ({ student }) => {
  return (
    <div>
      <div>
        <img src={student.profilePhoto} alt="" />
      </div>
      <div>
        <h3>
          {student.names.preferredName} {student.names.surname}
        </h3>
      </div>
    </div>
  );
};
