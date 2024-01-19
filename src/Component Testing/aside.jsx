import { useEffect, useState } from "react";
import "./aside.css";


const URL = "http://localhost:5001/api/students"



export const Aside = () => {

    const [semester, setSemester] = useState([])


    useEffect(() => {
        fetch(URL).then((res) => res.json())
        .then((data) => setSemester(data))
        .catch((error) => console.error("Error fetching data:",
        error))
      },[]);
      console.log(semester)


      const filteredSemester = () => {
            
      }
  


  return  <div className="term-holder">
     <h1>Semester :</h1>
      <ul>
       <li>{filteredSemester}</li>
      </ul>
      </div>
};