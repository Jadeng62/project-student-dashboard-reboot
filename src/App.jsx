import Header from "./header";
import Aside from "./aside";
import DisplayAllStudents from "./main";
import { StudentShow } from "./StudentShow";

function App() {
  return (
    <div>
      <Header />
      <DisplayAllStudents />
      <Aside />
      <StudentShow />
    </div>
  );
}

export default App;
