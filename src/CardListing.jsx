import React, { useEffect, useState } from "react";
import "./CardListing.css";
import { Card } from "./Card";

const URL = "http://localhost:5001/api/students";

export const CardListing = ({ selectStudents }) => {
  return (
    <div>
      <h2>All Cohorts</h2>
      <h2>Total Fellows: {selectStudents.length} Fellows</h2>
      {selectStudents.map((student) => {
        return <Card key={student.id} student={student} />;
      })}
    </div>
  );
};
