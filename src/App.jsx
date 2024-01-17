import { Header } from "./Header";
import { CardListing } from "./CardListing";
import { Aside } from "./Aside";
// import { Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { StudentShow } from "./StudentShow";

function App() {
  return (
    <div>
      <Header />
      <Aside />
      <Routes>
        <Route path="/" element= {<CardListing />}/>
        {/* Make an about.jsx component */}
        {/* <Route path="/about" element= {<About />}/> */}
        <Route path= "/student/:id" element={<StudentShow />} />
      </Routes>
    </div>
  );
}

export default App;
