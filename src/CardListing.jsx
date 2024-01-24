import React, { useEffect, useState } from "react";
import "./CardListing.css";
import { Card } from "./Card";

// const URL = "http://localhost:5001/api/students";
const URL = import.meta.env.VITE_BASE_API_URL

export const CardListing = ({ selectStudents, selectedSemester }) => {
  return (
    <div className="bg-zinc-200">
      <div className="flex flex-row items-center rounded-xl">
        <h2 className="text-3xl pl-8 pt-6 pb-4 flex-grow">
          {selectedSemester}
        </h2>
        <h2 className="text-3xl pl-6 pt-6 pb-4 pr-8">
          Total Students:{" "}
          <span className="text-red-500 font-bold">
            {selectStudents.length}
          </span>{" "}
          Students
        </h2>
      </div>
      <div className="grid grid-cols-1 overflow-y-auto max-h-[788px]">
        {selectStudents.map((student) => {
          return <Card key={student.id} student={student} />;
        })}
      </div>
    </div>
  );
};
