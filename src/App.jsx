import { Header } from "./Header";
import { CardListing } from "./CardListing";
import { Aside } from "./Aside";
// import { Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { StudentShow } from "./StudentShow";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Aside" element={<Aside />} />
        <Route path="/StudentView" element={<StudentShow />} />
      </Routes>
    </div>
  );
}

export default App;
