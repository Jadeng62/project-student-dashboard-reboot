import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { birthdayFormat, graduationTrack } from "./data/helper";
import { CertificationsTable } from "./CertificationsTable";
import { NotesSection } from "./NotesSection";

export const StudentShow = ({ students }) => {
  const { id } = useParams();
  const [track, setTrack] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const studentData = students.find((student) => student.id === id);

      if (studentData) {
        setSelectedStudent(studentData);
        setTrack(graduationTrack(studentData));
      }
    };

    fetchData();
  }, [id, students]);

  if (!selectedStudent) {
    return <div>Student not found</div>;
  }

  return (
    <div className="max-w-4xl grid auto-rows-auto border-4 border-black">
      <div>
        <img
          className="mx-auto p-10"
          src={selectedStudent.profilePhoto}
          alt=""
        />
      </div>
      <div className="grid grid-cols-2">
        <div className="pl-10 ">
          <h3 className="text-2xl">
            {selectedStudent.names.preferredName}{" "}
            {selectedStudent.names.middleName} {selectedStudent.names.surname}
          </h3>
          <h3 className="text-lg">{selectedStudent.username}</h3>
          <h3 className="text-lg">
            <span className="text-red-500 font-bold">Birthday: </span>
            {birthdayFormat(selectedStudent)}
          </h3>
        </div>
        {/* Have to come back and use track here */}
        <div className="text-right">
          {track && (
            <span className="text-green-500 font-bold text-lg text-right pr-10">
              On track to graduate
            </span>
          )}
        </div>
      </div>

      <div className="p-10">
        <CertificationsTable selectedStudent={selectedStudent} />
      </div>
      <div className="p-10">
        <NotesSection />
      </div>
    </div>
  );
};
