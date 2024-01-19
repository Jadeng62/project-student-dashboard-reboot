import React, { useEffect, useState } from "react";
import "./CardListing.css";
import { Card } from "./Card";

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
