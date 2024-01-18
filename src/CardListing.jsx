import React, { useEffect, useState } from "react";
import "./CardListing.css";
import { Card } from "./Card";

const URL = "http://localhost:5001/api/students";

export const CardListing = ({ students }) => {
  // const [students, setStudents] = useState([]);

  // useEffect(() => {
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((data) => setStudents(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);

  return (
    <div>
      <h2>All Cohorts</h2>
      <h2>Total Fellows: {students.length} Fellows</h2>
      {students.map((student) => {
        return <Card key={student.id} student={student} />;
      })}
    </div>
  );
};
