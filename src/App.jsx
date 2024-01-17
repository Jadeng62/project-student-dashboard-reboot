import Header from "./header";
import Aside from "./aside";
import DisplayAllStudents from "./main";




function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="Dashboard">
      <main>
        <DisplayAllStudents />
      </main>
      <div className="Cohort-listing">
        <Aside />
      </div>

       </div>
    </div>
  );
}

export default App;
