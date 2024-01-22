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

    const formattedCodes = sortedCodes.map((code) => {
      return code.replace(/([a-zA-Z]+)(\d+)/, "$1 $2");
    });

    return formattedCodes;
  };

  const eachSemester = filteredSemester();

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  // const splitResult = eachSemester.match(/([a-zA-Z]+)(\d+)/);
  //    let season = splitResult[1]
  //     let year = splitResult[2];

  return (
    <div className="space-x-1 text-center  border border-blue-500 bg-zinc-200 mx-0">
      <h1>Semester :</h1>
      <select onChange={handleSortChange}>
        <option>--Please Select--</option>
        <option value="ascending">Ascending-Order</option>
        <option value="descending">Descending-Order</option>
      </select>
      <br />
      <ul>
        {/* {console.log(eachSemester)} */}
        {eachSemester.map((code, index) => (
          <li
            key={index}
            className="term"
            onClick={() => displayStudentTerm(code)}
          >
            {code}
          </li>
        ))}
        <button
          onClick={() => displayStudentTerm("All Cohorts")}
          className=" p-3 border border-red-200 "
        >
          All Semesters
        </button>
      </ul>
    </div>
  );
};
