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
      console.log("This is each cohort", code);
    }
  };

  const handleVisibility = () => {
    setAsideInvisible(!asideInvisible);
  };

  return (
    <div>
      <Header
        asideInvisible={asideInvisible}
        setAsideInvisible={setAsideInvisible}
        handleVisibility={handleVisibility}
      />
      {!asideInvisible ? (
        <Aside displayStudentTerm={displayStudentTerm} />
      ) : null}
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
              {/* <Aside displayStudentTerm={displayStudentTerm} />{" "} */}
            </>
          }
        />

        {/* Make an about.jsx component */}
        {/* <Route path="/about" element= {<About />}/> */}
        <Route
          path="/student/:id"
          element={
            <>
              {" "}
              <StudentShow students={selectStudents} />{" "}
              {/* <Aside displayStudentTerm={displayStudentTerm} />{" "} */}
            </>
          }
        />
        <Route path="/aboutthedevs" element={<AboutTheDevs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
