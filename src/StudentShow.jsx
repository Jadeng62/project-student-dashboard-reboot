import React from "react";
import { useParams } from "react-router-dom";

export const StudentShow = ({ students }) => {
  const { id } = useParams();
  const selectedStudent = students.find((student) => student.id === id);

  return <div>{selectedStudent.names.preferredName}</div>;
};
