import { useEffect, useState } from "react";
import "./aside.css";


const URL = "http://localhost:5001/api/students"



export const Aside = () => {

    const [semester, setSemester] = useState([])
    const [sortOrder, setSortOrder] = useState("ascending")


    useEffect(() => {
        fetch(URL).then((res) => res.json())
        .then((data) => setSemester(data))
        .catch((error) => console.error("Error fetching data:",
        error))
      },[]);
      console.log(semester)




      const handleSortChange = (event) => {
        setSortOrder(event.target.value)
      }




      const filteredSemester = () => {
        const cohortCodes = {} 
        semester.forEach(student => {
            const code = student.cohort.cohortCode;
            if (!cohortCodes[code]) {
                cohortCodes[code] = true;
            } 
        })
            const sortedCodes = Object.keys(cohortCodes).sort();
            if (sortOrder === "descending") {
                sortedCodes.reverse()
            }
            return sortedCodes
      }

      const eachSemester = filteredSemester()
  


      const semOnClick = () => {
        setSortOrder()
      } 


  return  <div className="term-holder">
     <h1>Semester :</h1>
      <select>
        <option>--Please Select--</option>
        <option value="ascending">Ascending-Order</option>
        <option value="descending">Descending-Order</option>
      </select>
       <button onClick={() => semOnClick}>Filter</button>
      <ul>
       {eachSemester.map((code, index) => (
        <li key={index} className="term" onClick>{code}</li>
       ))}
      </ul>
      </div>
};