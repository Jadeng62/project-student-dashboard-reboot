import { Header } from "./header";
import { CardListing } from "./CardListing";
import { Aside } from "./aside"; // Adjusted import statement
import { Footer } from "./footer";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { StudentShow } from "./StudentShow";
import { AboutTheDevs } from "./AboutTheDevs";
import { useEffect, useState } from "react";


function App() {
  // const URL = "http://localhost:5001/api/students";
  const URL = import.meta.env.VITE_BASE_API_URL
  console.log("This is the URL",URL)

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
    <div className="bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400 max-h-full overflow-auto">
      <div className="mx-6 h-screen ">
        <Header
          asideInvisible={asideInvisible}
          setAsideInvisible={setAsideInvisible}
          handleVisibility={handleVisibility}
        />
        <div className="mx-6 bg-zinc-200">
          <div className="flex flex-row flex-wrap">
            <div className="w-full pr-2">
              <Routes>
                <Route
                  path="/"
                  element={
                    <div className="flex flex-row flex-wrap">
                      <div className="w-full lg:w-3/4 pr-2">
                        <CardListing
                          selectStudents={selectStudents}
                          selectedSemester={selectedSemester}
                        />
                      </div>
                      <div className="w-full lg:w-1/4 pr-2">
                        <Aside displayStudentTerm={displayStudentTerm} />
                      </div>
                    </div>
                  }
                />
                <Route
                  path="/student/:id"
                  element={
                    <div className="flex flex-row flex-wrap">
                      <div className="w-full lg:w-2/3 pr-2">
                        <StudentShow students={selectStudents} />
                      </div>
                      <div className="w-full lg:w-1/3 pr-2">
                        <Aside displayStudentTerm={displayStudentTerm} />
                      </div>
                    </div>
                  }
                />
                <Route path="/aboutthedevs" element={<AboutTheDevs />} />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
