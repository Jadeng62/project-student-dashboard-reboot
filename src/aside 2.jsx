import { useEffect, useState } from "react";
import "./aside.css";

const URL = "http://localhost:5001/api/students";

export const Aside = ({ displayStudentTerm }) => {
  const [semester, setSemester] = useState([]);
  const [sortOrder, setSortOrder] = useState("ascending");

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setSemester(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(semester);

  const filteredSemester = () => {
    const cohortCodes = {};
    semester.forEach((student) => {
      const code = student.cohort.cohortCode;
      if (!cohortCodes[code]) {
        cohortCodes[code] = true;
      }
    });
    const sortedCodes = Object.keys(cohortCodes).sort();
    if (sortOrder === "descending") {
      sortedCodes.reverse();
    }
    return sortedCodes;
  };

  const eachSemester = filteredSemester();

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div className="term-holder">
      <h1>Semester :</h1>
      <select onChange={handleSortChange}>
        <option>--Please Select--</option>
        <option value="ascending">Ascending-Order</option>
        <option value="descending">Descending-Order</option>
      </select>
      <br />
      <ul>
        {eachSemester.map((code, index) => (
          <li
            key={index}
            className="term"
            onClick={() => displayStudentTerm(code)}
          >
            {code}
          </li>
        ))}
      </ul>
    </div>
  );
};
