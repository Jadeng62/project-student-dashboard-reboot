import { Header } from "./Header";
import { CardListing } from "./CardListing";
import { Aside } from "./aside";
import { Footer } from "./footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import { StudentShow } from "./StudentShow";
import { AboutTheDevs } from "./AboutTheDevs";
import { useEffect, useState } from "react";
import { graduationTrack } from "./data/helper";

function App() {
  const URL = "http://localhost:5001/api/students";

  const [allStudents, setAllStudents] = useState([]);
  const [selectStudents, setSelectStudents] = useState([]);
  const [asideInvisible, setAsideInvisible] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState("All Cohorts");

  const navigate = useNavigate();

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setSelectStudents(data);

        setAllStudents(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const displayStudentTerm = (code) => {
    navigate("/");

    if (code === "All Cohorts") {
      setSelectStudents(allStudents);
      setSelectedSemester("All Cohorts");
    } else {
      const studentTerms = allStudents.filter(
        (student) => student.cohort.cohortCode === code
      );
      setSelectStudents(studentTerms);
      setSelectedSemester(code);
    }
  };

  const handleVisibility = () => {
    setAsideInvisible(!asideInvisible);
  };

  return (
    <div className="mx-6">
      <Header
        asideInvisible={asideInvisible}
        setAsideInvisible={setAsideInvisible}
        handleVisibility={handleVisibility}
      />
      <div className="flex flex-row flex-wrap">
        <div className="w-full lg:w-1/4 p-4 order-2">
          {!asideInvisible ? (
            <Aside displayStudentTerm={displayStudentTerm} />
          ) : null}
        </div>
        <div className="w-full lg:w-3/4 p-4">
          {" "}
          {/* Adjust width and padding as needed */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <CardListing
                    selectStudents={selectStudents}
                    selectedSemester={selectedSemester}
                  />{" "}
                </>
              }
            />
            <Route
              path="/student/:id"
              element={
                <>
                  {" "}
                  <StudentShow students={selectStudents} />{" "}
                </>
              }
            />
            <Route path="/aboutthedevs" element={<AboutTheDevs />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
