import React, { useEffect, useState } from "react";
import "./CardListing.css";
import { Card } from "./Card";

const URL = "http://localhost:5001/api/students";

export const CardListing = ({ selectStudents, selectedSemester}) => {
  console.log("semester:", selectedSemester)
  
  return (
    <div>
      <h2>{selectedSemester}</h2>
      <h2>Total Fellows: {selectStudents.length} Fellows</h2>
      {selectStudents.map((student) => {
        return <Card key={student.id} student={student} />;
      })}
    </div>
  );
};
