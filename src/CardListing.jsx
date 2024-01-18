import React, { useEffect, useState } from "react";
import "./CardListing.css";
// import { getAllStudents } from "./data/fetch";
import { Card } from "./Card";

const URL = "http://localhost:5001/api/students";

export const CardListing = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {students.map((student) => {
        return <Card key={student.id} student={student} />;
      })}
    </div>
  );
};
