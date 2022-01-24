import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import HomePage from "./components/HomePage";
import CompanyDetails from "./components/CompanyDetails";

function App() {
  const [jobs, setJobs] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <HomePage jobs={jobs} setJobs={setJobs} />
        <Routes>
          <Route exact path="/comapanyDetails" compponent={CompanyDetails} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
