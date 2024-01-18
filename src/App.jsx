import { Header } from "./Header";
import { CardListing } from "./CardListing";
import { Aside } from "./aside";
import { Route, Routes } from "react-router-dom";
import { StudentShow } from "./StudentShow";
import { useState, useEffect } from "react";

function App() {
  const URL = "http://localhost:5001/api/students";

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Header />
      <Aside />
      <Routes>
        <Route path="/" element={<CardListing students={students} />} />
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
