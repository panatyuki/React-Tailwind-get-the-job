import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobLists from "./pages/JobLists";
import JobDetails from "./pages/JobDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobLists />} />
        <Route path="/job" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

