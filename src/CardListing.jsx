import React, { useEffect, useState } from "react";
import "./CardListing.css";
import { Card } from "./Card";

const URL = "http://localhost:5001/api/students";

export const CardListing = ({ selectStudents, selectedSemester }) => {
  console.log("semester:", selectedSemester);

  return (
    <div>
      <h2 className="text-3xl">{selectedSemester}</h2>
      <h2 className="text-3xl">
        Total Fellows:{" "}
        <span className="text-red-500 font-bold">{selectStudents.length}</span>{" "}
        Fellows
      </h2>
      <div className="grid grid-cols-1">
        {selectStudents.map((student) => {
          return <Card key={student.id} student={student} />;
        })}
      </div>
    </div>
  );
};
