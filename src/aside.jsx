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

    
    return sortedCodes.map(code => {
    
        const formattedCode = code.replace(/([a-zA-Z]+)(\d+)/, "$1 $2")
        return { original:code, formatted: formattedCode}
    })
  }

  const eachSemester = filteredSemester();

  

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };
   
  

  return (
    <div className="space-x-1 text-center  border border-blue-500 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-sky-100 to-sky-600
     rounded-lg mt-20 mr-5">
      <h1 className="italic font-bold">Select a Semester :</h1>
      <select onChange={handleSortChange}>
        <option>-- Select Order--</option>
        <option value="ascending">Ascending-Order</option>
        <option value="descending">Descending-Order</option>
      </select>
      <br />
      <ul>
        {eachSemester.map((codeObj, index) => (
          <li
            key={index}
            className="font-family: Roboto, sans-serif text-black underline decoration-solid
             decoration-0 cursor-wait bg-blend-color-burn
              bg-gradient-to-bl from-yellow-200 from-red-800 to-blue-500 hover:bg-slate-300 m-1.5
              text-shadow-default rounded"
            onClick={() => displayStudentTerm(codeObj.original)}
          >
            {codeObj.formatted}
            {console.log("This is the obj:",codeObj)}
          </li>
        ))}
        <button onClick={()=> displayStudentTerm("All Cohorts")} className=" p-3 border border-black bg-gradient-to-br from-fuchsia-500 via-red-200 to-orange-400 text-white rounded-lg hover:bg-slate-400">All Semesters</button>
      </ul>
    </div>
  );
};
