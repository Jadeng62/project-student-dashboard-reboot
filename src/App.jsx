import { Header } from "./Header";
import { CardListing } from "./CardListing";
import { Aside } from "./aside";
import { Route, Routes } from "react-router-dom";
import { StudentShow } from "./StudentShow";

import { useEffect, useState } from "react";





function App() {
 

  const [allStudents, setAllStudents] = useState([])
  const [selectStudents, setSelectStudents] = useState([])




  useEffect(() => {
    fetch(URL).then((res) => res.json())
    .then((data) => {setSelectStudents(data) 
    
      setAllStudents(data)
    })
    .catch((error) => console.error("Error fetching data:",
    error))
  },[]);



  const displayStudentTerm = (code) => {
    const studentTerms = allStudents.filter((student) => 
       student.cohort.cohortCode === code
    );

    setSelectStudents(studentTerms)
  }


  return (
    <div>
      <Header />
      <Aside displayStudentTerm={displayStudentTerm} />
      <Routes>

        <Route path="/" element={<CardListing selectStudents={selectStudents} />} />

        {/* Make an about.jsx component */}
        {/* <Route path="/about" element= {<About />}/> */}
        <Route
          path="/student/:id"
          element={<StudentShow students={students} />}
        />
      </Routes>
    </div>
  );
}

export default App;
