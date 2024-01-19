import React, { useEffect, useState } from "react";
import "./CardListing.css";
import { Card } from "./Card";

export const CardListing = ({ selectStudents }) => {

  return (
    <div>
      {students.map((student) => {
        return <Card key={student.id} student={student} />;
      })}
    </div>
  );
};
